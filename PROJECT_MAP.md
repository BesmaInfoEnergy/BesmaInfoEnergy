# PROJECT_MAP — BesmaInfoEnergy

## TECH_STACK

| Component | Technology | Version |
|-----------|-----------|---------|
| Framework | Astro | 6.4.x |
| UI / CSS | Tailwind CSS v3 + PostCSS | 3.x |
| Typography | Inter (Google Fonts) | — |
| Icons | Lucide (via SVG inline) | — |
| Animations | AOS (Animate On Scroll) | 2.3.4 |
| i18n | Astro native i18n routing + custom ui.ts/utils.ts | — |
| CMS | Decap CMS (git-based) | 3.14.x |
| Forms | Formspree | — |
| Hosting | Vercel | — |
| Domain | GitHub → Vercel auto-deploy | — |

## SYSTEM_FLOW

1. **Visiteur** → Accueil → Parcourt services → Portfolio → Blog → Contact → Envoie formulaire
2. **Client potentiel** → Demande devis → Email reçu → Réponse → Conversion
3. **Propriétaire** → Édite blog/projets via Decap CMS `/admin/` ou fichiers JSON locaux

## PAGES_STRUCTURE

| URL | Fichier src/pages/ | Composants clés |
|-----|-------------------|-----------------|
| `/` | `index.astro` | HeroSection, ServiceCard, ProjectCard, TestimonialCard, CTASection |
| `/about` | `about.astro` | Bio, Skills grid, Certifications |
| `/services` | `services.astro` | ServiceCard (filtre IT/Énergie) |
| `/portfolio` | `portfolio.astro` | ProjectCard grid |
| `/portfolio/:slug` | `portfolio/[slug].astro` | Project detail |
| `/blog` | `blog/index.astro` | Blog posts list (filtré par langue) |
| `/blog/:slug` | `blog/[...slug].astro` | Blog post detail + MDX content |
| `/testimonials` | `testimonials.astro` | TestimonialCard grid |
| `/contact` | `contact.astro` | ContactForm + coordonnées + réseaux |
| `/faq` | `faq.astro` | FAQItem accordéon |
| `/legal` | `legal.astro` | Mentions légales |
| `/privacy` | `privacy.astro` | Politique de confidentialité |
| `/admin/` | `public/admin/index.html` | Decap CMS interface |

## DATA_SCHEMA

### services.json
```json
[{
  "id": "string",
  "category": "it | energy",
  "icon": "code | wrench | globe | shield | sun | bar-chart | zap | thermometer",
  "fr": { "title": "string", "short": "string", "details": "string" },
  "en": { ... },
  "ar": { ... }
}]
```

### projects.json
```json
[{
  "id": "string",
  "category": "it | energy",
  "image": "/images/projects/*.jpg",
  "tags": ["string"],
  "link": "url | null",
  "fr": { "title": "string", "description": "string", "tech": "string" },
  "en": { ... },
  "ar": { ... }
}]
```

### testimonials.json
```json
[{
  "id": "string",
  "rating": 1-5,
  "fr": { "name": "string", "role": "string", "text": "string" },
  "en": { ... },
  "ar": { ... }
}]
```

### blog (Content Collection — Markdown frontmatter)
```yaml
---
title: string
description: string
pubDate: date
tags: string[]
lang: "fr" | "en" | "ar"
image: string (optional)
---
```

## SEO

- Site title format: `{Page Title} | BesmaInfoEnergy`
- OG tags: title, description, type, url, locale (par page)
- Canonical URL par page
- `robots.txt` → autorise tout, pointe vers sitemap
- Sitemap généré automatiquement par Astro
- Structure heading: h1 → h2 → h3
- Attributs ARIA, navigation clavier, contrastes WCAG
- Images avec `loading="lazy"`

## DEPLOYMENT

### Prérequis
- Compte GitHub + Vercel
- Dépot GitHub pushé

### Déploiement Vercel (automatique)
1. Connecter le dépôt GitHub à Vercel
2. Vercel détecte automatiquement Astro
3. Build command: `npm run build`
4. Output directory: `dist`
5. Déploiement automatique sur chaque push → `main`

### Decap CMS
1. Activer Git Gateway sur le dépôt (via Decap CMS)
2. L'interface admin est accessible à `https://domain.com/admin/`
3. Config dans `public/admin/config.yml`

### Formspree
1. Créer un compte Formspree → créer un formulaire
2. Copier l'ID du formulaire
3. Remplacer `YOUR_FORM_ID` dans `src/components/ContactForm.astro`

### Scripts
```bash
npm run dev       # Développement local
npm run build     # Build production → dist/
npm run preview   # Preview du build
```

## ORPHANS & PENDING

- [ ] **Formspree ID** : Remplacer `YOUR_FORM_ID` dans ContactForm.astro
- [ ] **Images réelles** : Remplacer les placeholders dans `public/images/projects/`
- [ ] **Logo** : Rafiner le favicon.svg en logo complet
- [ ] **Dark Mode** : Implémenter le toggle thème (classe `dark` sur `<html>`)
- [ ] **Réseaux sociaux** : Mettre à jour les liens LinkedIn, GitHub dans le footer et page contact
- [ ] **Déploiement** : Configurer le dépôt GitHub et connecter à Vercel
- [ ] **Domain** : Acheter un nom de domaine (ex: besmainfoenergy.dz)
- [ ] **Decap CMS** : Activer Git Gateway sur le repo
- [ ] **Contenu réel** : Rédiger les textes définitifs, ajouter photos réelles

## CHANGELOG

| Date | Modification | Fichiers modifiés |
|-----|-------------|-------------------|
| 2026-06-18 | Correction bug déploiement Vercel : `@astrojs/tailwind` incompatible avec Astro 6. Remplacé par PostCSS + Tailwind v3 direct. | `astro.config.mjs`, `postcss.config.cjs` (nouveau), `package.json` |
