# THE FORGE — Brotherhood platform (marketing site)

Single-page landing for **THE FORGE**: discipline, strength, and community for men. Built with **React 19**, **Vite 7**, and **Tailwind CSS v4**.

## Prerequisites

- Node.js 20+ (recommended)

## Setup

```bash
npm install
```

Copy environment variables (optional):

```bash
cp .env.example .env
```

| Variable            | Purpose                                                                                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `VITE_WAITLIST_URL` | Where every “Join” CTA goes (HTTPS form, checkout, or `mailto:…`). If unset, links scroll to the **#join** section.                                                         |
| `VITE_SITE_URL`     | Full origin with **no** trailing slash (e.g. `https://your-domain.com`). Used at build time for `og:image` in `index.html`. If unset, it resolves to a path-only image URL. |

## Scripts

```bash
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # serve dist locally
npm run lint
```

## Deploy

`npm run build` outputs static files in `dist/`. Host on any static host (Netlify, Vercel, Cloudflare Pages, S3 + CDN, etc.). Set `VITE_SITE_URL` and `VITE_WAITLIST_URL` in the host’s environment **before** build so Open Graph and CTAs are correct.

Legal stubs for early launch: [Privacy](/public/privacy.html) and [Terms](/public/terms.html) — replace with reviewed copy before collecting data or money.

## Internationalization (i18n)

English and Spanish are supported via **i18next** + **react-i18next**.

- **Strings:** `src/i18n/locales/en.json` and `src/i18n/locales/es.json`
- **Initialization:** `src/i18n/index.js` (imported from `src/main.jsx` before the app mounts)
- **Language selection:** EN / ES controls in the navbar; the choice is stored in `localStorage` under `forge_i18n_lang`
- **First visit:** If nothing is stored, the browser language is used (`es` when the primary language starts with `es`, otherwise `en`)
- **Document & SEO:** `App.jsx` updates `<html lang>`, `document.title`, and description / Open Graph meta when the language changes

To add another language, copy a locale file, register it in `src/i18n/index.js`, and add a button in `LanguageSwitcher.jsx`.

## Project layout

- `src/pages/Landing.jsx` — section order and `<main>` landmark
- `src/components/sections/` — page sections
- `src/components/layout/` — navbar, footer
- `src/i18n/` — i18n config and locale JSON
- `src/config/site.js` — join link helper used by CTAs
- `public/` — static assets and standalone `privacy.html` / `terms.html`
