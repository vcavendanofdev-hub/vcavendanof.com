# Day 1 — Built (2026-07-02 / 2026-07-03)

Handoff de la primera sesión de trabajo en el proyecto. Cubre el despliegue completo del
sitio en GCP y la configuración del correo profesional. Pensado para que una siguiente
sesión (propia o de otro colaborador) retome el trabajo sin perder contexto.

## 1. Sitio web — despliegue en producción

El sitio (Astro, bilingüe ES/EN, sin backend/CMS — ver [README.md](README.md) y
[roadmap.md](roadmap.md)) quedó desplegado y operativo en `https://vavendano.com`.

### Infraestructura creada en GCP (proyecto `project-a4523983-cfaf-4e24-a2c`)

- **VM Compute Engine:** `victoravendano-web`, zona `us-central1-a`, `e2-micro` (free tier),
  Ubuntu 22.04 LTS.
- **IP externa estática:** `35.239.98.34` (reservada como `victoravendano-ip`, región
  `us-central1` — antes era efímera).
- **Firewall:** reglas `allow-http` (tcp:80) y `allow-https` (tcp:443) sobre los tags
  `http-server`/`https-server` de la VM.
- **DNS (Cloud DNS, zona `vavendano-com`):** registros `A` para `vavendano.com` y
  `www.vavendano.com` apuntando a la IP estática.
- **Servidor web:** Nginx instalado en la VM, sirviendo el build estático desde
  `/var/www/victoravendano/dist/`. Config activa en
  `/etc/nginx/sites-available/victoravendano` (copiada de `deploy/nginx.conf` del repo).
- **HTTPS:** certificado Let's Encrypt vía Certbot para `vavendano.com` y `www.vavendano.com`.
  Redirección HTTP → HTTPS confirmada (`301`). Renovación automática verificada
  (`certbot renew --dry-run` exitoso, `certbot.timer` activo).

### Flujo de despliegue usado

Todo se ejecutó desde **Cloud Shell** (sin instalar nada en Windows):

1. `git clone` del repo (`github.com/vcavendanofdev-hub/vcavendanof.com`) en Cloud Shell.
2. `npm install && npm run build` → genera `dist/` (16 páginas: home, blog index + 3 posts,
   contact, project-manager, virtual-assistant, cada una en `/` y `/es/`).
3. `rsync` de `dist/` a la VM vía SSH (llave generada automáticamente por
   `gcloud compute ssh`).
4. Recarga de Nginx en la VM.

Para futuras actualizaciones de contenido, el flujo documentado en `DEPLOY.md` /
`deploy/deploy.sh` sigue siendo válido — build local o en Cloud Shell + `rsync` +
reload de Nginx. **Nota:** `deploy/deploy.sh` tiene placeholders (`VM_HOST`,
`VM_USER=victor`) que no coinciden con el usuario real de Cloud Shell
(`vcavendanof_dev`) ni con la IP actual — si se quiere usar el script en vez de
comandos manuales, hay que actualizarlo primero.

### QA realizado

- Verificación por `curl`: HTTPS `200 OK` con headers de seguridad
  (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`), redirección HTTP→HTTPS,
  `sitemap-index.xml` accesible, `robots.txt` con el `Sitemap:` correcto.
- Revisión visual en Chrome: home EN/ES, `/project-manager`, `/contact`, `/blog` + post
  individual. Todo carga correctamente, traducción con paridad de estructura.
- Enlaces de contacto verificados (`href` reales, no solo visualmente):
  - Email: `mailto:melethestel@gmail.com`
  - WhatsApp: `wa.me/573057218436` con mensaje prellenado
  - Calendly: `calendly.com/vcavendanof-dev/30min` — **ya estaba activo**, no en estado
    "próximamente" como indicaban los docs originales (se corrigió la documentación, ver
    más abajo)
  - LinkedIn (footer): `linkedin.com/in/vavendanof`
- **Pendiente de esta sesión:** correr Lighthouse (Performance/Accessibility/SEO, objetivo
  90+) sobre `https://vavendano.com` — requiere DevTools interactivo, no se automatizó.

### Documentación actualizada

`DEPLOY.md` y `README.md` se corrigieron para reflejar que Calendly ya está configurado
(antes decían que estaba pendiente) y que el sitio ya está en producción. **Estos cambios
están solo en el working directory local — no se han commiteado ni pusheado al repo de
GitHub.**

## 2. Correo profesional — info@vavendano.com

Se configuró correo funcional bajo el dominio sin usar Google Workspace (evitando el costo
mensual), usando el plan gratuito de [ImprovMX](https://improvmx.com).

### Recepción

- Cuenta ImprovMX (plan Free) con `vavendano.com` agregado.
- Alias comodín `*@vavendano.com` reenviando a `vcavendanof.dev@gmail.com` — cualquier
  dirección `@vavendano.com` (incluyendo `info@`) llega a esa bandeja.
- Registros DNS creados en Cloud DNS (zona `vavendano-com`):
  - `MX` → `10 mx1.improvmx.com.` / `20 mx2.improvmx.com.`
  - `TXT` (SPF) → `v=spf1 include:spf.improvmx.com ~all`
- Verificado: "Email forwarding active" en ImprovMX, correo de prueba recibido
  correctamente.

### Envío ("Send As" en Gmail)

El plan Free de ImprovMX no incluye SMTP saliente (eso es feature de pago, $9/mes). En su
lugar se configuró Gmail para enviar **como** `info@vavendano.com` usando el propio SMTP de
Gmail:

- Verificación en dos pasos (2FA) activada en `vcavendanof.dev@gmail.com` (no estaba
  activada antes de hoy).
- Contraseña de aplicación generada en Google (`myaccount.google.com/apppasswords`).
- En Gmail → Configuración → Cuentas e importación → "Enviar correo como" →
  `info@vavendano.com` agregado como alias, con:
  - SMTP Server: `smtp.gmail.com`, puerto 587, TLS
  - Username: `vcavendanof.dev@gmail.com`
  - Password: la contraseña de aplicación (guardada por el usuario fuera del chat — Google
    no la vuelve a mostrar)
- Verificado con correo de prueba: envío exitoso mostrando `info@vavendano.com` como
  remitente.
- Opción "Reply from the same address the message was sent to" activada, así que las
  respuestas a mensajes recibidos en `info@vavendano.com` salen automáticamente desde esa
  dirección sin cambio manual.

### Limitación conocida

Los correos enviados desde `info@vavendano.com` vía este método muestran en el header
técnico "enviado por gmail.com en nombre de info@vavendano.com" (visible solo si el
destinatario inspecciona el detalle técnico del correo). Es cosmético y no afecta entrega
ni el remitente visible en la bandeja de la mayoría de clientes de correo.

## 3. Pendientes para la próxima sesión

- [ ] **Refinar la visual** del sitio (diseño, espaciados, jerarquía visual, etc.)
- [ ] **Refinar contenido** (copy de las páginas, blog, textos de servicios)
- [ ] **Actualizar datos de contacto al nuevo email** — hoy el sitio (`ContactChannels.astro`
      y el footer) sigue mostrando `melethestel@gmail.com` como dirección de contacto.
      Falta decidir si se reemplaza por `info@vavendano.com` y actualizar el componente +
      rebuild + redeploy.

### Otros pendientes menores que quedaron abiertos (no bloqueantes)

- Correr Lighthouse sobre producción y actuar sobre los hallazgos si aplica.
- Hacer commit/push de los cambios en `DEPLOY.md` y `README.md` (están sin subir a GitHub).
- Revisar/actualizar `deploy/deploy.sh` si se quiere usar el script automatizado en vez de
  comandos manuales (placeholders `VM_HOST`/`VM_USER` desactualizados).
- Confirmar si se quiere agregar DKIM (además del SPF ya configurado) para mejorar la
  entregabilidad del correo saliente — no se configuró en esta sesión.
