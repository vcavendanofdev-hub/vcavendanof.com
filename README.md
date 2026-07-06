# Sitio web — Victor Avendaño

Sitio estático bilingüe (ES/EN) construido con [Astro](https://astro.build), sin backend ni CMS.
Ver [roadmap.md](roadmap.md) para la especificación completa y [DEPLOY.md](DEPLOY.md) para el
despliegue en la VM de GCP.

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera el sitio estático en dist/
npm run preview   # sirve dist/ localmente para probar el build
```

## Estructura

```
src/
├── content/
│   ├── site/          # copy de cada página, por idioma (es.ts / en.ts)
│   └── blog/           # posts en Markdown (es/ y en/, pareados por translationKey)
├── components/         # Header, Footer, ContactChannels, tarjetas, grids reutilizables
├── layouts/
│   └── BaseLayout.astro  # <head>, meta tags, hreflang, schema.org, Header/Footer
├── i18n/
│   └── config.ts       # locales, helper de rutas por idioma, datos de contacto
├── pages/               # rutas EN por defecto (raíz) + /es/* (rutas espejo en español)
└── styles/
    └── global.css       # paleta, tipografía y estilos base (design system)
```

## Editar contenido

- **Copy de páginas (hero, secciones, CTAs):** edita `src/content/site/es.ts` y `en.ts`. Cada
  cambio debe reflejarse en ambos archivos para mantener paridad entre idiomas.
- **Nuevo post de blog:** crea un archivo `.md` en `src/content/blog/es/` y su par en
  `src/content/blog/en/`, con el mismo `translationKey` en el frontmatter (así se enlazan
  para el selector de idioma y las etiquetas `hreflang`).
- **Datos de contacto (email, WhatsApp, LinkedIn):** `src/i18n/config.ts` → `siteMeta`.
- **Paleta y tipografía:** `src/styles/global.css` (variables CSS en `:root`).

## Estado del despliegue

- El sitio está desplegado en producción en `https://vavendano.com` (VM de GCP, ver [DEPLOY.md](DEPLOY.md)), con HTTPS activo (Let's Encrypt, renovación automática verificada).
- El enlace de Calendly ya está configurado en `CALENDLY_URL` de `src/components/ContactChannels.astro` y la tarjeta "Book a call" está activa.

## Pendientes conocidos (ver roadmap.md sección 6 y DEPLOY.md)

- QA visual final: correr Lighthouse (objetivo 90+ en Performance/Accessibility/SEO) sobre `https://vavendano.com`.
