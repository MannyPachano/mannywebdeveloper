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
const appleImages = '/images/landing-pages/apple-seo';
const riseImages = '/images/landing-pages/rise-talent';
const sunnyImages = '/images/landing-pages/sunny-skys';
const almanacImages = '/images/landing-pages/almanac';
const wasatchImages = '/images/landing-pages/wasatch-ridge';

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
        'Cards, pills and buttons share the same corner radius and border treatment, so the components stay consistent across the page.',
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
  {
    slug: 'apple-seo',
    title: 'Apple SEO',
    eyebrow: 'Landing page',
    client: 'Apple SEO, a local SEO agency in State College, Pennsylvania (unsolicited concept, not commissioned)',
    kind: 'Concept redesign',
    role: 'Design and front-end development',
    year: '2026',
    liveUrl: 'https://manny-mockup-example.netlify.app',
    summary:
      'A redesign of the homepage for a local SEO agency, built without being asked. Their services, their case studies and their brand stayed. <strong>What changed is the order, one consistent format for showing proof, and three new sections that answer the questions a discovery call normally has to cover.</strong>',
    tags: ['HTML & CSS', 'JavaScript', 'Conversion design', 'Information hierarchy', 'SVG', 'Netlify'],
    description:
      'A redesign of the Apple SEO homepage, designed and built in 2026. It was not commissioned and I am not affiliated with them. Their copy, services and case studies are theirs; the structure, the design and the code are mine. Press Show notes on the live page to see what changed in each section and why.',
    pageDescription:
      'An unsolicited concept redesign of the Apple SEO homepage, shown section by section: a six-month timeline, three case studies in one consistent proof format, a combined results band, an FAQ and an audit request form.',
    facts: [{ label: 'Format', value: 'One-page site' }],
    hero: {
      src: `${appleImages}/first-screen.webp`,
      width: 1920,
      height: 1200,
      alt: 'First screen of the Apple SEO concept: the headline "We make sure customers find you everywhere they search." with "everywhere" in red, two buttons, and a drawn local search result showing a business moving from rank seven to the top.',
    },
    heroCaption:
      'The first screen. The panel on the right is a local search result drawn in HTML rather than screenshotted, showing a business at rank seven moving into the top three.',
    highlights: [
      { value: 'Answered before the call', label: 'A six-month timeline and an FAQ, so the questions that eat a discovery call are handled on the page' },
      { value: 'One proof format', label: 'All three case studies get the same four stat tiles, so the strongest one stops outshining the other two' },
      { value: 'One HTML file', label: 'About 56 KB, hand-written, no framework and no build step' },
    ],
    overviewTitle: 'What the page has to do',
    overview: [
      'Apple SEO already had the hard part: three real clients, three industries, and results they could name. What the homepage did not do was put them in the order a buyer thinks in. So the structure changed and almost none of the words did. The offer, then what you get, then what the first six months look like, then the proof, then the people, then the questions, then the form.',
      'Two fixes rather than additions. The three case studies were each styled differently, which made the strongest one look like the only one. They now share a single format, so the three read as a repeatable process. The page also ended at a booking tool, which loses anyone not ready to pick a time, so it now ends at a form that accepts an email instead.',
      'This was not commissioned and I am not affiliated with Apple SEO. The copy, the services and the case study figures are theirs. The structure, the design, the code and the three new sections are mine. The live page keeps a Show notes button that explains each change in place, which is how it was sent to them.',
    ],
    walkthroughIntro: 'The page, top to bottom.',
    sections: [
      {
        title: 'Header and hero',
        caption:
          'One sentence for what the agency does, with the word that matters in red. The panel beside it is a local search result drawn in HTML, showing a business at rank seven with the result above it highlighted. Under the fold line, four figures that hold up the claim.',
        alt: 'Apple SEO hero: the headline "We make sure customers find you everywhere they search.", a description, Schedule a call and See our results buttons, industry tags, and a mocked Google local search panel showing businesses ranked with one highlighted at rank seven. Below, a strip reading 3 to 6 months, 55+, 100+ and $0.',
        src: `${appleImages}/00-hero.webp`,
        width: 1600,
        height: 840,
      },
      {
        title: 'What we do',
        caption:
          'Six services on one card style with one icon each, rather than six different treatments. The line above them says most clients start with the profile and the ads, which turns a menu into a recommendation.',
        alt: 'Apple SEO services section: six cards headed Google LSA setup and management, Google Business Profile optimization, Website building, Local citation management, Website SEO on-page, and SEO analytics, each with a description and a checked detail line.',
        src: `${appleImages}/01-services.webp`,
        width: 1600,
        height: 1088,
      },
      {
        title: 'How it works',
        caption:
          'A new section. The old page listed services but never said what the first month looks like, which is the question every prospect asks on the call. Four steps with the week or month each one lands in, and a line saying there is no contract before the audit.',
        alt: 'Apple SEO process section: the heading "What the first six months look like" and four numbered steps, Audit, Fix the foundation, Build and rank, and Hold and report, each with a timeframe underneath reading Week 1, Weeks 2 to 6, Months 2 to 6 and Month 6 onward.',
        src: `${appleImages}/02-process.webp`,
        width: 1600,
        height: 641,
      },
      {
        title: 'Case study: junk removal',
        caption:
          'The first of three, and the template for the other two. Their own client, their own figures. The layout gives it a paragraph of narrative, three checked specifics, the tactics as tags, four stat tiles and a photograph. The photo caption says it is a stock stand-in rather than pretending otherwise.',
        alt: 'Apple SEO case study: "From invisible to ranking #1" for a junk removal client, with a paragraph of narrative, three checked points, tactic tags, four stat tiles reading #1 Google Local Services Ads, 100+ verified leads every month, #1 Google map pack ranking and #1 organic search ranking, and a photograph of a loaded pickup truck.',
        src: `${appleImages}/03-case-junk-removal.webp`,
        width: 1600,
        height: 914,
      },
      {
        title: 'Case study: dermatology',
        caption:
          'The same format applied to a different problem: cleaning up forty locations rather than starting from nothing. Two of the tiles show a zero, for no ad spend and no duplicate listings remaining.',
        alt: 'Apple SEO case study: "From scattered listings to owning every market" for a dermatology client, with narrative, three checked points, tactic tags, four stat tiles reading 40+ locations fully optimized, $0 ad spend, traffic boosted across all locations and 0 inaccurate or duplicate listings left, and a photograph of a clinic.',
        src: `${appleImages}/04-case-dermatology.webp`,
        width: 1600,
        height: 1123,
      },
      {
        title: 'Case study: roofing',
        caption:
          'The third case study, at the largest scale: fifteen markets rather than one town. The three are ordered smallest to largest so the scale builds across the section.',
        alt: 'Apple SEO case study: "From invisible in half their markets to #1 across all of them" for a roofing client, with narrative, three checked points, tactic tags, four stat tiles reading 15+ Google profiles managed, 10+ LSA accounts, #1 ranking across multiple service areas and 15+ markets built from scratch, and a photograph of a roofing crew.',
        src: `${appleImages}/05-case-roofing.webp`,
        width: 1600,
        height: 980,
      },
      {
        title: 'Across every client',
        caption:
          'A new section that totals the three case studies into four figures, so a visitor who skimmed them still gets the scale. The line underneath states that the figures come from accounts the agency runs, not from an industry average.',
        alt: 'Apple SEO results band: the heading "The numbers behind the three stories above" with four counting figures reading 55+ Google profiles managed and verified, 15+ markets built from scratch, 100+ verified leads a month for one client, and 3 to 6 months to the top of a market.',
        src: `${appleImages}/06-numbers.webp`,
        width: 1600,
        height: 416,
      },
      {
        title: 'Who we are',
        caption:
          'Their positioning and their voice, set in two columns with enough contrast to actually read on a dark background. Three checked promises sit under it, and each one is about access rather than results: you talk to the person doing the work.',
        alt: 'Apple SEO about section: a photograph of a team around a table next to the heading "The decisive factor behind your success", two paragraphs, and three checked promises about talking to the person doing the work, staying in your name, and one plain-language report a month.',
        src: `${appleImages}/07-about.webp`,
        width: 1600,
        height: 630,
      },
      {
        title: 'Before you call',
        caption:
          'A new section. Six questions in an accordion, and the two that matter most are the uncomfortable ones: whether there is a long contract, and who owns the profiles and ad accounts afterwards. An agency that answers those on the page saves itself the defensive half of every first call.',
        alt: 'Apple SEO FAQ: six collapsed questions reading How long until I see results, Do I have to sign a long contract, Who owns the profiles and ad accounts, What does it cost, Do you work with businesses outside Pennsylvania, and What if I already have a website I like.',
        src: `${appleImages}/08-faq.webp`,
        width: 1600,
        height: 778,
      },
      {
        title: 'Contact and footer',
        caption:
          'The old page ended at a button that opened a booking tool, which loses anyone not ready to pick a time on the spot. This one offers both: call during business hours, or fill in the form and get a reply the same business day. The form asks what they need first, so the reply can already be specific.',
        alt: 'Apple SEO contact section: the heading "Let\'s talk." with a phone, email and office address on the left and a Get a free audit form on the right asking for name, business, email, phone, what they need and a message. Below it the footer with services, company links and the office address.',
        src: `${appleImages}/09-contact-footer.webp`,
        width: 1600,
        height: 1262,
      },
    ],
    phonesIntro: 'The page on a phone, where most local search traffic arrives.',
    phones: [
      {
        src: `${appleImages}/mobile-hero.webp`,
        width: 1170,
        height: 2535,
        alt: 'Apple SEO on a phone: the headline, the description, two full-width buttons, industry tags and the drawn search result panel below.',
        caption: 'The search result panel moves below the buttons, so the claim is read before the illustration of it.',
      },
      {
        src: `${appleImages}/mobile-process.webp`,
        width: 1170,
        height: 2535,
        alt: 'Apple SEO on a phone: the six-month timeline with numbered circles stacked vertically and the week markers between them.',
        caption: 'The timeline becomes vertical, with the numbered markers holding the eye down the column.',
      },
      {
        src: `${appleImages}/mobile-case.webp`,
        width: 1170,
        height: 2535,
        alt: 'Apple SEO on a phone: a case study with its narrative, checked points, tactic tags and the stat tiles stacked one per row.',
        caption: 'Case study tiles go one per row rather than shrinking, so the numbers stay legible.',
      },
      {
        src: `${appleImages}/mobile-contact.webp`,
        width: 1170,
        height: 2535,
        alt: 'Apple SEO on a phone: the heading "Let\'s talk.", the three contact lines, two buttons and the start of the audit form.',
        caption: 'Call and form sit one above the other, so whichever the visitor prefers is one tap away.',
      },
    ],
    details: {
      design: [
        'Their dark charcoal and red were kept. What changed is that red now marks one thing at a time rather than competing with yellow and green boxes.',
        'The three case studies use one shared format. Styling them differently made the best one look like the only one.',
        'Two typefaces: Poppins for headlines, Figtree for text. Figures get their own weight so a reader can scan the proof without reading the page.',
        'The search result panel in the hero is drawn rather than screenshotted, so it stays sharp and cannot go out of date.',
        'Every section that could lead to contact ends in the same red button, and the header carries one the whole way down.',
      ],
      build: [
        'One HTML file, about 56 KB, with hand-written CSS and JavaScript. No framework and no build step.',
        'Seven figures count up when their block comes into view, on IntersectionObserver, and hold their value for anyone who prefers reduced motion.',
        'The FAQ uses native details elements, so it opens before the JavaScript runs.',
        'Four breakpoints, 1000, 820, 600 and 520 pixels.',
        'The annotation layer is part of the file: a Show notes button reveals a note on every section explaining what changed. It is off by default so the page loads as a normal page.',
        'Deployed on Netlify.',
      ],
    },
    tools: ['HTML & CSS', 'JavaScript', 'SVG', 'Google Fonts', 'Netlify'],
    backHref: '/#landing-pages',
    backLabel: 'Back to landing pages',
  },
  {
    slug: 'rise-talent',
    title: 'Rise Talent Advisors',
    eyebrow: 'Landing page',
    client: 'Rise Talent Advisors, a staffing and recruiting firm in Lehi, Utah (unsolicited concept, not commissioned)',
    kind: 'Concept redesign',
    role: 'Design and front-end development',
    year: '2026',
    liveUrl: 'https://risetalent.netlify.app',
    summary:
      'A redesign of the homepage for a staffing firm, built without being asked. Their brand, their client logos and their copy stayed. <strong>What changed is that the page now says what happens after you fill in the form, names the roles they actually place, and speaks to candidates as well as companies.</strong>',
    tags: ['HTML & CSS', 'JavaScript', 'Conversion design', 'Two-audience layout', 'Responsive layout', 'Netlify'],
    description:
      'A redesign of the Rise Talent Advisors homepage, designed and built in 2026. It was not commissioned and I am not affiliated with them. Their copy, brand and client logos are theirs; the structure, the design and the code are mine. Press Show notes on the live page to see what changed in each section and why.',
    pageDescription:
      'An unsolicited concept redesign of the Rise Talent Advisors homepage, shown section by section: a four-step hiring process, the specific roles they place, a section for candidates, and a hire-request form in the hero.',
    facts: [{ label: 'Format', value: 'One-page site' }],
    hero: {
      src: `${riseImages}/first-screen.webp`,
      width: 1920,
      height: 1200,
      alt: 'First screen of the Rise Talent Advisors concept: a dark navy hero with the headline "We\'re a hiring company.", three figures, and a Need to fill a role form on the right.',
    },
    heroCaption:
      'The first screen. The form is in the hero rather than at the bottom, because a hiring manager who lands here already knows what they want. The three figures answer the only question they have before typing.',
    highlights: [
      { value: 'What happens next', label: 'Four steps from intake call to signed offer, with the day or week each one lands in' },
      { value: 'Both audiences', label: 'Companies and candidates each get a section, instead of the page speaking only to companies' },
      { value: 'Specific roles', label: 'Twelve named job titles in place of five industry words, so a hiring manager can tell if they are the right call' },
    ],
    overviewTitle: 'What the page has to do',
    overview: [
      'A staffing firm competes on trust more than on price, and trust here comes from specificity. The existing page said what Rise does and which industries they serve, but a hiring manager reading "IT, Fintech, Accounting, Construction and Operations" still cannot tell whether these people have placed their role before. So the redesign names twelve actual job titles, and puts a four-step process on the page saying exactly what happens after the form goes in.',
      'The second change is that the page now has two audiences. The original spoke only to companies, which means a candidate who lands on it has nowhere to go, and a staffing firm without candidates has nothing to sell. The candidate section sits low on the page, below everything a company needs, with a list of recently posted roles and a way to send a resume without applying to anything.',
      'This was not commissioned and I am not affiliated with Rise. Their copy, their navy and orange, their gradient and their real client logos all stayed. The structure, the three new sections and the code are mine. The live page keeps a Show notes button that explains each change in place, which is how it was sent to them.',
    ],
    walkthroughIntro: 'The page, top to bottom.',
    sections: [
      {
        title: 'Header and hero',
        caption:
          'The headline is theirs and it is the right one, so it stayed. The form sits beside it rather than at the bottom of the page, and asks four things, not ten. Underneath, the client logos in grayscale so they read as proof rather than competing with the orange.',
        alt: 'Rise Talent hero: the headline "We\'re a hiring company." on dark navy, a paragraph about direct hire and contract models, the figures 126+ companies served since 2002, 24 years and 6 specialty practice areas, and a Need to fill a role form asking name and company, email, role to fill and hiring model. Below, a row of client logos in grayscale.',
        src: `${riseImages}/00-hero.webp`,
        width: 1600,
        height: 892,
      },
      {
        title: 'Precision-driven talent advisory',
        caption:
          'Their positioning, their button, their copy. What changed is the image treatment: one photograph with a small floating card on it, instead of a collage. The four hiring models sit as checked items so a reader can find theirs in a second.',
        alt: 'Rise Talent advisory section: a photograph of two people in an interview with a floating card reading Owner-level attention, next to the heading "The candidates you actually want to hire.", a paragraph, four checked items reading Direct hire, Contract, Contract-to-hire and Fractional, and a Discover our story button.',
        src: `${riseImages}/01-advisory.webp`,
        width: 1600,
        height: 594,
      },
      {
        title: 'What sets our hiring model apart',
        caption:
          'Their three differentiators, each on a clean card with an orange icon tile. The copy is unchanged. Three claims of equal weight should look equal, which they did not before.',
        alt: 'Rise Talent section: three cards headed Focused advisor attention, Flexible hiring structures and Nationwide staffing reach, each with an orange icon tile and a short paragraph.',
        src: `${riseImages}/02-model.webp`,
        width: 1600,
        height: 542,
      },
      {
        title: 'How it works',
        caption:
          'A new section. The original page said what Rise does but never what happens after someone fills in the form. Four steps, each with the day or week it lands in, ending with staying in touch through the first ninety days.',
        alt: 'Rise Talent process section: the heading "From first call to signed offer" and four numbered steps, Intake call, Targeted search, Shortlist and Offer and start, each with a paragraph and a timeframe reading Day 1, Days 2 to 7, Week 2 and Weeks 3 to 6.',
        src: `${riseImages}/03-process.webp`,
        width: 1600,
        height: 560,
      },
      {
        title: 'The numbers',
        caption:
          'Their navy band with orange numbers, kept in substance and tidied in spacing, with the figures counting up as the band comes into view. The original had a fourth stat reading "Days" with no number in front of it, which looks like an unfinished placeholder, so it is left out until they supply the figure.',
        alt: 'Rise Talent stats band: three figures on dark navy reading 126+ companies served, 2002 year founded with the note two-plus decades of placements, and 100% owner-operated and accountable.',
        src: `${riseImages}/04-numbers.webp`,
        width: 1600,
        height: 230,
      },
      {
        title: 'Roles we fill',
        caption:
          'A new section. Five practice areas as filters, and behind each one the actual job titles they place. Naming the titles tells a hiring manager whether the firm has filled their specific role, which a category label alone does not.',
        alt: 'Rise Talent roles section: the heading "Titles we place, every week", five filter chips reading IT and SaaS, Fintech, Accounting, Construction and Operations, and twelve job title tags including Backend Engineer, Site Reliability Engineer, QA Lead, Product Manager and Security Analyst.',
        src: `${riseImages}/05-roles.webp`,
        width: 1600,
        height: 535,
      },
      {
        title: 'Industries',
        caption:
          'The three links to their existing industry pages, kept. They are photo cards with the text set into the image rather than beside it, which holds the row together at every width.',
        alt: 'Rise Talent industries section: three photo cards reading Hire for tech and SaaS roles, Hire for construction and heavy civil, and Hire for office, finance and ops, each with an explore link.',
        src: `${riseImages}/06-industries.webp`,
        width: 1600,
        height: 556,
      },
      {
        title: 'For candidates',
        caption:
          'A new section, placed after everything a company needs. Recently posted roles with location, working model and pay range, plus a way to send a resume without applying to anything specific.',
        alt: 'Rise Talent candidates section: the heading "Looking for your next role?", a paragraph about honest feedback and no resume blasting, Browse open roles and Send us your resume buttons, and a recently posted panel listing Senior Backend Engineer, Assistant Controller, Heavy Civil Superintendent, Payments Product Manager and FP&A Analyst with locations and pay ranges.',
        src: `${riseImages}/07-candidates.webp`,
        width: 1600,
        height: 618,
      },
      {
        title: 'Closing and footer',
        caption:
          'Their navy to orange gradient and their copy, kept, because it is one of the strongest parts of the current site. It offers a fifteen-minute call and a phone number, and says out loud that they will tell you if they are not the right fit. The footer repeats the practice areas and the industries.',
        alt: 'Rise Talent closing section: an orange gradient band with the heading "Need to hire? Let\'s talk.", a paragraph about a fifteen-minute call with no pitch, and Book an intro call and Call buttons. Below it a navy footer with services, industries and contact columns and an orange bottom bar.',
        src: `${riseImages}/08-closing-footer.webp`,
        width: 1600,
        height: 743,
      },
    ],
    phonesIntro: 'The page on a phone. A hiring manager checking a recommendation is usually doing it between meetings.',
    phones: [
      {
        src: `${riseImages}/mobile-hero.webp`,
        width: 1170,
        height: 2535,
        alt: 'Rise Talent on a phone: the headline, the paragraph, the three figures stacked with their labels beside them, and the top of the hire request form.',
        caption: 'The figures stack with the label beside each number, so the column stays short and the form stays close.',
      },
      {
        src: `${riseImages}/mobile-process.webp`,
        width: 1170,
        height: 2535,
        alt: 'Rise Talent on a phone: the four-step hiring process with numbered circles running down the center and the day markers between them.',
        caption: 'The process runs down the center, with the timeframes acting as the rungs between steps.',
      },
      {
        src: `${riseImages}/mobile-roles.webp`,
        width: 1170,
        height: 2535,
        alt: 'Rise Talent on a phone: the roles section with five practice area chips wrapped onto three lines and the job title tags below.',
        caption: 'The practice area filters wrap rather than scroll, so every one is visible without swiping.',
      },
      {
        src: `${riseImages}/mobile-candidates.webp`,
        width: 1170,
        height: 2535,
        alt: 'Rise Talent on a phone: the candidates section with two buttons and the recently posted roles panel listing jobs with locations and pay ranges.',
        caption: 'The open roles list keeps its pay ranges at phone width, which is the part candidates scroll for.',
      },
    ],
    details: {
      design: [
        'Their navy, their orange, the navy to orange gradient and the orange footer bar all stayed. The brand was not the problem.',
        'Client logos are grayscale so they read as proof and stop competing with the accent color.',
        'One typeface, Figtree, at four weights. A staffing page is mostly lists and figures, and one family keeps them aligned.',
        'The two new audiences are separated by depth, not by a tab: everything a company needs comes first, candidates get the section below it.',
        'Specificity over category. Twelve named job titles do more than five industry words.',
      ],
      build: [
        'One HTML file, about 415 KB. Most of that is the client logos and photographs embedded directly in the file, so the page has no external image requests of its own to fail.',
        'Hand-written CSS and JavaScript, no framework and no build step. Their current site runs on a page builder, which is where a lot of the weight on it comes from.',
        'The role filters swap the visible tags on a data attribute and update aria-pressed, so the state is announced rather than only shown.',
        'Eight figures count up on IntersectionObserver and hold their final value for anyone who prefers reduced motion.',
        'Four breakpoints, 1040, 860, 640 and 520 pixels.',
        'The annotation layer is part of the file: a Show notes button reveals a note on every section explaining what changed. It is off by default. Deployed on Netlify.',
      ],
    },
    tools: ['HTML & CSS', 'JavaScript', 'SVG', 'Google Fonts', 'Netlify'],
    backHref: '/#landing-pages',
    backLabel: 'Back to landing pages',
  },
  {
    slug: 'sunny-skys',
    title: "Sunny Sky's Animal Rescue",
    eyebrow: 'Landing page',
    client: "Sunny Sky's Animal Rescue, a 501(c)(3) in Graham, Washington (unsolicited concept, not commissioned)",
    kind: 'Concept redesign',
    role: 'Design and front-end development',
    year: '2026',
    liveUrl: 'https://sunny-skys-mockup.netlify.app',
    summary:
      'A redesign of the homepage for an animal rescue, built without being asked. Everything on it is theirs: their story, their photographs, their links, their tax ID. <strong>What changed is that adopting, volunteering and donating are all reachable from the first screen instead of partway down a long page.</strong>',
    tags: ['HTML & CSS', 'JavaScript', 'Nonprofit design', 'Accessible accordions', 'Responsive layout', 'Netlify'],
    description:
      'A redesign of the Sunny Sky\'s Animal Rescue homepage, designed and built in 2026. It was not commissioned and I am not affiliated with them. Their story, photographs, links and details are theirs; the structure, the design and the code are mine. Press Show notes on the live page to see what changed in each section and why.',
    pageDescription:
      "An unsolicited concept redesign of the Sunny Sky's Animal Rescue homepage, shown section by section: a quick actions strip, their story, an adoption flow with clearly labeled sample listings, volunteering, donating and an FAQ.",
    facts: [{ label: 'Format', value: 'One-page site' }],
    hero: {
      src: `${sunnyImages}/first-screen.webp`,
      width: 1920,
      height: 1200,
      alt: "First screen of the Sunny Sky's concept: a photograph of a dog on a hay bale at sunset, the headline \"Saying yes to the animals who need us most.\", Meet adoptable pets and Donate buttons, and a line saying visits are by appointment only.",
    },
    heroCaption:
      'The first screen. Their own photograph and their own tagline. The appointment-only rule sits directly under the buttons, because the most common wasted trip is somebody driving out expecting to walk in.',
    highlights: [
      { value: 'Help in one tap', label: 'Adopt, volunteer, donate and call are all reachable from the first screen' },
      { value: 'Nothing invented', label: 'Their story, photographs, links and tax ID, with every sample pet card labeled as a sample' },
      { value: 'Scattered answers collected', label: 'The questions spread across their site and flyers put in one accordion' },
    ],
    overviewTitle: 'What the page has to do',
    overview: [
      'A rescue homepage has four different visitors arriving at once: someone who wants to adopt, someone who wants to volunteer, someone who wants to give money, and someone checking whether they can visit today. On the existing site all four have to scroll the whole page to find out what they can do. So this version puts a strip of four actions immediately under the hero, and gives each one a real section further down.',
      'The rest is about removing wasted trips and wasted emails. Visits are by appointment only and applications have to be approved first, so that rule appears in the hero, again at the top of the adoption steps, and again in the footer. The questions that are currently spread across their site and their flyers are collected into one accordion. Adoption fees are printed rather than requested.',
      "This was not commissioned and I am not affiliated with Sunny Sky's. Everything factual on the page is theirs: the 2021 fire and the sanctuary they are building in Graham, their PayPal and wishlist links, their drop-off locations, their tax ID and the children's book one of their adopters wrote. The adoptable pets are sample cards showing the layout, labeled as samples on every card, because their real animals live on Petfinder.",
    ],
    walkthroughIntro: 'The page, top to bottom.',
    sections: [
      {
        title: 'Header and hero',
        caption:
          'Their photograph, their tagline, and the two things most visitors came to do. The line under the buttons is the one that saves everyone time: by appointment only, no walk-ins, and where the meetings happen. The strip below gives the other two audiences somewhere to go immediately.',
        alt: "Sunny Sky's hero: a photograph of a dog standing on a hay bale at sunset, the label A 501(c)(3) rescue in northwest Washington, the headline \"Saying yes to the animals who need us most.\", a paragraph, Meet adoptable pets and Donate buttons, and a note that visits are by appointment only. Below, a strip of four cards reading Adopt a pet, Volunteer, Donate and Call us.",
        src: `${sunnyImages}/00-hero.webp`,
        width: 1600,
        height: 900,
      },
      {
        title: 'Our story',
        caption:
          'The 2021 fire, the years displaced, and the sanctuary they are building now. It was hard to find on the original site, so it moves to a section near the top with their own photograph and a link to the full version.',
        alt: "Sunny Sky's story section: a photograph of a volunteer kneeling with a black dog, captioned Graham, Washington, our sanctuary still under construction, next to the heading \"Rebuilding a home for animals who've lost theirs.\", two paragraphs about the 2021 fire and the new sanctuary, and a Read our full story button.",
        src: `${sunnyImages}/01-story.webp`,
        width: 1600,
        height: 636,
      },
      {
        title: 'Adopt',
        caption:
          'Their adoption process as three numbered steps, with the approved-first and no-walk-ins rule in step one where it cannot be missed. Adoption fees are printed rather than left to an email. The pet cards are filterable and every one carries a sample listing label, with a line underneath pointing to Petfinder for the real animals.',
        alt: "Sunny Sky's adopt section: the heading \"Meet your new best friend\", three numbered steps Apply first, Get approved and Meet and adopt, a line of adoption fees, filter chips reading All, Dogs, Cats and Seniors, six pet cards each with a photograph, a badge and a sample listing label, a note that the cards are samples and the real animals are on Petfinder, and four buttons.",
        src: `${sunnyImages}/02-adopt.webp`,
        width: 1600,
        height: 1576,
      },
      {
        title: 'Volunteer',
        caption:
          'A rescue this size runs on volunteers, so this is a real section rather than a line in the footer. The six areas are the specific ones they need help with, taken from their own volunteer material, and the age requirement and address are stated rather than hidden behind the application.',
        alt: "Sunny Sky's volunteer section: a dark navy block with the heading \"Love animals? We need you.\", a paragraph, a Volunteer application button, a note that volunteers must be 18 or over with the address, and six areas listed as Kennel care cats and dogs, Farm animal care, Event organization, Repairs and maintenance, Application processing and Fundraising.",
        src: `${sunnyImages}/03-volunteer.webp`,
        width: 1600,
        height: 464,
      },
      {
        title: 'Support the rescue',
        caption:
          'Every way of giving in one place: online through their PayPal, in person at their two drop-off points, or through their wishlists at three retailers. The 501(c)(3) line with the tax ID sits underneath, because donors going through an employer match need it and currently have to ask.',
        alt: "Sunny Sky's donate section: the heading \"Every dollar helps us say yes\" with three cards, Give online with a PayPal button, Drop off donations listing two locations with a directions link, and Shop our wishlists linking to Amazon, Walmart and Chewy. Underneath, the 501(c)(3) status, tax ID and an email for donation receipts.",
        src: `${sunnyImages}/04-donate.webp`,
        width: 1600,
        height: 665,
      },
      {
        title: 'The BLUE book',
        caption:
          'One of their adopters wrote a children\'s book and gives them a share of the proceeds. The cover is a stand-in that says so, because the artwork belongs to the author and was not mine to recreate.',
        alt: "Sunny Sky's book section: a light blue book cover mockup reading BLUE, A Story of a Dog's Best Friend and a True Heart, by Allan Mullen, with a strip across the bottom reading cover art not reproduced, next to the heading \"Read BLUE, and help our animals.\" and a Find BLUE on Amazon button.",
        src: `${sunnyImages}/05-book.webp`,
        width: 1600,
        height: 468,
      },
      {
        title: 'Good to know',
        caption:
          'Six questions in an accordion. Every answer already existed somewhere on their site or their flyers; the work was collecting them. Visiting, cost, location, applying, volunteering and whether donations are deductible.',
        alt: "Sunny Sky's FAQ: six collapsed questions reading Can I come visit and meet the animals, What does adopting cost, Where are you located, How do I apply, Can I volunteer and what are the requirements, and Are my donations tax deductible.",
        src: `${sunnyImages}/06-faq.webp`,
        width: 1600,
        height: 691,
      },
      {
        title: 'Events and footer',
        caption:
          'They run adoption events and pop-ups through the year, and those live on their events page and Facebook, so a short banner points at both rather than duplicating a calendar that would go stale. The footer repeats the appointment rule one last time.',
        alt: "Sunny Sky's events banner: a teal block reading \"Come meet us at an adoption event\" with a See upcoming events button. Below it a navy footer with adopt, get involved and contact columns, the 501(c)(3) line and the appointment-only note.",
        src: `${sunnyImages}/07-events-footer.webp`,
        width: 1600,
        height: 673,
      },
    ],
    phonesIntro: 'The page on a phone. Rescue traffic comes off Facebook, so most of it arrives here.',
    phones: [
      {
        src: `${sunnyImages}/mobile-hero.webp`,
        width: 1170,
        height: 2535,
        alt: "Sunny Sky's on a phone: the headline over the sunset photograph, two full-width buttons and the appointment-only note.",
        caption: 'The two buttons go full width and the appointment rule stays directly under them.',
      },
      {
        src: `${sunnyImages}/mobile-actions.webp`,
        width: 1170,
        height: 2535,
        alt: "Sunny Sky's on a phone: the two figures, then the four action cards stacked, Adopt a pet, Volunteer, Donate and Call us, each with an icon and a line of description.",
        caption: 'The four actions stack into a tappable list at phone width.',
      },
      {
        src: `${sunnyImages}/mobile-pets.webp`,
        width: 1170,
        height: 2535,
        alt: "Sunny Sky's on a phone: two adoptable pet cards, Daisy and Milo, each with a photograph, a badge, a sample listing label and a short description.",
        caption: 'Pet cards go one per row, and the sample listing label stays on every photograph.',
      },
      {
        src: `${sunnyImages}/mobile-donate.webp`,
        width: 1170,
        height: 2535,
        alt: "Sunny Sky's on a phone: the donate heading and the Give online and Drop off donations cards stacked with their buttons.",
        caption: 'Giving options stack with their buttons intact, so no one has to pinch to find PayPal.',
      },
    ],
    details: {
      design: [
        'Their yellow and their logo stayed. The yellow is used for actions only, so every button on the page means the same thing.',
        'Their own photographs carry the page. A rescue has better pictures than any stock library and using anything else would be a mistake.',
        'Four actions immediately under the hero, because a rescue homepage has four different visitors arriving at once and making all of them scroll costs the rescue money.',
        'The appointment-only rule appears three times: in the hero, in the first adoption step and in the footer. Repetition here saves somebody a drive.',
        'Every sample pet card is labeled as a sample, and the book cover says the artwork was not reproduced. Nothing on the page pretends to be something it is not.',
      ],
      build: [
        'One HTML file, about 561 KB. Most of that is their photographs embedded directly in the file.',
        'Hand-written CSS and JavaScript, no framework and no build step.',
        'The pet cards filter on a data attribute, and the FAQ uses native details elements so it works before the JavaScript runs.',
        'Reveal on scroll and four counting figures run on IntersectionObserver, and both switch off for anyone who prefers reduced motion.',
        'Six breakpoints, from 1000 pixels down to 250, because rescue traffic includes a lot of old phones.',
        'The annotation layer is part of the file: a Show notes button reveals a note on every section explaining what changed. It is off by default. Deployed on Netlify.',
      ],
    },
    tools: ['HTML & CSS', 'JavaScript', 'SVG', 'Google Fonts', 'Netlify'],
    backHref: '/#landing-pages',
    backLabel: 'Back to landing pages',
  },
  {
    slug: 'almanac',
    title: 'Almanac Coffee Bar',
    eyebrow: 'Landing page',
    client: 'Almanac Coffee Bar (an invented business)',
    kind: 'Concept design',
    role: 'Design and front-end development',
    year: '2026',
    liveUrl: 'https://b12-cafe-mockup.netlify.app',
    summary:
      'A one-page site for a neighborhood coffee bar. It answers the two questions people actually have, what is on the menu and when are you open, without making anyone search for them. <strong>The menu filters by category, the plus buttons build an order in a drawer, and the events book through a dialog.</strong> One hand-written HTML file.',
    tags: ['HTML & CSS', 'JavaScript', 'Accessible tabs and dialogs', 'Responsive layout', 'SVG', 'Netlify'],
    description:
      'A one-page site for a neighborhood coffee bar, designed and built in 2026. Almanac is not a real business. I invented it so I could design and build every part of a small hospitality site without waiting for a client to ask for one.',
    pageDescription:
      'A one-page concept site for a neighborhood coffee bar, shown section by section: a filterable menu with an order-ahead drawer, a coffee of the month, bookable events, a photo wall, reviews and a visit section with hours and a map.',
    facts: [{ label: 'Format', value: 'One-page site' }],
    hero: {
      src: `${almanacImages}/first-screen.webp`,
      width: 1920,
      height: 1200,
      alt: 'First screen of the Almanac Coffee Bar concept: a dark photograph of a barista at work, the headline "Good coffee, slow mornings.", two buttons, a 4.9 Google rating, and a card showing today\'s bake.',
    },
    heroCaption:
      'The first screen. The photograph is the room, the card on the right is what came out of the oven this morning, and the rating sits directly under the buttons.',
    highlights: [
      { value: 'Order ahead', label: 'The plus button on any menu row opens a drawer and builds the order without leaving the page' },
      { value: 'Bookable events', label: 'Each event shows what is left and books through a dialog' },
      { value: 'One HTML file', label: 'About 94 KB, hand-written, no framework and no build step' },
    ],
    overviewTitle: 'What the page has to do',
    overview: [
      'A coffee bar gets two kinds of visitor: someone deciding whether to walk in, and a regular checking the hours or what is on today. Both questions have to be answered without hunting, so the menu with prices, the hours and the address are all on the one page, and an order-ahead button rides in the header the whole way down.',
      'The order of the sections follows how someone decides. The menu first, because that is what people came for, then the coffee of the month and where the beans come from, then the things that make it a place rather than a counter: the events, the photo wall, the reviews and the three people behind it. The page ends with the practical part, hours and address and a map, next to an email club for people who want to hear when the roast changes.',
      'Almanac is not a real business. I invented it so every detail would be mine to write: the drinks, the prices, the roast notes, the events and the staff are all written out, not filled in with placeholder text. The point was to build a small hospitality site the way one should be built, and have something to show for it.',
    ],
    walkthroughIntro: 'The page, top to bottom.',
    sections: [
      {
        title: 'Header and hero',
        caption:
          'A photograph of the bar being worked, one line saying what the place is, and two buttons. The card on the right is today\'s bake, which turns the page from a brochure into something worth checking again. The Google rating sits under the buttons rather than in a badge nobody reads.',
        alt: 'Almanac hero: a dark photograph of a barista pouring, the headline "Good coffee, slow mornings.", See the menu and Order ahead buttons, a 4.9 Google rating from 312 reviews, and a card reading "Cardamom buns, out of the oven at 7:30".',
        src: `${almanacImages}/00-hero.webp`,
        width: 1600,
        height: 762,
      },
      {
        title: 'The menu',
        caption:
          'The menu, with prices, on the page. Four tabs switch between espresso, brewed, not coffee and food without a reload, and they are built as a real tab list, so the arrow keys move between them. The plus button on any row adds it to an order drawer that totals at the bottom and says you pay at the counter.',
        alt: 'Almanac menu section: four filter tabs, a photograph of a maple oat latte marked house favourite, and a price list with Espresso, Cortado, Cappuccino, Maple oat latte, Mocha, Americano and Flat white, each with a price and a plus button.',
        src: `${almanacImages}/01-menu.webp`,
        width: 1600,
        height: 975,
      },
      {
        title: 'Coffee of the month',
        caption:
          'One roast given a whole section: where it grew, what it tastes like, and four numbered steps for brewing it at home. It ends with both prices, a cup and a bag, because the people who read this far are the ones who buy beans.',
        alt: 'Almanac coffee of the month: a photograph of ground coffee and a brewed cup, the heading "Ethiopia Guji, natural process", tasting notes as pills, four brewing steps, and the prices $5.00 a cup and $19 a bag.',
        src: `${almanacImages}/02-coffee-of-the-month.webp`,
        width: 1600,
        height: 772,
      },
      {
        title: 'Our coffee',
        caption:
          'Where the beans come from and how they are roasted, in plain sentences. Three figures sit under it, and the three stages from green bean to cup are named, so the sourcing claim is specific rather than general.',
        alt: 'Almanac our coffee section: a photograph of a coffee roaster, the heading "Roasted in small batches, poured with care.", three numbers reading 6 single-origin roasts, 12 pounds per batch and 2019 family-owned since, and three cards headed Sourced, Roasted and Poured.',
        src: `${almanacImages}/03-our-coffee.webp`,
        width: 1600,
        height: 799,
      },
      {
        title: 'This week at Almanac',
        caption:
          'Three events this week, each with the day, the time, the price and how many spots are left. Save a spot opens a dialog. The spots-left count gives a reason to book now rather than later.',
        alt: 'Almanac events section: three cards headed Saturday cupping, Latte art night and Open mic Thursday, each with a photograph, a day badge, a description, the number of spots left and a button.',
        src: `${almanacImages}/04-events.webp`,
        width: 1600,
        height: 786,
      },
      {
        title: 'The vibe',
        caption:
          'A photo wall of the room, the food and the people in it, in a grid of mixed sizes so it does not read as a stock gallery. Any photo opens full size in a viewer with arrow keys and an Escape to close.',
        alt: 'Almanac gallery: a grid of nine photographs of the cafe interior, customers, pastries and coffee, with an Instagram link underneath.',
        src: `${almanacImages}/05-gallery.webp`,
        width: 1600,
        height: 977,
      },
      {
        title: 'Kind words',
        caption:
          'The rating broken down star by star, next to the reviews themselves in a slider. The breakdown is more useful than the average on its own: 91 percent of the reviews are five stars.',
        alt: 'Almanac reviews section: a dark panel showing 4.9 out of 5 from 312 Google reviews with a bar for each star rating, next to two review cards with five stars each.',
        src: `${almanacImages}/06-reviews.webp`,
        width: 1600,
        height: 600,
      },
      {
        title: 'The people',
        caption:
          'The three people behind the counter, each with what they do and one specific thing about them. A small independent place competes on exactly this, so it gets a section rather than a line in the footer.',
        alt: 'Almanac people section: three round portraits with names and roles, Nora the owner, Sam the head roaster and Theo on late nights, each with a sentence about them.',
        src: `${almanacImages}/07-people.webp`,
        width: 1600,
        height: 694,
      },
      {
        title: 'Good to know',
        caption:
          'Six questions in an accordion: parking, working on a laptop, dogs, catering, gift cards and allergens. These are the ones that otherwise arrive as Instagram messages one at a time.',
        alt: 'Almanac FAQ: six collapsed questions reading Is there parking, Can I work here on a laptop, Are dogs allowed, Do you do catering or coffee for meetings, Do you sell gift cards, and What about allergies.',
        src: `${almanacImages}/08-faq.webp`,
        width: 1600,
        height: 702,
      },
      {
        title: 'Visit us and footer',
        caption:
          'Hours with today picked out and an open or closed line above them, the address, a phone number, directions and a map drawn as inline SVG rather than loaded from a map service. The email club sits beside it, and the footer repeats the practical details for anyone who scrolled past.',
        alt: 'Almanac visit section: opening hours with Saturday highlighted, the address and phone number, Get directions and Call us buttons, a hand-drawn map, and a dark Join the Almanac Club card with an email field. Below it the footer with hours, address and links.',
        src: `${almanacImages}/09-visit-footer.webp`,
        width: 1600,
        height: 1201,
      },
    ],
    phonesIntro: 'The page on a phone, which is where most people will open it, standing outside or on the way over.',
    phones: [
      {
        src: `${almanacImages}/mobile-hero.webp`,
        width: 1170,
        height: 2535,
        alt: 'Almanac on a phone: the headline over the photograph, two full-width buttons, the Google rating and the today\'s bake card.',
        caption: 'The hero keeps the photograph, the two buttons and the bake of the day above the fold.',
      },
      {
        src: `${almanacImages}/mobile-menu.webp`,
        width: 1170,
        height: 2535,
        alt: 'Almanac on a phone: the four menu tabs wrapped onto two lines, the house favourite photo card, and the price list with plus buttons.',
        caption: 'The menu tabs wrap to two lines and the prices stay full width, so ordering works one-handed.',
      },
      {
        src: `${almanacImages}/mobile-events.webp`,
        width: 1170,
        height: 2535,
        alt: 'Almanac on a phone: the events heading and two event cards side by side in a strip that scrolls sideways.',
        caption: 'The three event cards become a strip you swipe, rather than three tall cards to scroll past.',
      },
      {
        src: `${almanacImages}/mobile-visit.webp`,
        width: 1170,
        height: 2535,
        alt: 'Almanac on a phone: the open or closed line, the hours, the address, Get directions and Call us buttons, the map and the email club card.',
        caption: 'Open or closed first, then hours, then directions and a call button within thumb reach.',
      },
    ],
    details: {
      design: [
        'Two typefaces: Lora for headlines, Figtree for everything else. The palette is cream, dark roast brown and amber, taken from the product rather than from a template.',
        'Prices are on the page. Nothing is hidden behind a PDF, a photo of a chalkboard or a delivery app.',
        'Photographs carry the food and the room. Everything else is type, space and one accent color.',
        'Every section that could end in an order ends in the same amber button, and the header carries it the whole way down.',
        'The details are written, not filled in: real drink names, real roast notes, named staff and specific events.',
      ],
      build: [
        'One HTML file, about 94 KB, with hand-written CSS and JavaScript. No framework and no build step.',
        'The menu is a real ARIA tab list with arrow-key navigation, and each of the 25 add buttons carries its own label for screen readers.',
        'Order ahead opens a modal drawer, the photo wall and the event booking use the native dialog element, so all three close on Escape and trap focus without a library.',
        'Reveal on scroll and the counting numbers run on IntersectionObserver, and both switch off for anyone who prefers reduced motion.',
        'Breakpoints run down to 340 pixels wide. The events row turns into a horizontal strip on a phone rather than three stacked cards.',
        'Every icon and the map are inline SVG. The photographs are the only image files. Deployed on Netlify.',
      ],
    },
    tools: ['HTML & CSS', 'JavaScript', 'SVG', 'Google Fonts', 'Netlify'],
    backHref: '/#landing-pages',
    backLabel: 'Back to landing pages',
  },
  {
    slug: 'wasatch-ridge',
    title: 'Wasatch Ridge Capital',
    eyebrow: 'Landing page',
    client: 'Wasatch Ridge Capital (an invented firm)',
    kind: 'Concept design',
    role: 'Design and front-end development',
    year: '2026',
    liveUrl: 'https://wasatch-ridge.netlify.app',
    summary:
      'A one-page concept site for a real estate investment firm. <strong>Wasatch Ridge is an invented firm, every figure is labeled illustrative, and a concept notice appears in four places.</strong> It includes a filterable portfolio, a distributions chart, three offerings and an accredited-investor form, hand-written in a single HTML file.',
    tags: ['HTML & CSS', 'JavaScript', 'Data presentation', 'Long-form layout', 'SVG', 'Netlify'],
    description:
      'A one-page site for a real estate investment firm, designed and built in 2026. Wasatch Ridge is an invented firm and none of the figures are real. I built it to practice presenting dense financial data clearly and to handle the disclosure a page like this needs.',
    pageDescription:
      'A one-page concept site for a real estate investment firm, shown section by section: a filterable portfolio, a track record with a distributions chart, three offerings, an FAQ and an accredited-investor access form.',
    facts: [{ label: 'Format', value: 'One-page site' }],
    hero: {
      src: `${wasatchImages}/first-screen.webp`,
      width: 1920,
      height: 1200,
      alt: 'First screen of the Wasatch Ridge Capital concept: the headline "Invest in the real estate powering the Mountain West.", a drawn illustration of mountains and buildings, two buttons, an accredited investor notice, and four numbers.',
    },
    heroCaption:
      'The first screen. The illustration is SVG rather than a photograph, the accredited-investor notice sits above the fold, and four key figures close the section.',
    highlights: [
      { value: 'Labeled throughout', label: 'Every figure, property and offering is marked illustrative, with a concept notice in four places' },
      { value: 'Filterable portfolio', label: 'Six properties by type, each with units, year acquired and occupancy' },
      { value: 'One HTML file', label: 'About 52 KB, hand-written, no framework and no build step' },
    ],
    overviewTitle: 'What the page does',
    overview: [
      'The page answers four questions in order: what the firm buys, whether it has done it before, what is open now, and what happens after you submit your details. The request form sits at the end, after all four are answered.',
      'Disclosure was the main constraint. Every figure on the page is invented, so the page states that clearly and repeatedly: a concept notice under the portfolio, under the offerings, in the footer and on the form. The chart caption marks the figures illustrative, and the returns figure carries an asterisk that resolves in the footer. Nothing on the page can be read as a solicitation.',
      'Wasatch Ridge is not a real firm. I invented it for the constraints: dense figures that still have to scan on a phone, a portfolio filter built without a framework, and a form serious enough for the amount it asks about.',
    ],
    walkthroughIntro: 'The page, top to bottom.',
    sections: [
      {
        title: 'Header and hero',
        caption:
          'The headline states what the firm does and where it operates. The illustration is drawn in SVG, so it loads instantly and avoids the stock skyline photograph. The accredited-investor notice sits above the fold rather than in the footer, and four figures close the section.',
        alt: 'Wasatch Ridge hero: the headline "Invest in the real estate powering the Mountain West.", a flat illustration of mountains and buildings labeled Wasatch Front, Utah, Request investor access and View current offerings buttons, an accredited investor notice, and the numbers $480M+ assets under management, 14 yrs operating across cycles, 2,600+ units owned and managed and 9 states across the West.',
        src: `${wasatchImages}/00-hero.webp`,
        width: 1600,
        height: 816,
      },
      {
        title: 'Strategy',
        caption:
          'Three strategies, each with a one-line rationale and a bar showing its share of the portfolio: 58 percent multifamily, 27 percent commercial and industrial, 15 percent value-add. The bars let a reader check the allocation instead of taking it on trust.',
        alt: 'Wasatch Ridge strategy section: three columns headed Income Multifamily, Stability Commercial and industrial, and Growth Value-add, each with a short description and a bar showing its share of the portfolio.',
        src: `${wasatchImages}/01-strategy.webp`,
        width: 1600,
        height: 640,
      },
      {
        title: 'Portfolio',
        caption:
          'Six properties, filterable by type without a page reload. Each card carries the numbers that matter for that asset class: units or square feet, the year acquired, and occupancy or lease term. The concept notice sits directly under the grid.',
        alt: 'Wasatch Ridge portfolio section: four filter buttons reading All, Multifamily, Commercial and industrial, and Value-add, above six property cards with photographs, names, locations and three figures each.',
        src: `${wasatchImages}/02-portfolio.webp`,
        width: 1600,
        height: 1231,
      },
      {
        title: 'Track record',
        caption:
          'The only section in the firm\'s dark green, which marks it as the center of the page. Three headline figures, then distributions by year as a bar chart built in CSS rather than an image, so it stays sharp at any size. The caption marks the figures illustrative and the returns figure carries an asterisk.',
        alt: 'Wasatch Ridge track record: a dark green band reading "Since 2011, we\'ve acquired more than $480M in real estate and returned over $120M to our investors.", the numbers $120M+ distributed, 14.2% average annualized return and 96% average occupancy, and a bar chart of distributions from 2019 to 2026.',
        src: `${wasatchImages}/03-track-record.webp`,
        width: 1600,
        height: 1076,
      },
      {
        title: 'How investing works',
        caption:
          'Four numbered steps from request to distribution, in plain language. It answers what happens after a visitor submits their details, which the form itself does not explain.',
        alt: 'Wasatch Ridge process section: four numbered steps headed Request access, Review the offering, Subscribe, and Get paid and stay informed, each with two sentences.',
        src: `${wasatchImages}/04-how-it-works.webp`,
        width: 1600,
        height: 518,
      },
      {
        title: 'Offerings',
        caption:
          'Three offerings with status on each card: open now, opening next quarter, and fully subscribed. Each shows target return, hold period, minimum investment and the share of the raise committed. The fully subscribed offering stays on the page as evidence of completed deals.',
        alt: 'Wasatch Ridge offerings section: three cards headed Ridgeline II marked Open now, Silver Creek Phase II marked Opens in Q1, and Canyon Court marked Fully subscribed, each listing target annualized return, target hold, minimum investment and distributions, with a progress bar and a button.',
        src: `${wasatchImages}/05-offerings.webp`,
        width: 1600,
        height: 846,
      },
      {
        title: 'Insights',
        caption:
          'Four articles written for investors rather than for search, each tagged by the part of the business it covers.',
        alt: 'Wasatch Ridge insights section: four rows, each with a date, a category label, a headline and a one-line summary, with a Read update link.',
        src: `${wasatchImages}/06-insights.webp`,
        width: 1600,
        height: 845,
      },
      {
        title: 'Before you request access',
        caption:
          'Six questions in an accordion, including the difficult ones: how long capital is committed, whether the firm invests alongside its investors, and what the risks are.',
        alt: 'Wasatch Ridge FAQ: six collapsed questions reading Who can invest, What is the minimum investment, How long is my money committed, How do you get paid, Do you invest your own money, and What are the risks.',
        src: `${wasatchImages}/07-faq.webp`,
        width: 1600,
        height: 695,
      },
      {
        title: 'Investor access and footer',
        caption:
          'The request form: name, email, phone, investment amount as a range rather than a figure, a free-text field and an accredited-investor confirmation. Three reassurances sit beside it, and the footer carries the full disclaimer.',
        alt: 'Wasatch Ridge access section: the heading "Invest alongside us." with three reassurances about review time, no obligation and privacy, next to a Request investor access form with first and last name, email, phone, an amount range select, a message box and an accredited investor checkbox. Below it a dark green footer with company and investor links and a disclaimer.',
        src: `${wasatchImages}/08-access-footer.webp`,
        width: 1600,
        height: 1306,
      },
    ],
    phonesIntro: 'The page on a phone. The figures are the hardest part to keep readable at this width, so they were designed first.',
    phones: [
      {
        src: `${wasatchImages}/mobile-hero.webp`,
        width: 1170,
        height: 2535,
        alt: 'Wasatch Ridge on a phone: the drawn illustration above the headline, the description and a full-width Request investor access button.',
        caption: 'The illustration moves above the headline and the single button fills the width.',
      },
      {
        src: `${wasatchImages}/mobile-portfolio.webp`,
        width: 1170,
        height: 2535,
        alt: 'Wasatch Ridge on a phone: property cards stacked one per screen, each with a photograph and three figures in a row.',
        caption: 'Property cards stack one per screen, and the three figures stay in a row rather than wrapping.',
      },
      {
        src: `${wasatchImages}/mobile-offerings.webp`,
        width: 1170,
        height: 2535,
        alt: 'Wasatch Ridge on a phone: the Ridgeline II offering card with its status, target return, hold, minimum, distributions, a progress bar and a button.',
        caption: 'Each offering becomes a full-width card with its status badge and the committed bar intact.',
      },
      {
        src: `${wasatchImages}/mobile-access.webp`,
        width: 1170,
        height: 2535,
        alt: 'Wasatch Ridge on a phone: the heading "Invest alongside us.", three reassurances, and the start of the access form.',
        caption: 'The three reassurances move above the form rather than beside it.',
      },
    ],
    details: {
      design: [
        'Two typefaces: Lora for headlines, Instrument Sans for text and every figure. Numbers get the sans so columns of them line up.',
        'Dark green, cream and muted gold. The green appears once, on the track record, which marks it as the center of the page.',
        'The hero illustration is drawn rather than photographed, which avoids the stock skyline photograph most firms in this sector use.',
        'Figures are grouped in rows of three or four and never mixed with body copy, so a reader can scan the numbers without reading the page.',
        'Disclosure is built into the layout: the concept notice appears in four places, and the chart, the offerings and the returns figure each carry their own label.',
      ],
      build: [
        'One HTML file, about 52 KB, with hand-written CSS and JavaScript. No framework and no build step.',
        'The portfolio filters on a data attribute and updates aria-pressed on the buttons, so the filter state is exposed to screen readers, not just shown visually.',
        'The distributions chart is CSS, with each bar height set by a custom property. It stays sharp at any size and is hidden from screen readers, which get the same figures as text above it.',
        'Ten numbers count up when their block comes into view, on IntersectionObserver, and hold their final value for anyone who prefers reduced motion.',
        'The FAQ uses native details elements, so it works before the JavaScript runs.',
        'Three breakpoints, 980, 680 and 480 pixels. Deployed on Netlify.',
      ],
    },
    tools: ['HTML & CSS', 'JavaScript', 'SVG', 'Google Fonts', 'Netlify'],
    backHref: '/#landing-pages',
    backLabel: 'Back to landing pages',
  },
];
