# Landing pages: how the section works and how to add one

The "Landing pages" section on the homepage and every `/landing-page-<slug>` walkthrough
page are generated from one file: `src/data/landing-pages.ts`. Adding a landing page means
adding images and one entry there. No new components, no new page files.

## Files involved

- `src/data/landing-pages.ts`: one `LandingPage` object per landing page (card text, walkthrough sections, phone screens, details, tools).
- `src/components/LandingPages.astro`: the homepage section. Renders one `LandingPageCard` per entry.
- `src/components/LandingPageCard.astro`: browser frame with the light/dark compare slider, a phone frame, summary, tags, buttons.
- `src/pages/landing-page-[slug].astro`: the walkthrough page template (`getStaticPaths` reads the data file).
- `src/components/CompareSlider.astro`, `BrowserFrame.astro`, `PhoneFrame.astro`: reusable pieces.
- `public/images/landing-pages/<slug>/`: all screenshots for that landing page.

## Screenshots to capture

Capture the live page with Chrome DevTools > Command menu > "Capture full size screenshot",
on a 2x display, once per theme:

- Desktop: viewport 1680 px wide, light and dark. Result: 3360 px wide PNGs.
- Phone: viewport 480 px wide, light. Result: 480 px wide PNG (1x is fine).

## Cropping rules

- Cut the desktop capture at section boundaries (read them with `getBoundingClientRect()` in the console at the same viewport width; multiply by 2 for the 2x PNG).
- Combine short neighbouring sections so no crop is much shorter than 500 css px.
- First screen ("hero", from the top of the page): 1920 px wide WebP, both themes, named `hero-light.webp` and `hero-dark.webp`. It is used by the compare slider on the card and on the page, and as walkthrough item 01.
- Every other section: 1600 px wide WebP, quality 82, named `NN-name-light.webp` / `NN-name-dark.webp`.
- Phone screens: 480 x 1040 crops (6:13) of the phone capture, WebP quality 85, named `mobile-<name>.webp`. The first one is shown on the homepage card.
- Remove anything that is not the page (for example the "Powered by Netlify" badge) by adjusting the crop edges.

## Data entry

Copy the `rythm` entry in `src/data/landing-pages.ts` and change every field. Keep the copy
plain and literal: what the section does, how it was built. Every screenshot needs `width`,
`height` (the real pixel size of the file) and an `alt`.
