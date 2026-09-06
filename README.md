# websitesbymanny

Portfolio site for Manny Pachano. Built with [Astro](https://astro.build), deployed on Netlify from the `main` branch.

Live: https://websitesbymanny.netlify.app

## Stack

- Astro (static output, no server runtime)
- Plain CSS with scoped component styles (no framework)
- Self-hosted Source Sans 3
- Netlify Forms for the contact form
- Node 22 (see `.nvmrc`)

## Commands

| Command           | Action                                          |
| :---------------- | :---------------------------------------------- |
| `npm install`     | Install dependencies                            |
| `npm run dev`     | Start the dev server at `localhost:4321`        |
| `npm run build`   | Type-check and build the site to `./dist/`      |
| `npm run preview` | Preview the production build locally            |
| `npm run lint`    | Lint `.astro`, `.ts` and `.js` files            |

## Where things live

```
src/
  config.ts              Site constants + the SHOW_CLOX content switch
  data/projects.ts       Homepage project cards (order = display order)
  layouts/Layout.astro   <head>, header, footer, global scripts
  layouts/CaseStudyLayout.astro   Shared layout for every case study page
  components/            Hero, About, Projects, ProjectCard, Contact, Header, Footer
  pages/                 index + one page per case study + thanks
  styles/global.css      Tokens, typography, buttons, shared pieces
public/
  videos/                Card loops (~1-2 MB) and case study clips
  images/                Posters, brand images, OG image
  fonts/                 Source Sans 3 (woff2)
```

## Adding a project

1. Record a scroll-through of the site (about 20-30 s), convert it with the ffmpeg
   commands in `docs/video-assets.md`, and drop the outputs in `public/videos` and `public/images`.
2. Add an entry to `src/data/projects.ts`.
3. Create `src/pages/web-developer-project-<slug>.astro` using `CaseStudyLayout`.

## Search engines

This site is intentionally `noindex` (meta tag, `X-Robots-Tag` header in `netlify.toml`,
and a permissive `robots.txt` so crawlers can read the directive). It is shared by link.
