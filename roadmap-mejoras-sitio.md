# Roadmap de mejoras — vavendano.com (post-auditoría)

> Documento de planeación para ejecución con un code assistant (Claude Code, Cursor, etc.) sobre el repo `vcavendanofdev-hub/vcavendanof.com`. Complementa (no reemplaza) `roadmap.md` original — este documento parte de una auditoría hecha el 2026-07-06/07 sobre el código fuente en GitHub, el sitio en producción, y el contexto del vault de Obsidian.

## 0. Contexto de la auditoría

Fuentes revisadas: repo completo en GitHub (componentes, layouts, copy `en.ts`/`es.ts`, `astro.config.mjs`, `global.css`), `README.md`/`roadmap.md`/`DEPLOY.md`/`day_1_built.md`, y notas del vault (`Sitio Web Victor Avendano.md`, perfil profesional, board de Job Search). Se contrastaron los hallazgos contra fuentes externas (landing page conversion research, SEO multilingüe de Google, prácticas de prueba social) — ver notas al pie de cada fase.

**Decisiones ya confirmadas por Victor (no reabrir):**
- El hero del hub se mantiene **50/50 entre PM y Asistente Virtual** — ambos CTAs con el mismo peso visual. Esto es una decisión de negocio (búsqueda dual-track activa), no un error a corregir.
- Número de WhatsApp de contacto actualizado a **+57 313 407 5212** (reemplaza +57 305 721 8436 en todo el sitio).
- La foto profesional queda **pendiente explícitamente** — no bloquea el resto de las fases, se ejecuta cuando Victor la tenga lista (ver Fase 4).

---

## Fase 1 — Fixes de datos de contacto (urgente, bajo esfuerzo)

- [ ] Actualizar `src/i18n/config.ts` → `siteMeta.whatsapp` a `+573134075212` y `whatsappDisplay` a `+57 313 407 5212`.
- [ ] Unificar el email de contacto mostrado en el sitio: decidir si se reemplaza `melethestel@gmail.com` por `info@vavendano.com` en `src/i18n/config.ts` (`siteMeta.email`) y en `src/pages/index.astro` (JSON-LD `founder.email`). Si se reemplaza, verificar que el flujo de "Send As" en Gmail siga funcionando para responder desde esa dirección.
- [ ] Verificar que ningún componente tenga el número o email hardcodeado fuera de `siteMeta` (`ContactChannels.astro`, `Footer.astro` ya consumen `siteMeta` — confirmar que no haya otra referencia suelta, ej. en JSON-LD del hub).
- [ ] Rebuild + redeploy (`npm run build` → `rsync` a la VM → reload Nginx) y verificar en producción que el link de WhatsApp abre con el número correcto y mensaje prellenado.

**Criterio de aceptación:** WhatsApp en footer, `/contact`, y `wa.me` links usan +57 313 407 5212 en ambos idiomas; email de contacto es consistente entre sitio y footer.

---

## Fase 2 — SEO técnico: cerrar huecos detectados

- [ ] Agregar `og:image` (y `twitter:image`, cambiar `twitter:card` a `summary_large_image`) en `BaseLayout.astro` — hoy no existe ninguna imagen social, por lo que cualquier link compartido (WhatsApp, LinkedIn) se ve sin preview visual. Requiere un asset (banner 1200×630px) — puede ser tipográfico/de marca mientras no haya foto profesional.
- [ ] Extender el JSON-LD `schema.org` (hoy solo en `index.astro`, solo en inglés) a `project-manager`, `virtual-assistant`, y generar la versión en español también (el componente usa `locale = 'en'` hardcodeado en cada página — replicar con `locale = 'es'` en las rutas `/es/*`).
- [ ] Correr un validador de hreflang (ej. Merkle hreflang tags testing tool) sobre las páginas en producción — el 75% de las implementaciones de hreflang tiene errores según fuentes de SEO técnico, y basta un error para que Google ignore todo el clúster de idiomas. La implementación actual en `BaseLayout.astro` (self + alt + x-default) se ve correcta en el código, pero no ha sido validada en vivo.
- [ ] Ejecutar Lighthouse (Performance/Accessibility/SEO, objetivo 90+) sobre `https://vavendano.com` — pendiente desde el despliegue inicial, nunca ejecutado.

**Criterio de aceptación:** `og:image` visible al pegar el link en WhatsApp/LinkedIn; JSON-LD presente y en el idioma correcto en las 3 páginas principales × 2 idiomas; hreflang validado sin errores; Lighthouse ≥90 en las 3 categorías o lista de hallazgos accionada.

---

## Fase 3 — Estructura de conversión (sin tocar el 50/50 del hero)

> Nota: el hero del hub permanece 50/50 PM/VA por decisión de Victor. Los cambios de esta fase son de refuerzo y jerarquía secundaria, no de la decisión de negocio.

- [ ] En las sub-landings (`/project-manager`, `/virtual-assistant`), reforzar visualmente el único CTA de esa página ("Escríbeme") frente a la navegación global — ej. manteniendo el nav pero dando más peso visual/repetición al CTA de conversión a mitad y final de página, siguiendo la práctica de repetir el CTA principal en vez de introducir acciones nuevas.
- [ ] Diferenciar tono/ejemplos por audiencia dentro de cada sub-landing (riesgo ya señalado en el roadmap original, sección 6, nunca resuelto): agregar 1-2 frases o ejemplos que hablen directamente al segmento fintech/startup vs. sector público/ONG sin fragmentar el mensaje central.
- [ ] Evaluar agregar un micro-formulario o pregunta de calificación antes de los 3 canales de contacto (ej. "¿Buscas contratación full-time o freelance por proyecto?") dado que la búsqueda es dual-track — esto ayuda a Victor a priorizar respuestas, no es indispensable si prefiere mantenerlo simple.

**Criterio de aceptación:** sub-landings mantienen su CTA único reforzado; copy diferenciado por audiencia sin duplicar contenido entre PM/VA.

---

## Fase 4 — Foto profesional (PENDIENTE — próxima tarea conjunta)

- [ ] **Pendiente explícito, sin fecha:** Victor debe proporcionar una foto profesional (headshot) para el hero del hub y/o el footer. La ausencia total de imagen humana en el sitio es la brecha de confianza más grande detectada en la auditoría — un sitio de marca personal sin rostro reconocible reduce la asociación de confianza con el nombre "Victor Avendaño".
- [ ] Cuando la foto esté disponible: definir tratamiento visual (recorte, si lleva marco/fondo de color de marca, tamaño), integrarla en el hero del hub (`index.astro`) sin romper el layout actual de texto, y evaluar una versión recortada para el `og:image` de Fase 2.
- [ ] Placeholder mientras tanto: ninguno necesario en el sitio en vivo — esta fase se ejecuta como sesión separada cuando Victor tenga la foto lista.

**Criterio de aceptación:** foto integrada en el hero, `og:image` actualizado con versión de marca, sin regresión de layout en mobile/tablet/desktop.

---

## Fase 5 — Higiene operativa (infraestructura, no visual)

- [ ] Agregar registro DKIM (hoy solo SPF configurado) en Cloud DNS para mejorar entregabilidad de correos enviados desde `info@vavendano.com`.
- [ ] Corregir `deploy/deploy.sh` (placeholders `VM_HOST`/`VM_USER=victor` no coinciden con el usuario real de Cloud Shell `vcavendanof_dev` ni la IP estática actual `35.239.98.34`) si se quiere usar el script en vez de comandos manuales.
- [ ] Resolver el problema de permisos de GitHub (`git push` da 403 como `vcavendanofdev-hub`) y subir los 2 commits locales pendientes (`fd10602` y posteriores).

**Criterio de aceptación:** `certbot`/DNS con DKIM verificado; `deploy.sh` funcional de extremo a extremo; repo local y remoto sincronizados.

---

## Referencias de la auditoría (fuentes externas consultadas)

- Single-CTA / decision fatigue en landing pages: WordStream (citado en jolenemorris.com), Unbounce, Altitude Design.
- Prueba social sin testimonios / uso de estadísticas verificables como alternativa: CXL, KlientBoost.
- SEO multilingüe, hreflang y URLs separadas por idioma: Google Search Central (developers.google.com), digitalapplied.com, seosherpa.com.
- Imagen/headshot profesional como elemento de confianza en landing pages personales: jolenemorris.com, Forbes Agency Council.

---

## Orden sugerido de ejecución

1. Fase 1 (contacto) — inmediato, cero riesgo.
2. Fase 2 (SEO técnico) — bajo riesgo, alto valor acumulado a mediano plazo.
3. Fase 3 (conversión/copy) — requiere criterio editorial de Victor en el copy diferenciado por audiencia.
4. Fase 5 (operativo) — en paralelo, no bloquea nada del sitio público.
5. Fase 4 (foto profesional) — cuando el material esté listo; es la siguiente sesión de trabajo conjunta.
