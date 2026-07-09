# Roadmap — Sitio web Victor Avendaño (Project Manager + Asistente Virtual)

> Documento de planeación para ejecución con un code assistant (Claude Code, Cursor, etc.). No contiene código — solo especificación, secuencia de fases y criterios de aceptación.

## 0. Contexto y fuente de verdad

- **Fuente de contenido:** `cv_avendano.pdf` (CV de Victor Camilo Avendaño Forero) — toda copy debe derivarse de logros y datos reales ahí documentados. No inventar testimonios, clientes ni cifras que no estén en el CV.
- **Idiomas:** español e inglés (bilingüe, rutas separadas — ver sección 1).
- **Precios:** no se muestran tarifas fijas en ningún punto del sitio. Modelo "cotización a medida".
- **Marca (DEFINIDA):** ver sección 1.1.
- **Sincronización con Obsidian (agregado 2026-07-08):** este proyecto alimenta el vault de Obsidian de Victor. Al final de cualquier sesión con cambios reales (commits, deploys, decisiones, cambios de datos de contacto), agregar una entrada a `obsidian-log.md` (raíz del repo) siguiendo las reglas de `obsidian-sync.md` (misma carpeta) antes de terminar la sesión.
- **Prueba social:** limitada a lo verificable en el CV (SLA 24h, 100% adherencia a specs, CSAT top-tier en Stripe, escala 2M+ usuarios, fintech US$10B+, C2 English EF SET 88/100). No agregar logos de clientes ni testimonios inventados.

## 1. Arquitectura de información

```
/ (landing principal / hub, español por defecto)
├── /project-manager (sub-landing servicio 1)
├── /virtual-assistant (sub-landing servicio 2)
├── /blog (índice de recursos)
│   └── /blog/[slug] (posts individuales)
├── /contact (o sección embebida en cada landing)
└── /en/* (versión inglesa — rutas espejo: /en, /en/project-manager, /en/virtual-assistant, /en/blog, /en/blog/[slug], /en/contact)
```

**DECISIÓN TOMADA:** rutas separadas por idioma (`/en/...`), no toggle client-side. Motivo: mejor indexación SEO por idioma, permite compartir enlaces directos en el idioma correcto a cada segmento de audiencia (fintech/founders anglo vs. sector público/ONGs hispanohablante), y es el patrón estándar soportado por el i18n nativo de Astro (ver sección 5).

### 1.1 Marca (DEFINIDA)

- **Nombre fijo (obligatorio en las 3 páginas y footer):** Victor Avendaño — nunca "Camilo Avendaño" ni otra variante. El nombre ancla el reconocimiento de marca y coincide con LinkedIn (linkedin.com/in/vavendanof).
- **Descriptor variable por página** (mismo nombre, subtítulo adaptado al contexto/servicio de esa página):

  | Página | Descriptor (usar igual en ES y EN — es un término técnico-profesional) |
  |---|---|
  | Landing principal (hub) | Victor Avendaño \| PM & Support Partner |
  | Sub-landing Project Manager | Victor Avendaño \| AI-Augmented PM |
  | Sub-landing Asistente Virtual | Victor Avendaño \| Executive AI Partner |

- **Tagline ES (hub, subtítulo largo bajo el descriptor):** "Construyo sistemas, no solo completo tareas. Tu socio operativo bilingüe, con IA integrada."
- **Tagline EN (hub):** "I build systems, not just tasks. Your bilingual operations partner, AI built in."
- **Racional:** el nombre fijo evita fragmentar el reconocimiento de marca entre páginas; el descriptor variable permite que cada landing hable directamente al servicio que ofrece sin diluir la identidad "Systems & Support Partner" original, que sigue vigente como tagline de fondo en el hub.
- **Uso obligatorio:** "Victor Avendaño" debe aparecer igual en las 3 páginas y el footer. El descriptor cambia SOLO según la tabla anterior — no improvisar variaciones adicionales ni mezclar descriptores entre páginas.

## 2. Fases de ejecución

### Fase 1 — Fundación (branding + arquitectura técnica) — RESUELTA EN ESTE ROADMAP

- [x] Generar 3–5 opciones de nombre comercial + tagline (bilingüe) — ver histórico de opciones evaluadas en sección 1.1
- [x] Elegir 1 opción con el usuario — **"Systems & Support Partner"** (combinación de opciones 3 y 4 evaluadas), aprobada por Victor
- [x] Decidir arquitectura de rutas por idioma — **rutas separadas `/en/...`**
- [x] Elegir stack técnico — **Astro** (ver sección 5; reemplaza la decisión inicial de Next.js — ver nota de cambio abajo)
- [x] Elegir enfoque de i18n — **i18n nativo de Astro** (routing por prefijo de idioma, mismo patrón `/` = ES / `/en/...` = EN)
- [x] Elegir infraestructura de hosting/dominio — **VM propia en GCP (Compute Engine, free tier) + Nginx + Certbot**, dominio ya registrado en Cloud Domains (ver sección 5)
- [ ] Definir paleta de colores y tipografía — pendiente de generar (ver sección 1.2, tarea abierta para el code assistant o sesión siguiente)
- [ ] Configurar estructura de carpetas/proyecto base (Astro, con colecciones de contenido para blog)
- [ ] Definir sistema de diseño mínimo (componentes: header, footer, botón CTA, tarjeta de servicio, sección de logros, formulario)

**Criterio de aceptación:** proyecto Astro inicializado, `npm run build` genera `dist/` estático sin errores, rutas `/` y `/en` presentes en el build; paleta de colores aprobada; componentes base creados (aunque sin contenido final).

> **Nota de cambio de stack (post-aprobación inicial):** el roadmap originalmente definía Next.js + Vercel. Victor decidió usar una VM propia en GCP con un flujo de "editar archivos localmente → build → subir a la VM", sin panel de administración web ni backend dinámico. En ese contexto, Next.js no aporta nada que un generador de sitio estático no dé, y sí añade complejidad operativa (proceso Node corriendo en la VM, gestión con PM2/systemd). Se reemplazó por **Astro**, que compila a HTML/CSS/JS estático puro — Nginx sirve los archivos directamente, sin runtime de Node en producción. Todas las decisiones de contenido, copy, estructura de páginas y branding de este roadmap siguen vigentes sin cambios; solo cambia la capa de implementación técnica.

#### 1.2 Paleta y tono visual — tarea abierta

Victor pidió que Claude proponga una paleta combinando las tres direcciones evaluadas (corporativo serio / moderno tech / cálido humano) en vez de elegir una sola de forma genérica. Esta propuesta de paleta específica (colores hex, tipografía, ejemplos de aplicación) **debe generarse en la sesión de diseño**, tomando como ancla el nombre "Systems & Support Partner": sugerencia de dirección para esa sesión — base neutra tipo grafito/azul marino (confianza, herencia del CV actual) + un acento cálido no saturado (ej. terracota o ámbar suave) que humanice sin caer en "corporativo frío" ni en "startup tech genérico". Definir en la sesión siguiente antes de tocar componentes visuales.

---

### Fase 2 — Landing principal (hub)
- [ ] Hero section: "Victor Avendaño | PM & Support Partner" + tagline ("Construyo sistemas, no solo completo tareas..."), propuesta de valor dual (PM + AV), CTA dual (dos botones hacia cada sub-landing)
- [ ] Sección "Sobre Victor": resumen profesional condensado (10+ años, AI-fluent, fintech + sector público + ONGs)
- [ ] Sección de logros clave (métricas del CV: SLA 24h, CSAT top-tier, 2M+ usuarios, C2 English)
- [ ] Sección "¿Qué servicio necesitas?": tarjetas comparativas PM vs. Asistente Virtual, cada una enlazando a su sub-landing
- [ ] Selector de idioma (ES/EN) visible en header, enlazando a la ruta espejo correspondiente (`/en/...`)
- [ ] Footer con enlaces de contacto (mailto, WhatsApp, LinkedIn, Calendly) y navegación secundaria

**Criterio de aceptación:** hub renderiza correctamente en `/` y `/en`, ambos CTAs navegan a la sub-landing correcta en el idioma activo, responsive en mobile/tablet/desktop.

---

### Fase 3 — Sub-landing: Project Manager
- [ ] Hero específico con "Victor Avendaño | AI-Augmented PM" y propuesta de valor de PM (enfoque: operativo/administrativo, IA/automatización, sector público/ONGs, remoto multi-stakeholder)
- [ ] Sección "Áreas de especialización" (4 focos definidos: proyectos operativos, implementación de IA, proyectos con entidades públicas/ONGs, coordinación remota)
- [ ] Sección de experiencia relevante (extraída del CV: Ecoproyectos Aire, ARQ, UAERMV — reformulada en clave de "cómo esto te sirve a ti como cliente")
- [ ] Sección de certificaciones relevantes (PMI, Google PM Professional, Generative AI for Project Managers)
- [ ] Sección de modalidades de contratación (full-time, medio tiempo, por proyecto, retainer) — sin precios
- [ ] CTA de contacto (formulario + enlaces directos)
- [ ] Diferenciación de tono/ejemplos según audiencia mixta (fintech/startups vs. sector público/ONGs) — ver nota de riesgo en sección 6

**Criterio de aceptación:** página completa en `/project-manager` y `/en/project-manager`, coherente con branding del hub, formulario de contacto funcional o enlaces directos operativos.

---

### Fase 4 — Sub-landing: Asistente Virtual
- [ ] Hero específico con "Victor Avendaño | Executive AI Partner" (NO "Camilo Avendaño") y propuesta de valor de AV (gestión de inbox/calendario/CRM, soporte en inglés C2, investigación/redacción con IA, documentación de workflows)
- [ ] Sección "Qué incluye el servicio" (los 4 focos definidos)
- [ ] Sección de experiencia relevante (extraída del CV: Stripe, ARQ — en clave de beneficio para el cliente)
- [ ] Sección de herramientas dominadas (Salesforce, Google Workspace, Microsoft Planner, SharePoint, ChatGPT/Claude/Copilot)
- [ ] Sección de modalidades de contratación (mismas 4 que PM) — sin precios
- [ ] CTA de contacto (formulario + enlaces directos)

**Criterio de aceptación:** página completa en `/virtual-assistant` y `/en/virtual-assistant`, coherente con branding del hub, formulario de contacto funcional o enlaces directos operativos.

---

### Fase 5 — Sistema de contacto
- [x] ~~Definir proveedor de formulario (Formspree o EmailJS)~~ — **decisión revertida:** sin formulario, solo canales directos (ver nota de cambio abajo)
- [x] Enlace mailto (melethestel@gmail.com)
- [x] Enlace WhatsApp (+57 305 721 8436) con mensaje prellenado
- [ ] Enlace a Calendly (cuenta ya creada por Victor; falta pegar la URL del evento en `src/components/ContactChannels.astro`)

> **Nota de cambio (post-implementación):** el roadmap originalmente definía un formulario (Formspree/EmailJS) con mailto/WhatsApp como fallback. Victor decidió eliminar el formulario por completo — la página `/contact` muestra únicamente tarjetas de Email, WhatsApp y Calendly. Motivo: simplicidad (sin dependencia de un proveedor externo de formularios) y porque los tres canales directos cubren la necesidad sin fricción adicional.

**Criterio de aceptación:** los tres canales de contacto (mailto, WhatsApp, Calendly) funcionan de extremo a extremo en producción.

---

### Fase 6 — Blog / recursos
- [ ] Definir estructura de post (título, fecha, categoría, cuerpo, imagen destacada opcional) — Content Collections de Astro sobre Markdown local (ver decisión técnica en sección 5)
- [ ] Índice de blog con listado de posts (`/blog` y `/en/blog`)
- [ ] Plantilla de post individual con SEO básico (meta title, meta description, Open Graph tags)
- [ ] Redactar 2–3 posts iniciales sugeridos (temas alineados a la marca personal):
  1. Cómo la IA está cambiando el rol del Project Manager (o del asistente ejecutivo)
  2. Guía práctica: qué preguntar antes de contratar un asistente virtual remoto
  3. Automatización de workflows sin perder el control: lecciones desde fintech y sector público
- [ ] Enlace de blog visible en navegación del hub

**Criterio de aceptación:** al menos 1 post publicado y visible en producción en ambos idiomas; estructura reutilizable para publicar futuros posts vía archivos Markdown (nuevo post = nuevo archivo `.md` + rebuild + redespliegue a la VM).

---

### Fase 7 — SEO técnico y bilingüe
- [ ] Meta tags (title, description) únicos por página, en ambos idiomas
- [ ] `hreflang` tags entre rutas espejo (`/x` ↔ `/en/x`) — requisito directo de la decisión de rutas separadas tomada en Fase 1
- [ ] Sitemap.xml (incluyendo ambos idiomas)
- [ ] robots.txt
- [ ] Open Graph / Twitter Card tags para compartir en redes
- [ ] Datos estructurados (schema.org `Person` o `ProfessionalService`) en la landing principal

**Criterio de aceptación:** sitio pasa validación básica de Rich Results Test de Google sin errores; sitemap accesible; hreflang correctamente enlazado entre pares ES/EN.

---

### Fase 8 — QA, performance e infraestructura (VM en GCP)
- [ ] Test responsive en mobile/tablet/desktop (breakpoints estándar)
- [ ] Test de ambos idiomas en todas las páginas (sin texto sin traducir ni mezclado)
- [ ] Test de todos los CTAs y enlaces de contacto
- [ ] Auditoría de performance (Lighthouse: objetivo 90+ en Performance/Accessibility/SEO) — correr sobre el build estático local antes de subir
- [ ] Verificar accesibilidad básica (contraste de color, alt text en imágenes, navegación por teclado)
- [ ] **Aprovisionar VM en GCP Compute Engine:** instancia `e2-micro` (free tier), región compatible con free tier (`us-west1`, `us-central1` o `us-east1`), imagen Ubuntu LTS
- [ ] **Instalar y configurar Nginx** en la VM para servir archivos estáticos desde `/var/www/victoravendano/` (o ruta equivalente)
- [ ] **Configurar firewall de GCP:** abrir puertos 80 (HTTP) y 443 (HTTPS) en las reglas de firewall de la VPC
- [ ] **Apuntar el dominio (ya en Cloud Domains) a la IP externa de la VM:** crear registro A en Cloud DNS hacia la IP estática de la instancia (reservar IP estática, no efímera, para que no cambie en reinicios)
- [ ] **Instalar Certbot y emitir certificado SSL** (Let's Encrypt) para el dominio, configurar renovación automática (systemd timer o cron)
- [ ] Definir y documentar el flujo de despliegue manual: `npm run build` local → `rsync`/`scp` de la carpeta `dist/` hacia `/var/www/victoravendano/` en la VM → recarga de Nginx si aplica
- [ ] Pegar la URL real de Calendly en `CALENDLY_URL` (`src/components/ContactChannels.astro`)
- [ ] Verificar enlaces de contacto en producción (no solo en local), incluyendo que el certificado SSL sea válido (candado verde, sin warnings)

**Criterio de aceptación:** sitio accesible vía HTTPS en el dominio de producción, certificado SSL válido y con renovación automática configurada, IP estática reservada, Lighthouse ≥90 en las 3 categorías sobre el sitio ya desplegado, checklist de QA sin pendientes críticos, flujo de despliegue manual documentado y probado al menos una vez de extremo a extremo.

---

## 3. Estructura de contenido por sección (referencia rápida)

| Página | Secciones obligatorias |
|---|---|
| Hub | Hero, Sobre Victor, Logros, Comparativa de servicios, Footer/contacto |
| PM | Hero, Áreas de especialización, Experiencia relevante, Certificaciones, Modalidades, CTA |
| Asistente Virtual | Hero, Qué incluye, Experiencia relevante, Herramientas, Modalidades, CTA |
| Blog índice | Listado de posts con fecha/categoría |
| Blog post | Título, meta, cuerpo, CTA de regreso a servicios |

## 4. Datos fuente ya recopilados (usar directamente, no volver a preguntar)

- **Nombre completo (legal, CV):** Victor Camilo Avendaño Forero
- **Nombre de marca (usar siempre en el sitio):** Victor Avendaño
- **Descriptores por página:** ver tabla en sección 1.1 (hub: "PM & Support Partner" / PM: "AI-Augmented PM" / VA: "Executive AI Partner")
- **Ubicación:** Bogotá, Colombia
- **Email:** melethestel@gmail.com
- **Teléfono/WhatsApp:** +57 305 721 8436
- **LinkedIn:** linkedin.com/in/vavendanof
- **Idiomas:** Español (nativo), Inglés C2 (EF SET 88/100)
- **Experiencia clave:** ARQ/DolarApp (FinCrime Analyst, jul 2024–abr 2026), Stripe (Customer Support Specialist, may 2023–jul 2024), Ecoproyectos Aire S.A.S (Operations & PM 2018–2023, Junior PM 2015–2018), UAERMV Gobierno de Bogotá (2018–2023), Universidad Distrital (2015–2016)
- **Liderazgo ONG:** Fundador y Gerente General de Asociación Jugger Colombia (2020–2023) y Asociación Speculum Alae (2011–2017)
- **Educación:** BA en Historia (Universidad Nacional de Colombia), Diploma Internacional en Gestión de Proyectos (PMI, IEP/Asturias), 2 años de Ingeniería de Sistemas
- **Certificaciones destacadas:** Google AI Professional Certificate, Google Project Management Professional Certificate, Generative AI for Project Managers (IBM), Stakeholder Management (Google), EF SET C2
- **Herramientas:** Salesforce, Microsoft Planner, Google Workspace, SharePoint, MS Office, ChatGPT, Claude, Microsoft Copilot, Ollama, Qwen, DeepSeek

## 5. Decisiones técnicas (Fase 1 — TODAS RESUELTAS)

1. **Framework:** ✅ **Astro**, generador de sitio estático puro (compila a HTML/CSS/JS sin runtime de Node en producción). Reemplaza la decisión inicial de Next.js — ver nota de cambio en Fase 1.
2. **Gestión de contenido bilingüe:** ✅ **i18n nativo de Astro**, con rutas separadas (`/` = ES por defecto, `/en/...` = inglés). Mismo patrón de URLs que se había decidido, solo cambia la implementación (Astro i18n routing en vez de next-intl).
3. **Blog:** ✅ **Content Collections de Astro** sobre archivos Markdown/MDX locales, dado el volumen bajo esperado (2-3 posts iniciales). No se requiere CMS headless ni backend.
4. **Proveedor de formulario:** ❌ descartado — ver nota de cambio en Fase 5. El sistema de contacto es solo mailto + WhatsApp + Calendly, sin formulario ni proveedor externo.
5. **Hosting:** ✅ **VM propia en Google Cloud Compute Engine** (instancia `e2-micro`, free tier) + **Nginx** sirviendo los archivos estáticos generados por Astro + **Certbot** para SSL (Let's Encrypt) con renovación automática. Reemplaza la decisión inicial de Vercel — ver detalle de setup en Fase 8.
6. **Dominio:** ✅ ya registrado por Victor en **Google Cloud Domains**. Se gestiona vía **Cloud DNS**, con un registro A apuntando a la IP externa **estática** de la VM (no efímera, para evitar que cambie en reinicios).
7. **Flujo de actualización de contenido:** ✅ manual — Victor (o el code assistant) edita archivos fuente localmente (Markdown para blog, `.astro`/componentes para páginas), corre `npm run build`, y sube la carpeta `dist/` resultante a la VM vía `rsync` o `scp`. No hay panel de administración web ni CMS con login — es edición de archivos + redespliegue.
8. **Costo:** la instancia `e2-micro` en las regiones free-tier de GCP (`us-west1`, `us-central1`, `us-east1`) está cubierta por el nivel gratuito de Compute Engine bajo uso normal; Cloud Domains y el tráfico de red pueden generar cargos menores — revisar la calculadora de precios de GCP si el tráfico crece significativamente.

## 6. Riesgos y notas para el code assistant

- **Riesgo de mensaje genérico:** la audiencia de PM incluye tanto fintech/startups (presupuesto alto, ritmo rápido) como sector público/ONGs (presupuesto ajustado, procesos formales). Si el copy queda demasiado genérico para no elegir, puede no conectar con ninguno de los dos. Sugerencia: usar ejemplos/lenguaje que sirvan a ambos sin fingir especialización que no está documentada en el CV.
- **No hay testimonios reales:** no generar citas ficticias ni "clientes" de relleno. Si se necesita prueba social visual, usar solo las métricas cuantitativas ya validadas.
- **Calendly es una dependencia externa de Victor:** el code assistant no puede crear la cuenta de forma autónoma; debe dejar un placeholder claro (`CALENDLY_URL` vacío → tarjeta "próximamente") y guiar a Victor paso a paso para pegar la URL real. El dominio y la VM en GCP ya están/estarán bajo control de Victor (Cloud Domains + Compute Engine), pero la configuración de DNS, firewall y SSL sigue siendo trabajo explícito de Fase 8, no algo automático.
- **Consistencia de marca:** "Victor Avendaño" es el nombre fijo en las 3 páginas y el footer — nunca "Camilo Avendaño" ni otra variante. El descriptor SÍ cambia por página según la tabla de la sección 1.1 (esto es intencional, no un error a corregir). El tagline largo ("Construyo sistemas...") se usa solo en el hub. Evitar que un code assistant mezcle descriptores entre páginas o reintroduzca "Camilo" por error.
- **hreflang obligatorio:** dado que se eligió el enfoque de rutas separadas por idioma, omitir las etiquetas `hreflang` en Fase 7 sería un error de SEO — no es opcional, es consecuencia directa de la decisión de Fase 1. Esto no cambia con el nuevo stack: Astro también soporta `hreflang` vía metadatos de página.
- **Sin runtime de Node en producción:** con Astro + Nginx no hay proceso Node corriendo en la VM — nada de PM2, systemd para una app Node, ni manejo de puertos internos más allá de lo que Nginx sirve directamente. Si el code assistant propone instalar Node.js en la VM "para correr el sitio", es una señal de que está reintroduciendo el patrón de Next.js por error; solo se necesita Node/npm en la máquina de desarrollo local para ejecutar `npm run build`.
- **IP estática, no efímera:** si la VM se reinicia y la IP externa es efímera (la asignación por defecto en GCP), el registro DNS en Cloud DNS queda apuntando a una IP que ya no existe y el sitio se cae. Reservar una IP estática es un paso obligatorio de Fase 8, no opcional.
- **Renovación de SSL:** Certbot con Let's Encrypt expira cada 90 días — el cron/systemd timer de renovación automática debe verificarse explícitamente (`certbot renew --dry-run`) durante Fase 8, no asumirse como "ya configurado" solo por haber instalado Certbot.

## 7. Checkpoints de aprobación con Victor

1. ~~Después de Fase 1 (branding + stack)~~ — **COMPLETADO en esta sesión.** Queda pendiente solo la paleta de colores específica (sección 1.2) antes de escribir código de UI.
2. Después de Fase 2 (hub) — antes de replicar el patrón de diseño en las sub-landings.
3. Después de Fase 3 y 4 (ambas sub-landings) — antes de pasar a blog/SEO.
4. Antes de Fase 8 (despliegue a producción) — confirmación final de contenido y cuentas/recursos creados (VM aprovisionada en GCP, URL de Calendly). El dominio en Cloud Domains ya está resuelto.
