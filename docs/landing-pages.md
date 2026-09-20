# Landing pages: how the section works and how to add one

The "Landing pages" section on the homepage and every `/landing-page-<slug>` walkthrough
page are generated from one file: `src/data/landing-pages.ts`. Adding a landing page means
adding images and one entry there. No new components, no new page files.

## Files involved

- `src/data/walkthrough-types.ts`: the `Walkthrough` type. Landing pages and project case studies share it (see `docs/project-walkthroughs.md`).
- `src/data/landing-pages.ts`: one entry per landing page (card text, walkthrough sections, phone screens, details, tools).
- `src/components/LandingPages.astro`: the homepage section. Renders one `LandingPageCard` per entry.
- `src/components/LandingPageCard.astro`: browser frame with the compare slider (or a single first screen when there is no `compare`), a phone frame, summary, tags, buttons.
- `src/components/WalkthroughPage.astro`: the walkthrough page template, shared with the project case studies.
- `src/pages/landing-page-[slug].astro`: builds one page per entry (`getStaticPaths` reads the data file).
- `src/components/CompareSlider.astro`, `BrowserFrame.astro`, `PhoneFrame.astro`: reusable pieces.
- `public/images/landing-pages/<slug>/`: all screenshots for that landing page.

## Screenshots to capture

Two scripts on the Mac do this. Neither lives in this repo.

`~/Downloads/_claude-captures/capture3.mjs` opens each live URL three times with Playwright and
writes to `~/Downloads/_claude-captures/<slug>/`:

- `home-first.png`, the first screen at 1920 x 1200 css and 2x, for the homepage card.
- `home-sec-NN.png`, one PNG per top-level block at 1680 css wide and 2x. The walker treats a block
  as a section when it is at least 120 css px tall and most of the page width, and opens up anything
  taller than 2600 css px. Blocks taller than the viewport are fine: each one is shot as an element,
  which avoids the blank areas Chromium produces past 16384 px in a full-page screenshot.
- `home-phone-NN.png`, one 390 x 844 css viewport at 3x per section.
- `home-parts.json`, the manifest. Always read the crops from this, not from a glob: a re-run
  can produce fewer sections than the run before and leave stale frames in the folder.

It hides the annotation layer (`#mockbar`, `.ann`, `.ann-slot`, `.legend`) before shooting, so a
mockup that carries notes is photographed clean. Pass slugs to limit it: `node capture3.mjs apple-seo`.

## Cropping rules

`~/rythm/lp.py <spec.json>` turns the captures into the WebP files this repo uses. The spec names
the output for each section and the PNGs that make it up; several PNGs stack vertically into one
image, and `["home-sec-04.png", y0, y1]` takes a window in PNG pixels out of one.

- First screen: 1920 px wide WebP, named `first-screen.webp`. Used by `hero` on the card and page.
- Every other section: 1600 px wide WebP, quality 82, named `NN-name.webp`.
- Phone screens: 1170 x 2535 WebP, named `mobile-<name>.webp`. The first one is shown on the card.
- Merge a strip under about 200 css px into the section above it, and merge the footer into the
  last content section, so no crop is much shorter than 400 css px.
- Check the result on a contact sheet before writing the entry: `python3 ~/rythm/sheet3.py <dir> out.jpg 3 470`
  builds one from the manifest, and `sheet3.py <dir> out.jpg 7 200 phone` does the phone shots.
- A section whose top is overlapped by the site's own sticky header cannot be fixed by cropping the
  header off, because the heading underneath is already destroyed. Start the crop below the heading
  and let the entry's `title` carry the name instead.

A page with two themes still follows the older pattern: `hero-light.webp` / `hero-dark.webp` for the
compare slider, and `NN-name-light.webp` / `NN-name-dark.webp` for sections, switched by
`sectionVariants`. Rythm is the only entry that does this.

## Data entry

Copy the `rythm` entry in `src/data/landing-pages.ts` and change every field. A landing page
with one theme leaves out `compare`, `sectionVariants` and `srcB`. Keep the copy plain and
literal: what the section does, how it was built. Every screenshot needs `width`, `height` (the
real pixel size of the file) and an `alt`.
