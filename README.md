# Dra. Alejandra Ríos — Veterinaria a Domicilio

A production-ready website for a home veterinary service based in Asunción, Paraguay. Built as a real client project with a modern React stack, deployed on Netlify.

**Live site:** https://doctora-veterinaria-alejandra.netlify.app/

---

## About the Builder

**Erika** — Full Stack Developer & Designer

I'm a builder who loves using AI tools to ship faster and think bigger. I hold a **Google UX Design specialization** and care deeply about user experience, information hierarchy, and design systems that actually scale.

This project is a reflection of how I work: I used AI throughout the entire design-to-code pipeline — not to replace creativity, but to increase velocity and test ideas in real time. The result is a fully functional, production-ready site built in a fraction of the usual time.

I believe AI is a multiplier for builders who know what they want to create. The craft is still there — it's just faster now.

---

## AI Tools Used

### Claude Code (Anthropic)
The primary coding agent for this project. Used Claude Code with the Claude Sonnet model to:
- Architect the component structure and routing
- Write all page content in Spanish with real veterinary accuracy
- Implement the Netlify Forms integration
- Handle production-readiness details (SEO meta, SPA redirects, form detection)
- Refactor and extend the codebase iteratively in conversation

### Stitch MCP
Used the **Stitch MCP server** directly inside Claude Code to generate and prototype UI screens before implementation. Stitch allowed rapid visual iteration on layouts and component ideas without leaving the coding environment — bridging design and development in the same workflow.

### Claude Design Skills
Leveraged Claude's design knowledge to maintain a cohesive **Material Design 3-inspired system** throughout all pages — consistent color tokens, typography scale, spacing, and component behavior across 9 routes.

---

## Project Overview

A multi-page website for a veterinary professional offering home visit services. The goal was to create a trustworthy, warm, and fully functional online presence — including educational content, emergency information, and a working contact system.

### Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services preview, testimonials, CTA |
| `/services` | Full service catalog in bento grid layout |
| `/emergency` | 24/7 emergency guide with warning signs |
| `/pet-care` | Care guide hub linking to all sub-guides |
| `/contact` | Contact form with Netlify Forms integration |
| `/nutricion` | Nutrition guide — diet, hydration, toxic foods, weight |
| `/cachorros` | Puppy guide — training, socialization, vaccine calendar |
| `/gatos` | Feline guide — enrichment, litter box, preventive care |
| `/mascotas-mayores` | Senior pet guide — aging, health conditions, home adaptations |

### Key Features

- **Netlify Forms** — contact form with email notification support, honeypot spam protection, and success/error states
- **React Router** — client-side routing with scroll restoration
- **CSS Modules** — scoped styles with a shared global design token system
- **Fully responsive** — mobile-first layouts with fluid typography via `clamp()`
- **SEO ready** — meta tags, OG tags, Spanish `lang` attribute
- **Production Netlify config** — `netlify.toml` with SPA redirect rules

---

## Design System

Built on a custom Material Design 3-inspired token system:

```css
--primary: #9c3853        /* Burgundy */
--secondary: #65518a      /* Purple */
--tertiary: #705900       /* Warm brown */
--surface: #fbf5f7        /* Soft pink-white */
```

**Typography:** Plus Jakarta Sans (headings) + Be Vietnam Pro (body) + Material Symbols Outlined (icons)

**Components:** `.pill-btn`, `.card`, `.card-hover`, `.gummy-shadow` — reusable across all pages

---

## Tech Stack

- **React 19** + **Vite 7**
- **React Router DOM 7**
- **CSS Modules**
- **Netlify** (hosting + forms)

---

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

### Netlify Forms Setup

After deploying, go to your Netlify dashboard:
1. **Integrations → Forms → Enable**
2. Navigate to **Forms → contacto**
3. Add your email under **Notifications**

No code changes required — the form is pre-configured.

---

## Reflections

This project is proof that a focused builder with the right AI tools can go from zero to a fully polished, production-ready product fast — without cutting corners on design quality or user experience. The UX foundation (information architecture, visual hierarchy, accessibility considerations) still comes from human expertise. AI handles the execution.

That combination is where I like to work.
