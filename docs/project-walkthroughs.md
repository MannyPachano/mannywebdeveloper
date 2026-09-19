# Project walkthroughs: how the case study pages work and how to update one

The case study pages for TimeClick, Universal Environmental Services, Clox, Landscaper Templates
and Jonathan Zalzman Guitar are generated from one data file, in the same format as the landing
page walkthroughs. Updating a page means replacing images and editing one entry. No component or
page edits are needed.

## Files involved

- `src/data/walkthrough-types.ts`: the `Walkthrough` type shared by landing pages and project pages.
- `src/data/project-walkthroughs.ts`: one entry per project (facts, first screen, highlights, overview, optional results block, sections, galleries, phones, details, tools).
- `src/data/landing-pages.ts`: the same type, one entry per landing page.
- `src/components/WalkthroughPage.astro`: the page template used by both.
- `src/pages/web-developer-project-[slug].astro`: renders every project entry except Clox.
- `src/pages/web-developer-project-clox.astro`: renders the Clox entry, or redirects to `/` when `SHOW_CLOX` is false.
- `public/images/projects/<slug>/`: all screenshots for that project.
- The homepage cards still come from `src/data/projects.ts`. The two files are independent; keep titles and years in sync by hand.

## What each optional block does

- `compare`: two first screens with a drag handle (used by UES for before and after). Without it the page shows `hero` in a browser frame.
- `results`: a titled block with stat tiles, figures with captions and paragraphs (used by TimeClick for the SEO numbers). Leave it out until there are real numbers.
- `galleries`: extra rows of screenshots with captions, two or three columns (other pages of the site, product screens, the three templates).
- `phonesB`: a second row of phone screens with its own intro (used by UES for the old site).
- `sectionVariants` and `srcB`: a switch between two sets of section images (used by Rythm for light and dark).

## Screenshots

Sizes that the template expects:

- First screen: 1920 x 1200 WebP (`first-screen.webp`, or `before-first.webp` and `after-first.webp` for a compare).
- Sections: 1600 px wide WebP, quality 82, named `NN-name.webp` in page order. Cut at section boundaries; join short neighbours so nothing is much shorter than 500 css px.
- Phones: 1170 x 2535 WebP (a 390 x 844 viewport at 3x), named `mobile-name.webp`.
- Gallery items: 1600 px wide, any height; page first screens at 1600 x 1000 look best.

Every image needs `width`, `height` (the real pixel size of the file) and an `alt`.

The captures were made with Playwright (desktop 1680 css px wide at 2x, phone 390 x 844 at 3x)
with lazy images forced to load and chat widgets hidden. Very tall full-page screenshots go blank
near the bottom in Chromium; capture long pages one section at a time instead.

## Copy rules

Plain and literal: what the section does and how it was built. No claims that cannot be checked
on the live site. Client numbers only when the client has already published them or agreed to
them; UES traffic and lead figures stay out until there are enough months to show a trend.
