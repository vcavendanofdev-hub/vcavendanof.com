# Despliegue en GCP — guía paso a paso (Fase 8 del roadmap)

Este documento asume que ya tienes una cuenta de Google Cloud con facturación habilitada
y un dominio registrado en Cloud Domains (según roadmap.md sección 5). Todos los comandos
`gcloud` se ejecutan desde tu máquina local o desde Cloud Shell — yo (el code assistant)
no tengo acceso a tu cuenta de GCP y no puedo ejecutarlos por ti.

## 0. Antes de empezar

- [ ] Confirma el nombre exacto de dominio registrado en Cloud Domains y actualízalo en:
  - `astro.config.mjs` → `SITE_URL`
  - `public/robots.txt` → línea `Sitemap:`
  - `deploy/nginx.conf` → `server_name`
- [ ] Instala `gcloud` CLI si no lo tienes: https://cloud.google.com/sdk/docs/install
- [ ] `gcloud init` y selecciona el proyecto correcto.

## 1. Crear la VM (Compute Engine, free tier)

```bash
gcloud compute instances create victoravendano-web \
  --zone=us-central1-a \
  --machine-type=e2-micro \
  --image-family=ubuntu-2204-lts \
  --image-project=ubuntu-os-cloud \
  --tags=http-server,https-server
```

> Usa una región/zona del free tier: `us-west1`, `us-central1` o `us-east1`.

## 2. Reservar una IP externa estática

Una IP efímera cambia si la VM se reinicia, lo que rompe el DNS. Resérvala como estática:

```bash
gcloud compute addresses create victoravendano-ip --region=us-central1

# Obtén la IP reservada:
gcloud compute addresses describe victoravendano-ip --region=us-central1 --format="get(address)"

# Asígnala a la VM (requiere detener temporalmente la interfaz de red o usarla desde la creación):
gcloud compute instances delete-access-config victoravendano-web --zone=us-central1-a --access-config-name="External NAT"
gcloud compute instances add-access-config victoravendano-web --zone=us-central1-a --access-config-name="External NAT" --address=<IP_RESERVADA>
```

## 3. Configurar el firewall

```bash
gcloud compute firewall-rules create allow-http --allow=tcp:80 --target-tags=http-server
gcloud compute firewall-rules create allow-https --allow=tcp:443 --target-tags=https-server
```

## 4. Apuntar el dominio (Cloud DNS)

En la zona DNS de tu dominio (Cloud DNS, ya gestionada por Cloud Domains), crea:

- Registro `A` para `vavendano.com` → `<IP_RESERVADA>`
- Registro `A` para `www.vavendano.com` → `<IP_RESERVADA>` (opcional, si quieres soportar `www`)

```bash
gcloud dns record-sets create vavendano.com. \
  --zone=<TU_ZONA_DNS> --type=A --ttl=300 --rrdatas=<IP_RESERVADA>
```

Espera a que la propagación DNS termine antes de continuar (`dig vavendano.com` debe devolver la IP).

## 5. Conectarte a la VM e instalar Nginx

```bash
gcloud compute ssh victoravendano-web --zone=us-central1-a

# Dentro de la VM:
sudo apt update && sudo apt install -y nginx
sudo mkdir -p /var/www/victoravendano/dist
sudo chown -R $USER:$USER /var/www/victoravendano
```

## 6. Primer despliegue del sitio

Desde tu máquina local, en la carpeta del proyecto:

```bash
npm run build
gcloud compute scp --recurse dist/* vcavendanof_dev@victoravendano-web:/var/www/victoravendano/dist/ --zone=us-central1-a
```

O usa el script incluido (ya trae los valores reales del proyecto por defecto; se puede correr desde Cloud Shell sin configurar llaves SSH):

```bash
./deploy/deploy.sh
```

Luego, en la VM, habilita el server block:

```bash
sudo cp deploy/nginx.conf /etc/nginx/sites-available/victoravendano
sudo ln -s /etc/nginx/sites-available/victoravendano /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
```

En este punto el sitio debe cargar por HTTP en `http://vavendano.com`.

## 7. Emitir el certificado SSL (Certbot + Let's Encrypt)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d vavendano.com -d www.vavendano.com
```

Certbot reescribe automáticamente `nginx.conf` para servir HTTPS y redirigir HTTP → HTTPS.

**Verifica la renovación automática explícitamente** (no asumas que quedó configurada):

```bash
sudo certbot renew --dry-run
systemctl list-timers | grep certbot
```

## 8. Enlace de Calendly

El sitio no tiene formulario de contacto — solo enlaces directos a correo, WhatsApp y Calendly.
El enlace de Calendly ya está configurado en `CALENDLY_URL` dentro de
[src/components/ContactChannels.astro](src/components/ContactChannels.astro)
(`https://calendly.com/vcavendanof-dev/30min`) y la tarjeta "Book a call" está activa en producción.
Si en el futuro cambia el evento o el usuario de Calendly, actualiza esa constante y vuelve a
construir y desplegar (`npm run build` + deploy).

## 9. QA final en producción

- [ ] Verifica ambos idiomas en todas las páginas (`/` y `/es`, y sus rutas hijas)
- [ ] Verifica que el candado SSL aparece sin advertencias
- [ ] Prueba los enlaces de correo, WhatsApp y Calendly de extremo a extremo
- [ ] Prueba los enlaces de mailto, WhatsApp y LinkedIn
- [ ] Corre Lighthouse sobre la URL de producción (objetivo: 90+ en Performance/Accessibility/SEO)
- [ ] Verifica `https://vavendano.com/sitemap-index.xml` y `/robots.txt`

## Flujo de actualización de contenido (después del primer despliegue)

Para publicar un cambio (nuevo post de blog, ajuste de copy, etc.):

```bash
# 1. Edita los archivos fuente localmente (src/content/blog/*.md, src/content/site/*.ts, etc.)
# 2. Haz commit y push (GitHub Desktop)
# 3. Desde Cloud Shell: git pull, luego reconstruye y sincroniza:
./deploy/deploy.sh
```

No hay CMS ni panel de administración — es edición de archivos + rebuild + `gcloud compute scp`, tal como se definió en el roadmap.

## Cabeceras de seguridad y URLs sin barra final (cambio de nginx en la VM)

El archivo vivo de nginx lo reescribió certbot, así que **no se sobrescribe con `deploy/nginx.conf`**:
se edita el vivo. **Orden:** primero despliega el sitio (las fuentes autoalojadas deben existir antes de
activar la CSP), después este cambio.

```bash
# 1. Copia el snippet de cabeceras (desde el repo clonado en Cloud Shell)
gcloud compute scp deploy/security-headers.conf vcavendanof_dev@victoravendano-web:/tmp/ --zone=us-central1-a
gcloud compute ssh victoravendano-web --zone=us-central1-a

# 2. En la VM: instala el snippet y haz copia del archivo vivo
sudo mkdir -p /etc/nginx/snippets
sudo cp /tmp/security-headers.conf /etc/nginx/snippets/security-headers.conf
sudo cp /etc/nginx/sites-available/victoravendano /etc/nginx/sites-available/victoravendano.bak-$(date +%F)

# 3. Edita el vivo (sudo nano /etc/nginx/sites-available/victoravendano), en el bloque `listen 443 ssl`:
#    a) añade, justo después de `index index.html;`:
#         server_tokens off;
#         include snippets/security-headers.conf;
#    b) cambia  try_files $uri $uri/ $uri.html =404;
#       por     try_files $uri $uri/index.html $uri.html =404;
#    c) elimina las líneas add_header sueltas del bloque server (X-Content-Type-Options,
#       X-Frame-Options, Referrer-Policy): el snippet ya las incluye.
#    d) en `location ~* \.(?:css|js|svg|woff2?)$` añade `include snippets/security-headers.conf;`

# 4. Valida y recarga (si `nginx -t` falla, restaura la copia .bak y no recargues)
sudo nginx -t && sudo systemctl reload nginx

# 5. Verifica desde cualquier máquina
curl -sI https://vavendano.com/project-manager | head -12   # debe ser 200 (sin 301) y traer HSTS + CSP
curl -sI https://vavendano.com/no-existe | head -1           # 404
```

Reversión: `sudo cp /etc/nginx/sites-available/victoravendano.bak-<fecha> /etc/nginx/sites-available/victoravendano && sudo nginx -t && sudo systemctl reload nginx`.
