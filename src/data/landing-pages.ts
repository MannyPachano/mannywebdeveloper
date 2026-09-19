// ---------------------------------------------------------------------------
// LANDING PAGES
// Drives the "Landing pages" section on the homepage and the walkthrough page
// at /landing-page-<slug>. To add a landing page: drop its images in
// /public/images/landing-pages/<slug>/ and add an entry here. Nothing else.
// The shared type lives in walkthrough-types.ts and the page template in
// src/components/WalkthroughPage.astro.
// ---------------------------------------------------------------------------

import type { Walkthrough } from './walkthrough-types';

export type LandingPage = Walkthrough;

const rythmImages = '/images/landing-pages/rythm';

export const landingPages: LandingPage[] = [
  {
    slug: 'rythm',
    title: 'Rythm',
    eyebrow: 'Landing page',
    client: 'Rythm Health (concept, not commissioned)',
    kind: 'Concept redesign',
    role: 'Design and front-end development',
    year: '2026',
    liveUrl: 'https://rythm-mockup-manuel.netlify.app',
    summary:
      'A concept redesign of the homepage for Rythm Health, an at-home blood testing company in the US. One HTML file with hand-written CSS and JavaScript: an animated hero, numbers that count up, a scrolling wall of reviews, a working FAQ, and <strong>a light and a dark version you can switch between.</strong>',
    tags: ['HTML & CSS', 'JavaScript', 'Responsive layout', 'Light and dark themes', 'CSS animation', 'Netlify'],
    description:
      'A concept redesign of the homepage for Rythm Health, an at-home blood testing company. I designed and built it in September 2026 to show how I would present their product: one page, one clear offer, and a light and a dark version. It is not a client project and I am not affiliated with Rythm.',
    pageDescription:
      'A concept redesign of the Rythm Health homepage, shown section by section: an animated hero, count-up numbers, a review marquee, a working FAQ and light and dark versions.',
    facts: [{ label: 'Format', value: 'One-page site, light and dark' }],
    hero: {
      src: `${rythmImages}/hero-dark.webp`,
      width: 1920,
      height: 967,
      alt: 'First screen of the Rythm concept: announcement bar, header, the headline "The world\'s easiest blood test" with "easiest" in red, the discounted price, two buttons, three trust points and a floating red sphere with result badges around it.',
    },
    compare: {
      labelA: 'Light',
      labelB: 'Dark',
      a: `${rythmImages}/hero-light.webp`,
      b: `${rythmImages}/hero-dark.webp`,
      width: 1920,
      height: 967,
      alt: 'First screen of the Rythm concept: announcement bar, header, the headline "The world\'s easiest blood test" with "easiest" in red, the discounted price, two buttons, three trust points and a floating red sphere with result badges around it.',
    },
    heroCaption:
      'The first screen in both versions. Drag the handle to compare them. On the live page a button in the header switches the theme.',
    overviewTitle: 'What the page has to do',
    overview: [
      'Rythm sells a monthly at-home blood test. The page has to explain the product to someone who has never heard of it, give them reasons to trust it, and get them to press one button: <strong>Get started</strong>. Everything on the page is there for one of those three jobs.',
      'The order of the sections follows how people decide. First the offer and the price, then proof from people they recognize, then how the test works, then the numbers, then the product card. After that comes the detail for people who keep reading: the science, the dashboard, the use cases, privacy, reviews and questions. The page ends with one last call to action. The same red button appears in the header, the hero, the product card and the end.',
      'The design uses two typefaces, Space Grotesk for headlines and Manrope for text, one accent color and a lot of space. One word in the main headline is red. The dark version is the default. The light version is the same layout with nine color variables swapped.',
    ],
    walkthroughIntro: 'Thirteen sections, top to bottom. Use the switch to see them in the other version.',
    sectionVariants: { a: 'Dark', b: 'Light' },
    sections: [
      {
        title: 'Announcement bar, header and hero',
        caption:
          'The offer is on screen before anyone scrolls: the headline with one word in red, the discounted price, two buttons and three trust points. The red sphere floats, three result badges float around it, and the text rises in one line at a time when the page loads.',
        alt: 'Rythm hero: headline, price, Get started and See how it works buttons, trust points and a red sphere with result badges.',
        src: `${rythmImages}/hero-dark.webp`,
        srcB: `${rythmImages}/hero-light.webp`,
        width: 1920,
        height: 967,
      },
      {
        title: 'Trust strip and quotes',
        caption:
          'A strip of certifications scrolls by on a loop (HIPAA, FDA, CLIA, CAP). Below it, six short quotes from athletes, founders and a surgeon, each with initials in a colored circle instead of a photo.',
        alt: 'A scrolling strip of certification badges and a grid of six quote cards with names, titles and colored initials.',
        src: `${rythmImages}/02-social-dark.webp`,
        srcB: `${rythmImages}/02-social-light.webp`,
        width: 1600,
        height: 773,
      },
      {
        title: 'How it works, and the numbers',
        caption:
          'Three numbered steps in one row, then four percentages. The numbers count up from zero the first time they scroll into view, with an IntersectionObserver and requestAnimationFrame.',
        alt: 'Three step cards (test at home, send it back, results in under 48 hours) and a row of four large percentages.',
        src: `${rythmImages}/03-how-dark.webp`,
        srcB: `${rythmImages}/03-how-light.webp`,
        width: 1600,
        height: 766,
      },
      {
        title: 'Biomarkers',
        caption:
          'The text says what the test measures. The grid lists markers with Optimal or Out of range pills, green and amber, so the reader gets the idea of the product without reading a paragraph.',
        alt: 'A headline about one test for daily impact next to a grid of biomarker names with green Optimal and amber Out of range pills.',
        src: `${rythmImages}/04-bio-dark.webp`,
        srcB: `${rythmImages}/04-bio-light.webp`,
        width: 1600,
        height: 502,
      },
      {
        title: 'Membership card',
        caption:
          'One product, one card. The original price crossed out, the discount badge, six included items with check marks, the button, and the guarantee lines underneath, where people look for the catch.',
        alt: 'A centered pricing card: At-Home Blood Test, $79 crossed out, $59.25 a month, six included items, a red Get started button and guarantee text.',
        src: `${rythmImages}/05-product-dark.webp`,
        srcB: `${rythmImages}/05-product-light.webp`,
        width: 1600,
        height: 912,
      },
      {
        title: 'Less blood, and the dashboard',
        caption:
          'Two bars drawn with CSS compare about 10 ml to about 1 ml. Below that, a mock dashboard with a health score ring, a trend line and an insight card, all built with HTML, CSS and inline SVG. No screenshots.',
        alt: 'Two vertical bars comparing blood volume, then a dashboard card with an 87% health score ring, a ferritin trend line and an insight box.',
        src: `${rythmImages}/06-blood-dash-dark.webp`,
        srcB: `${rythmImages}/06-blood-dash-light.webp`,
        width: 1600,
        height: 1070,
      },
      {
        title: 'The lab, and real results',
        caption:
          'A photo next to a short statement, then three plain cards. It breaks up the product sections with something human before the page gets into detail again.',
        alt: 'A portrait photo beside the headline "We don\'t use a lab. We are the lab." and three cards for metabolic fitness, hormone balance and heart health.',
        src: `${rythmImages}/07-lab-prog-dark.webp`,
        srcB: `${rythmImages}/07-lab-prog-light.webp`,
        width: 1600,
        height: 1104,
      },
      {
        title: 'Six use cases',
        caption:
          'One grid, six cards, one icon each. It is the same card component as the steps and the security section, so the page stays consistent and the CSS stays short.',
        alt: 'Six cards in two rows: preventative health, athletic performance, women\'s health, hormone optimization, longevity and clarity monthly.',
        src: `${rythmImages}/08-panel-dark.webp`,
        srcB: `${rythmImages}/08-panel-light.webp`,
        width: 1600,
        height: 810,
      },
      {
        title: 'Privacy and security',
        caption:
          'Three cards with green icons. Health data is the obvious objection for this product, so it gets its own section before the reviews.',
        alt: 'Three cards: military-grade encryption, in-house testing with no third parties, and verified chain of custody.',
        src: `${rythmImages}/09-secure-dark.webp`,
        srcB: `${rythmImages}/09-secure-light.webp`,
        width: 1600,
        height: 595,
      },
      {
        title: 'Reviews',
        caption:
          'Two rows of review cards scroll in opposite directions and pause when you hover. Each row is duplicated once in JavaScript so the loop never shows a gap.',
        alt: 'Two rows of five-star review cards with a 4.8 out of 5 Trustpilot rating above them.',
        src: `${rythmImages}/10-reviews-dark.webp`,
        srcB: `${rythmImages}/10-reviews-light.webp`,
        width: 1600,
        height: 892,
      },
      {
        title: 'Community',
        caption: 'A photo grid for the social feed with tiles in the brand red. The tiles scale up slightly on hover.',
        alt: 'An eight-tile grid mixing photos, red tiles with short lines of text and dark tiles.',
        src: `${rythmImages}/11-community-dark.webp`,
        srcB: `${rythmImages}/11-community-light.webp`,
        width: 1600,
        height: 820,
      },
      {
        title: 'FAQ',
        caption:
          'Seven questions in an accordion. One answer is open at a time and the height animates, so the page never jumps.',
        alt: 'A list of seven frequently asked questions with a red plus sign on each row.',
        src: `${rythmImages}/12-faq-dark.webp`,
        srcB: `${rythmImages}/12-faq-light.webp`,
        width: 1600,
        height: 721,
      },
      {
        title: 'Final call to action and footer',
        caption:
          'The brand line, one sentence, one button, then a four-column footer with the legal text. The last line credits the concept to me.',
        alt: 'The headline "Learn Yourself." with a red button, above a footer with three link columns and a disclaimer.',
        src: `${rythmImages}/13-final-dark.webp`,
        srcB: `${rythmImages}/13-final-light.webp`,
        width: 1600,
        height: 927,
      },
    ],
    phonesIntro:
      'Below 920 pixels the page goes to one column, the header menu becomes a full-screen overlay and the buttons go full width. These are four screens from the light version at 480 pixels wide.',
    phones: [
      {
        src: `${rythmImages}/mobile-hero.webp`,
        width: 480,
        height: 1040,
        alt: 'Rythm on a phone: the red sphere first, then the headline, the price and two full-width buttons.',
        caption: 'The hero: the sphere first, then the headline, the price and the buttons.',
      },
      {
        src: `${rythmImages}/mobile-how.webp`,
        width: 480,
        height: 1040,
        alt: 'Rythm on a phone: the three steps stacked as cards, with the percentages starting below.',
        caption: 'How it works: the three steps stack, then the numbers.',
      },
      {
        src: `${rythmImages}/mobile-product.webp`,
        width: 480,
        height: 1040,
        alt: 'Rythm on a phone: the membership card filling the width with the price, the included items and the button.',
        caption: 'The membership card fills the width.',
      },
      {
        src: `${rythmImages}/mobile-faq.webp`,
        width: 480,
        height: 1040,
        alt: 'Rythm on a phone: the FAQ list and the final call to action.',
        caption: 'The FAQ and the final call to action.',
      },
    ],
    details: {
      design: [
        'Two typefaces: Space Grotesk for headlines, Manrope for text. Headlines run up to 83 pixels on desktop.',
        'One accent color. Red is used for one word in the main headline, the buttons and the small labels above section titles.',
        'Two themes from one set of CSS variables. The dark version is the default; the light version swaps nine variables.',
        'Every section has one job, and the sections that matter most end in the same button.',
        'Cards, pills and buttons share the same radius and border, so the page reads as one system.',
      ],
      build: [
        'One HTML file, about 70 KB, with hand-written CSS and JavaScript. No framework and no build step.',
        'All icons and graphics are inline SVG or plain CSS. The only image files are three stock photos.',
        'Reveal on scroll, the count-up numbers and the review marquee run on IntersectionObserver and CSS animations, and all of it switches off for people who prefer reduced motion.',
        'The theme toggle, the mobile menu, the accordion and the count-up add up to about 40 lines of JavaScript.',
        'Two breakpoints, 920 and 600 pixels. Deployed on Netlify.',
      ],
    },
    tools: ['HTML & CSS', 'JavaScript', 'SVG', 'Google Fonts', 'Netlify'],
    backHref: '/#landing-pages',
    backLabel: 'Back to landing pages',
  },
];
