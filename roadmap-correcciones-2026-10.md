# Roadmap de correcciones — vavendano.com (revisión del 14/10/2026)

> Complementa `roadmap-mejoras-sitio.md` (fases 2–5 siguen vigentes; la Fase 1 quedó desplegada el 14/10/2026). Este documento convierte los hallazgos de la revisión de diseño/contenido del 14/10/2026 en trabajo ejecutable, con las decisiones de Victor ya registradas. Nada de lo que sigue está aplicado todavía.

## 0. Decisiones registradas (Victor, 14/10/2026 — no reabrir)

| # | Tema | Decisión |
|---|---|---|
| D1 | Ecoproyectos Aire | Período de empleado **sep 2016 – ene 2018**. Se **añade** una línea de consultoría: "Consultant (AI integration), sporadic engagements, may 2023 – present", con la redacción aprobada (ver §B1). |
| D2 | Filtro de IA en ARQ | Se **publica** con la cifra: "redujo en más de 90 % la revisión manual innecesaria". |
| D3 | Proyecto Procinal/NEC | Se **anonimiza**: "una cadena nacional de cines", "un socio tecnológico". Sin nombres de clientes ni aliados. |
| D4 | Contacto canónico | Solo el sitio (+57 321 905 2343, info@vavendano.com). Otros documentos quedan fuera de alcance. |
| D5 | Disponibilidad | "Disponibilidad total, sin importar zona horaria ni fines de semana". Se publica con base en Bogotá (UTC-5). |
| D6 | Certificaciones | Lista completa (37), agrupada en 4 bloques, **colapsable**. |
| D7 | Servicios nuevos en la página VA | Traducción EN↔ES · logística de viajes y eventos · gestión documental y archivo de cumplimiento · reportes y seguimiento de KPIs. |
| D8 | Carril fincrime/KYC/AML | **No** se añade. El hero se mantiene 50/50 PM–VA. |
| D9 | CTAs del hero | Ambos **sólidos**: PM terracota, VA azul marino, mismo tamaño. |
| D10 | H1 del hero | Se mantiene el tagline; se añade una línea de rol visible debajo. |
| D11 | Descargas | Autorizado: bajar Inter y Fraunces (woff2) para autoalojarlas. **No** autorizado: instalar Lighthouse CLI. |
| D12 | Repo público | Quitar `cv_avendano.pdf` del árbol y añadirlo a `.gitignore` (queda en el historial). |

## Estado de partida (medido en producción el 14/10/2026)

- Contacto actualizado y verificado en las 10 páginas (EN/ES).
- Peso: ~12 KB HTML + ~6 KB CSS, gzip, sin JavaScript, TTFB ~2 ms. Rendimiento no es un problema.
- No se obtuvo puntuación Lighthouse (la API de PageSpeed devolvió 429). Ver C8.

---

## Fase A — Exactitud y accesibilidad (sin contenido nuevo, riesgo bajo)

Ship primero: corrige errores visibles y fallas WCAG AA. Una sola publicación.

> **Implementada y verificada en local el 14/10/2026; pendiente de commit y despliegue.** Resultados medidos (iframes a 320/375/768/881+ px sobre las 10 rutas): 0 fallas de contraste, 0 desbordes, 0 objetivos táctiles < 44 px (≥ 375 px), cabecera móvil 221 → 102 px.

- [x] **A1. Fechas de Ecoproyectos.** `src/content/site/en.ts` y `es.ts`: PM `period` (línea ~134) de `'2015 – 2023'` a `'Sep 2016 – Jan 2018'` / `'sep 2016 – ene 2018'`; VA `period` (línea ~226) de `'2018 – 2023'` al mismo valor. *Criterio:* ninguna página muestra "2015", "2018 – 2023" ni "2023" asociado al empleo de Ecoproyectos (la línea de consultoría de B1 es la única con 2023).
- [x] **A2. Tagline del pie invisible.** `.tagline` (global.css:101) usa `--color-navy` y el pie es `--color-ink`: 1.31:1. En `Footer.astro`, color del tagline a `#c7cedb` (el mismo gris claro de `.section--dark p`). *Criterio:* ≥ 4.5:1.
- [x] **A3. Terracota que no pasa AA.** *(también aplicado al texto de acento en las 4 páginas de blog; token nuevo `--color-accent-deep: #8a4219` para el hover)* El token `--color-accent: #c1662e` da 4.03:1 con blanco (botones) y 3.7:1 sobre `--color-paper` (eyebrows). El sistema ya tiene `--color-accent-dark: #a04f21` (≈ 5.8:1 sobre blanco, ≈ 5.3:1 sobre paper, calculado). Cambiar `.btn--primary` (fondo), `.eyebrow` (color) y `.skip-link` (fondo) a `--color-accent-dark`; ajustar el `:hover` a un tono aún más oscuro (≈ `#8a4219`). `--color-accent` se queda solo para bordes y detalles decorativos. *Criterio:* el script de auditoría de contraste no reporta fallas.
- [x] **A4. Paridad de CTAs del hero (D9).** En `src/pages/index.astro` y `es/index.astro`: PM `btn--primary`; VA nueva clase `.btn--navy` (`background: var(--color-ink); color: var(--color-cloud)`, hover `--color-navy`). Mismo padding y tamaño. *Criterio:* ambos botones con el mismo peso visual en 375 px y 1440 px.
- [x] **A5. Cabecera móvil.** `Header.astro`: quitar el enlace "Contact" de `<nav>` (el botón de acciones ya lo cubre; el pie conserva el enlace). En ≤ 760 px reducir el alto total (hoy ≈ 27 % de la primera pantalla). *Criterio:* cabecera ≤ 160 px en 375 px, sin palabra huérfana. *(resultado: 102 px a 375 px; 190 px a 320 px, donde cae a tres filas sin desbordar. El punto de corte pasó de 760 a 880 px porque las etiquetas en español envolvían a 768 px.)*
- [x] **A6. Áreas táctiles.** Enlaces de nav y de pie con `min-height: 44px` (hoy 24 px). *Criterio:* ningún enlace/botón < 44 px de alto en móvil.
- [x] **A7. Línea de rol bajo el H1 (D10).** Sub-línea visible bajo el tagline, mayor que el eyebrow actual (12 px): EN "AI-augmented Project Manager and bilingual Virtual Assistant" · ES "Project Manager potenciado con IA y Asistente Virtual bilingüe". Alinear terminología: hoy la meta descripción dice "Executive Assistant", la nav "Virtual Assistant" y el descriptor "Executive AI Partner" (*pendiente de confirmar por Victor al revisar el copy*).

**Publicación 1 = Fase A completa.**

---

## Fase B — Contenido (divulgación ya aprobada)

> **Textos del Apéndice aprobados por Victor el 14/10/2026.** Listo para implementar; la revisión de copy ya no bloquea. (Quedan por confirmar, por no estar en las preguntas: líneas de educación, Jugger 2018 y la terminología "Virtual / Executive Assistant".)

Textos propuestos en el Apéndice.

> **Implementada y verificada en local el 15/10/2026; pendiente de commit y despliegue.** 17 páginas; 37 certificaciones + 2 de formación en ambos idiomas; 22 auditorías (11 rutas × 320/375 px, con todos los desplegables abiertos) sin fallas de contraste, tap ni overflow.

- [x] **B1. Experiencia en la página PM** (`en.ts`/`es.ts`, `pm.experience`):
  - Ecoproyectos Aire — *Operations & Project Manager* — sep 2016 – ene 2018: equipo de 10, 100 % de apego a especificaciones, despliegue multi-ciudad para una cadena nacional de cines con orden de cambio formal (anonimizado, D3).
  - Ecoproyectos Aire — *Consultant (AI integration)* — may 2023 – presente (encargos esporádicos), **con la redacción aprobada y sin más detalle** (D1).
  - ARQ: añadir el filtro de IA (D2) al `benefit`.
- [x] **B2. Estadísticas del hub** (`hub.achievements.stats`): añadir "10 personas lideradas simultáneamente" y "90 %+ menos revisión manual innecesaria (filtro de IA, ARQ)". Máximo 8; en móvil 2 columnas para no alargar la página.
- [x] **B3. Página VA:**
  - Bloque nuevo "Also available" con los 4 servicios de D7 (nuevo campo opcional en `ServicePageContent`, `types.ts`).
  - Stripe: añadir "≈ 20–30 llamadas diarias de verificación KYC".
  - "Tools mastered" → ampliar con Intercom, Zoho CRM, Jira/Confluence, Slack, Outlook/Teams, Trello/Asana/Monday.com/Microsoft Project, Gemini; renombrar a "Tools I work with" (menos afirmación absoluta).
- [x] **B4. Disponibilidad (D5).** Línea en la página de contacto y en `modalitiesIntro` de PM y VA: EN "Based in Bogotá (UTC-5), with full availability across time zones, weekends included." ES en Apéndice.
- [x] **B5. Certificaciones y educación (D6).** *(implementado en el hub, sección `#credentials`; la página PM enlaza a ella en vez de duplicar la lista. Datos en `src/content/site/credentials.ts`.)* Componente nuevo `CertificationGroups.astro` con `<details>` por grupo (AI & Automation 17 · Project & Stakeholder 14 · Administration & Communication 3 · Sustainability 3). Fuente: nota de perfil del vault, sección "Certifications and courses - complete list". Incluir bloque "Education": BA History (Universidad Nacional de Colombia, 2014) y Diplomado Internacional en Gestión de Proyectos, IEP (ago 2016). *Criterio:* accesible por teclado, cerrado por defecto, sin salto de layout.
- [x] **B6. Ya confirmados, a incluir en la revisión de copy (riesgo bajo):** ambas organizaciones sin ánimo de lucro siguen activas hoy; Jugger Club World Championship, Alemania 2018.

**Publicación 2 = Fase B, tras revisión de Victor.**

---

## Fase C — SEO técnico, infraestructura y rendimiento

> **Repo-side implementado el 14/10/2026 (C2–C6 y plantillas de C1/C7); pendiente de commit, despliegue y de los pasos en la VM.** Verificado en local: 17 páginas, 0 recursos de terceros, 8 bloques JSON-LD válidos, 11 rutas sin fallas de contraste/tap/overflow.

- [ ] **C1. Trailing slash.** *(plantilla `deploy/nginx.conf` y runbook de `DEPLOY.md` listos; falta aplicarlo en la VM)* Hoy `canonical` y `hreflang` apuntan a `/project-manager` y nginx los redirige (301) a `/project-manager/`. En el archivo vivo de la VM (`/etc/nginx/sites-available/victoravendano`, gestionado por certbot) y en `deploy/nginx.conf`: `try_files $uri $uri/index.html =404;`. Verificar con `curl -I https://vavendano.com/project-manager` → `200`, sin `301`. *Paso en la VM: lo ejecuta Victor en Cloud Shell.*
- [x] **C2. Página 404 propia.** *(bilingüe en una sola página, `noindex`, fuera del sitemap)* Crear `src/pages/404.astro` (EN) con enlaces a PM, VA y Contacto; `error_page 404 /404.html` ya existe en nginx. *Criterio:* una URL inexistente muestra la página de marca con estado 404.
- [x] **C3. Títulos en español.** *(también los descriptores/eyebrows que repetían el título en inglés)* Hoy `/es/project-manager` y `/es/virtual-assistant` llevan título en inglés; `/es` también. Traducir `meta.title` en `es.ts`. Mantener "Victor Avendaño" delante.
- [x] **C4. Imagen social (Fase 2 del roadmap anterior).** *(tarjeta tipográfica provisional en `public/og-en.png` y `og-es.png`, 1200×630; se reemplaza con la foto)* `og:image` + `twitter:image` 1200×630 y `twitter:card=summary_large_image` en `BaseLayout.astro`; `theme-color`. Activo provisional tipográfico; se reemplaza cuando exista la foto (ver §E).
- [x] **C5. JSON-LD.** *(`src/lib/schema.ts`: `Service` en PM y VA, `ContactPage` en Contacto; EN y ES. El blog no lleva JSON-LD todavía.)* Extender a PM, VA y Contacto, EN y ES (Fase 2 del roadmap anterior).
- [x] **C6. Fuentes autoalojadas (D11).** *(Inter variable 48 KB + Fraunces cursiva 500 42 KB; solo la cursiva se usaba. Las flechas ← → caen a la fuente del sistema.)* Descargar Inter y Fraunces (subconjunto latino, woff2, variable si es posible) a `public/fonts/`; reemplazar el `@import` de global.css:10 por `@font-face` con `font-display: swap`; `<link rel="preload" as="font" crossorigin>` solo para Inter 400 y Fraunces cursiva 500. Eliminar la dependencia de `fonts.googleapis.com`. *Criterio:* cero peticiones a terceros.
- [ ] **C7. Cabeceras de seguridad (nginx, VM).** *(snippet `deploy/security-headers.conf` y runbook listos; falta aplicarlo en la VM, después de desplegar el sitio)* Añadir `Strict-Transport-Security: max-age=31536000` (sin `preload` por ahora), `Content-Security-Policy` estricta (posible tras C6: `default-src 'self'`), `Permissions-Policy`, y `server_tokens off;`. Nota: un `add_header` dentro de un bloque `location` reemplaza los heredados; repetirlos o usar un snippet.
- [ ] **C8. Medición.** Lighthouse CLI no autorizado. Opción: Victor corre PageSpeed Insights (pagespeed.web.dev) o Chrome DevTools → Lighthouse sobre `https://vavendano.com` y pega las puntuaciones; o reintentar la API más tarde. *Criterio:* ≥ 90 en las 4 categorías.

**Publicación 3 = C2–C6 (repo). C1 y C7 son pasos en la VM, independientes.**

---

## Fase D — Higiene del repositorio

- [ ] **D1.** `git rm --cached cv_avendano.pdf` y añadir a `.gitignore`. Victor hace el commit. Nota: el archivo permanece en el historial de git; solo se limita la exposición futura.
- [ ] **D2.** `roadmap-mejoras-sitio.md`: marcar Fase 1 como hecha y apuntar a este documento (hecho junto con este archivo).
- [ ] **D3.** `deploy/deploy.sh` y `DEPLOY.md` ya corregidos el 14/10 (pendientes de commit). Probar `./deploy/deploy.sh` en el próximo despliegue real.
- [ ] **D4.** `obsidian-log.md`: una entrada por publicación.

---

## E. Dependencias externas

| Dependencia | Responsable | Desbloquea |
|---|---|---|
| Revisión del copy del Apéndice (EN/ES) | Victor | Publicación 2 |
| Foto profesional (sesión del 15/10/2026) | Victor | Fase 4 del roadmap anterior; `og:image` definitivo (C4) |
| Pasos en la VM (C1, C7) vía Cloud Shell | Victor | Publicación 3 completa |
| Medición Lighthouse (C8) | Victor | Cierre de la Fase 2 anterior |

## F. Fuera de alcance / aparcado

- Carril fincrime/KYC/AML como servicio (D8). Reabrir solo si Victor lo pide.
- Marca "Vivica": sigue siendo nombre interno; no se publica.
- Testimonios: no existe ninguno documentado; no se inventan. Cuando haya uno real, entra en Fase 3 del roadmap anterior.
- Nuevos artículos de blog.

## G. Cómo se verifica cada publicación

1. `npm run build` sin errores; 16 páginas.
2. Vista previa local en 375 px y 1440 px, EN y ES (sin desbordamiento horizontal).
3. Auditoría automática en las 10 rutas: contraste (0 fallas), áreas táctiles, `lang`, canonical/hreflang, ausencia de placeholders.
4. Despliegue (`DEPLOY.md`: pull en Cloud Shell → build → `./deploy/deploy.sh`) y misma auditoría sobre producción.
5. Entrada en `obsidian-log.md`.

Commits y push los hace Victor con GitHub Desktop.

---

## Apéndice — textos propuestos (para revisión)

**PM · Ecoproyectos Aire S.A.S — Operations & Project Manager — Sep 2016 – Jan 2018**
- EN: "I led a team of 10 and managed full project lifecycles (calendars, budgets, KPI and compliance reporting), achieving 100% adherence to specifications and financial limits. That included a multi-city rollout for a national cinema chain and a formal change order when a technology partner altered its equipment specifications mid-project."
- ES: "Lideré un equipo de 10 personas y gestioné ciclos completos de proyecto (calendarios, presupuestos, reportes de KPIs y de cumplimiento), con 100 % de apego a las especificaciones y a los límites financieros. Incluyó un despliegue en varias ciudades para una cadena nacional de cines y una orden de cambio formal cuando un socio tecnológico modificó las especificaciones de sus equipos a mitad del proyecto."

**PM · Ecoproyectos Aire S.A.S — Consultant (AI integration) — May 2023 – present (sporadic engagements)** *(redacción aprobada, sin más detalle)*
- EN: "Integrates Claude and OpenAI models for tasks that need cloud processing, and Ollama with Qwen and DeepSeek for local processing."
- ES: "Integro modelos de Claude y OpenAI en tareas que requieren procesamiento en la nube, y Ollama con Qwen y DeepSeek para procesamiento local." · Rol: "Consultor (integración de IA)" · Período: "may 2023 – presente (encargos esporádicos)"

**PM · ARQ — añadir al final del `benefit`**
- EN: "I also designed an AI-based first-pass filter for source-of-funds verification that cut unnecessary manual review by over 90% and gave users faster feedback on missing documentation."
- ES: "También diseñé un filtro de primera revisión con IA para la verificación de origen de fondos que redujo en más de 90 % la revisión manual innecesaria y dio a los usuarios una respuesta más rápida sobre la documentación faltante."

**VA · Stripe — añadir**
- EN: "…including roughly 20–30 phone-based KYC verification calls a day."
- ES: "…incluidas entre 20 y 30 llamadas diarias de verificación KYC."

**VA · "Also available" / "También disponible"**
- EN: English ↔ Spanish translation · Travel and event logistics · Document management and compliance filing · Reporting and KPI tracking
- ES: Traducción inglés ↔ español · Logística de viajes y eventos · Gestión documental y archivo de cumplimiento · Reportes y seguimiento de KPIs

**Disponibilidad**
- EN: "Based in Bogotá (UTC-5), with full availability across time zones, weekends included."
- ES: "Con base en Bogotá (UTC-5) y disponibilidad total en cualquier zona horaria, fines de semana incluidos."

**Hero · línea de rol**
- EN: "AI-augmented Project Manager and bilingual Virtual Assistant"
- ES: "Project Manager potenciado con IA y Asistente Virtual bilingüe"
