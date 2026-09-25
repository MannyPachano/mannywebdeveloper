# Design audit: does websitesbymanny read as one system?

Reviewed 25 September 2026 against the current build (commit dc6d003, served from `dist/`), at 1440x900 and 390x844, light and dark. Every number below was measured on the rendered page with a script, not estimated. This audit is about the visual system only. The 20 September audit covered content, hierarchy and conversion and still stands.

## The short answer

The bones are one system: one typeface at five weights, one accent color, one card recipe used by the project cards, the landing cards and the day-in-the-life panel, a real token layer for color, and a dark theme that flips through those tokens. Nothing on the page is off-brand.

What makes it read as parts meshed together is a layer above the tokens: five background treatments on one page, four gutter positions, five button sizes, three card radii, twenty font sizes, two label styles for the same job, and six unrelated kinds of motion. None of these is wrong on its own. Together they are why the page feels assembled rather than designed once. The fixes are small and mechanical, and most of them are deletions.

## 1. Backgrounds: five treatments on one page

Measured top to bottom at 1440:

| Section | Background | Height |
|---|---|---|
| Hero | triangle pattern under a wash | 820px |
| About | `--surface-alt` (#fafafa) | 2,832px |
| Recent projects | page white | 4,803px |
| Landing pages | `--surface-alt` (#fafafa) | 4,651px |
| Get in touch | the triangle pattern again | 1,262px |
| Footer | pure black `--overlay` (#000) | 439px |

Two problems. The gray bands are too faint to read as a rhythm (#fafafa against #ffffff is a 2 percent difference) but strong enough to show a hard edge where one section ends, so the eye registers a seam without understanding it. In dark theme the same edge appears at #201e1c against #1a1917. And the triangle pattern is the only decorative texture on a site whose own visual language is flat cards and single-weight line drawings; it is a stock geometric texture that the rest of the page does not speak.

Fix. One page background for every section. Keep the pattern in the hero only, as the cover of the page, and drop it from the contact section, where the form card already stands out on its own. Change the light-theme footer from #000 to #111 (`--text-header`), which is the darkest color the rest of the page uses; #000 next to a page built on #111 headings reads as a different material.

## 2. Alignment: four left edges

At 1440 the content cards start at x = 112. The footer text starts at x = 96, because `Footer.astro` has no inner container padding. The contact section has no container at all, so its title block is centered against the full viewport rather than the content column. The hero is centered on the viewport, which is correct for a hero. Case study pages use a third gutter of 120 for wide blocks and 344 for the copy column.

Fix. One `.container` rule in `global.css` (max-width 78rem, the same padding at each breakpoint) used by About, Projects, Landing pages, Contact and Footer. Today each component repeats its own copy of that rule with small differences, which is how the drift happened.

## 3. Type: twenty sizes and two labels

Computed font sizes in use on the homepage: 11.2, 12, 12.48, 12.8, 13.6, 14.4, 15, 15.2, 16, 16.8, 17, 17.6, 18, 20, 22.4, 24, 26, 27, 40, 56. Twenty steps where eight would carry the page. Four of them (12, 12.48, 12.8, 13.6) do the same job: small uppercase labels. The eyebrow is 12px with 2px tracking, the card meta line is 12.8px with 1.5px, the experience dates are 13.6px with 1px, and the strip captions are 12.48px. They sit within a few hundred pixels of each other and are visibly different weights of the same idea.

Card titles and subsection headings are both 24px at weight 800. "How I got here" and "TimeClick" carry identical weight, so the subsection heading has no authority over the cards under it.

Fix. A fixed scale in `global.css`: 12.8, 14.4, 16, 18, 20, 22, 24, 40, 56. One `.label` style (12.8px, 700, 1.5px tracking, uppercase, `--text-accent`) for eyebrows, card meta, experience dates, skill group names, strip captions and form legends. Card titles move to 22px so the 24px subsection headings sit one step above them.

## 4. Cards share one recipe but not one radius

The project card, the landing card, the day-in-the-life panel and the form card all use the same white surface, 1px line border and `--shadow-sm`, which is the strongest cohesion signal on the page. Then it slips: experience items and case study highlight tiles use an 8px radius against the cards' 12px, the form card uses a radius of 12 but a different shadow (`0 0 16px 2px`, a halo rather than a drop), and the about photo has a 4px white frame no other element has. The check boxes are 4px.

Fix. Two radii tokens: `--radius` (12px) for every card including the experience items and highlight tiles, `--radius-sm` (8px) for buttons, chips and inputs. The form card takes `--shadow-sm` like every other card.

## 5. Buttons: five geometries

| Button | Font | Padding | Height |
|---|---|---|---|
| Hero pair | 20px | 16 x 56 | 58 |
| About "Get in touch" | 16px | 16 x 64 | 53 |
| Card buttons | 16px | 13.6 x 36 | 48 |
| Contact "Send message" | 16px | 16 x 80 | 53 |
| Global default (unused directly) | 20px | 16 x 80 | |

The global `button` rule still carries the original site's defaults (`padding: 1rem 5rem; margin: 3rem 0 1rem; font-size: 20px`) and every component then overrides some of them, which is why each button came out a different shape. The button shadow (`0 2px 12px 4px rgba(0,0,0,0.3)`) is also the heaviest shadow on the page, darker than the card shadow it sits inside, and the hover adds a 4 percent scale on top of the lift, which makes the label shimmer.

Fix. Two sizes only. `.button`: 18px, padding 1rem 3rem, used in the hero, the about CTA and the form. `.button-small`: 16px, padding 0.85rem 2.25rem, used in cards. Margins come off the button and go on the layout. One shadow (`0 2px 8px rgba(0,0,0,0.18)`), one hover (lift 3px, no scale).

## 6. Motion: six voices

On one homepage: a ten-dot cursor trail, a hero photo that peeks and a headline that blinks twice in the first 2.4 seconds, a bouncing scroll mouse, cards that lift 4px, buttons that lift 4px and scale, skill chips that flash yellow as they scroll in, and the 44 second day-in-the-life strip. Each is fine alone. Together there is no single idea about what motion means on this site.

Fix. Retire the cursor trail and the hero peek and blink (the 20 September audit asked for the same). Keep one hover lift (3px, no scale) for cards and buttons. Keep the strip, which is a piece of content, not decoration. Add the thread (section 9), which becomes the one signature motion the page is remembered for, and keep the scroll mouse because the thread starts from it.

## 7. Inner pages

Case study and walkthrough pages set section headings with `h2.section-title` at 24px, weight 800, sentence case, while the homepage sets `h2` at 40px, weight 700, uppercase with a yellow bar. Same tag, two families. The homepage bar motif appears nowhere on the inner pages.

Fix. Keep the inner headings smaller (they are document headings, not section openers) but move them to 28px and give them the same yellow bar, left-aligned, so the two page types visibly belong to one site. The thread's stations are that bar, which makes the connection explicit.

## 8. What already holds together and must not change

The typeface and its weights. The literal versus semantic color tokens. The dark theme, which is built the right way and only inherits the seams above. Contrast, which passes everywhere. The card recipe. The yellow bar under section titles. The day-in-the-life strip in ink on the page color. The honesty notes on the concept work.

## 9. The thread

One continuous line drawn down the homepage as the visitor scrolls. It starts at the scroll mouse in the hero, runs along the hero's bottom edge into the right gutter, comes down the gutter, and at each section title turns across the page as a rule that passes through the title's yellow bar, then continues down the other gutter. It alternates sides at every section, weaving through the page, and ends by turning into the Send message button. The bars are its stations: each one widens and glows when the line reaches it. A yellow tip with an ink ring leads the line and eases into place, so the line flows rather than jumps.

Why this one: it is built from things already on the page (the scroll mouse, the yellow bars, the gutters, the button), so it reads as the page's own structure revealing itself rather than an effect laid on top. It uses the two colors the site already owns, ink and yellow, and echoes the ink line drawings in the strip. It never covers content because it only travels where nothing sits.

Mechanics: one SVG, one path built from live element positions (recomputed on resize and whenever the page height changes), drawn with a dash offset tied to scroll position, about 150 lines of script and 90 of CSS. Ink in light theme, cream in dark. Hidden under 700px, where there are no gutters. Under reduced motion the whole line is drawn at once with no tip and nothing moves.
