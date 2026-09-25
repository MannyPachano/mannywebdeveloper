// ---------------------------------------------------------------------------
// PROJECT WALKTHROUGHS
// Case studies for the live sites, in the same walkthrough format as the
// landing pages. Each entry renders at /web-developer-project-<slug> through
// src/pages/web-developer-project-[slug].astro (Clox has its own file so the
// SHOW_CLOX switch can turn it into a redirect). Homepage cards still come from
// projects.ts. Images live in /public/images/projects/<slug>/.
// ---------------------------------------------------------------------------

import { SHOW_CLOX } from '../config';
import type { Walkthrough } from './walkthrough-types';

const timeclickImages = '/images/projects/timeclick';
const uesImages = '/images/projects/ues';
const cloxImages = '/images/projects/clox';
const jonathanImages = '/images/projects/jonathan-zalzman';
const landscaperImages = '/images/projects/landscaper-templates';
const keysetImages = '/images/projects/keyset';
const nuvectorImages = '/images/projects/nuvector';

const backToProjects = { backHref: '/#project-section', backLabel: 'Back to projects' };

const timeclick: Walkthrough = {
  slug: 'timeclick',
  title: 'TimeClick',
  eyebrow: 'Case study',
  client: 'TimeClick (Utah, US)',
  kind: 'Website redesign and marketing',
  role: 'Front-end developer and marketing specialist',
  year: '2024 to present',
  liveUrl: 'https://timeclick.com',
  summary:
    'I redesigned the marketing site for a time clock software company, built the CRM, checkout and email systems behind it, and ran the SEO program that took organic traffic from about 4,000 to over 30,000 visitors a month.',
  tags: ['WordPress', 'JavaScript', 'Zoho CRM', 'Stripe and WooCommerce', 'SEO', 'Email marketing'],
  description:
    'I redesigned timeclick.com, built the CRM, checkout and email systems behind it, and ran the SEO program that took organic traffic from about 4,000 to over 30,000 visitors a month.',
  pageDescription:
    'TimeClick case study: the website redesign, the CRM, checkout and email systems behind it, and the SEO program that grew organic traffic from about 4,000 to over 30,000 monthly visitors between December 2025 and April 2026.',
  facts: [{ label: 'SEO program', value: 'December 2025 to April 2026' }],
  hero: {
    src: `${timeclickImages}/first-screen.webp`,
    width: 1920,
    height: 1200,
    alt: 'The first screen of timeclick.com: the headline "Time clock software with zero monthly fees", a free trial button and a screenshot of the software.',
  },
  heroCaption: 'The first screen of the homepage at 1680 pixels wide.',
  highlights: [
    { value: '4,000 to 30,000+', label: 'Monthly organic visitors, December 2025 to April 2026 (Google Analytics)' },
    { value: 'Full redesign', label: 'Homepage, feature pages, pricing and the free trial flow' },
    { value: 'Email campaigns', label: 'Launched the trial and post-trial sequences, plus Zoho CRM, WooCommerce and Stripe' },
  ],
  overviewTitle: 'About the project',
  overview: [
    'TimeClick sells desktop time clock software to small businesses. Unlike most competitors, it is sold for a one-time price with no subscription. The website has to explain that quickly, show that the product is trusted, and get the right visitors to start the 14-day free trial, which does not need a credit card. I redesigned the site with that goal, and then ran the SEO program that brought the visitors to it.',
    'The homepage starts with the offer and the trial button, followed by the proof: a 4.7 out of 5 rating from more than 1,000 reviews, customer logos, and a feature section that covers time tracking, PTO, job codes, reports, mobile apps, geofencing and payroll integrations with QuickBooks, ADP and Gusto. Reviews and a second trial button close the page. The site is responsive and built to load quickly on the laptops and phones that small business owners use.',
    'I also built the systems around the site. I integrated a Zoho CRM newsletter signup into the blog. The original embed was being broken by WordPress content filters, so I replaced it with a plain JavaScript <code>fetch()</code> call. I fixed a WooCommerce and Stripe ACH microdeposit problem on the purchase site with a small script. I wrote and launched the trial and post-trial email campaigns, and the first newsletter to the existing customer base.',
    'Separately from the website, I led a screen-by-screen redesign of the TimeClick 25 admin interface and delivered interactive HTML, CSS and JavaScript mockups that the development team built from.',
  ],
  results: {
    title: 'SEO results, December 2025 to April 2026',
    intro:
      'I ran the SEO program for five months and handed it off in April 2026. The numbers below come from Google Analytics and from Ahrefs.',
    stats: [
      { value: '4,000', label: 'Monthly organic visitors in December 2025 (Google Analytics)' },
      { value: '30,000+', label: 'Monthly organic visitors in April 2026 (Google Analytics)' },
      { value: '2,400', label: 'Keywords ranking, 472 of them in the top 3 (Ahrefs, September 2026)' },
      { value: '753', label: 'Google AI Overviews that cite timeclick.com (Ahrefs, September 2026)' },
    ],
    figures: [
      {
        src: `${timeclickImages}/seo-traffic.webp`,
        width: 1600,
        height: 610,
        alt: 'Ahrefs line chart of estimated organic traffic to timeclick.com from September 2025 to September 2026. The line is flat near 2,000 until January 2026, climbs to about 45,000 by April 2026 and stays between roughly 20,000 and 40,000 afterwards.',
        caption:
          'Estimated organic traffic to timeclick.com, September 2025 to September 2026 (traffic in orange, impressions in dark red). The climb starts in January 2026, the second month of the program, and holds after the program ended. Source: Ahrefs Site Explorer.',
      },
      {
        src: `${timeclickImages}/seo-top-pages.webp`,
        width: 1600,
        height: 531,
        alt: 'Ahrefs table of the top organic pages on timeclick.com: the US federal holidays tool with about 12,700 monthly visits, the tools index, the time management quotes page, the homepage and the hours to decimal calculator.',
        caption:
          'The pages that carry the traffic: the free tools built for search (the federal holidays calendar, the hours to decimal calculator), the tools index and the time management quotes page. Estimated monthly visits per page. Source: Ahrefs.',
      },
      {
        src: `${timeclickImages}/seo-top-keywords.webp`,
        width: 1600,
        height: 410,
        alt: 'Ahrefs table of the top organic keywords: "what holiday is tomorrow", "is tomorrow a holiday", "what holiday is it today" and "holiday tomorrow", with monthly volumes between 9,400 and 40,000.',
        caption: 'The searches that bring the most visitors are questions about holidays, answered by the federal holidays page. Source: Ahrefs.',
      },
    ],
    paragraphs: [
      'The work: free tools and resource pages built for searches people make every day (a federal holidays calendar, a time card calculator, an hours to decimal calculator, a military time converter and others), articles for searches like "easy to use time clock software", on-page fixes across the site, schema markup fixes (the site was marked up as a local business; it is a national software company), new backlinks, and internal links from the tools pages to the product pages and the free trial.',
      'Most of the new traffic is informational: people looking up holidays or converting hours. The tools pages link to the product and the trial, so that traffic feeds the top of the funnel. Ahrefs shows the same picture from the outside: estimated organic traffic went from about 2,000 visits a month in late 2025 to a peak near 45,000 in April 2026, and has stayed between roughly 20,000 and 40,000 since. Ahrefs numbers are estimates; the Google Analytics figures above are the measured ones.',
    ],
  },
  walkthroughIntro: 'The homepage, top to bottom.',
  sections: [
    {
      title: 'Header and hero',
      caption:
        'The offer in one line: time clock software with zero monthly fees. One orange button to start the trial, the 4.7 rating with the review sites it comes from, and a screenshot of the actual software with a play button for the product video.',
      alt: 'timeclick.com header and hero: the headline "Time clock software with zero monthly fees", a Get Started Free button, a 4.7 out of 5 rating with Google, Capterra, G2 and Software Advice badges, and a screenshot of the software.',
      src: `${timeclickImages}/01-hero.webp`,
      width: 1600,
      height: 731,
    },
    {
      title: 'Proof: 8,000+ businesses',
      caption:
        'Customer logos right under the hero, before any feature talk. Best Western, Farmers Insurance, Holiday Inn, Nationwide, Ace Hardware, H&R Block and Hampton. Small businesses recognize them and relax.',
      alt: 'A headline about 8,000+ businesses tracking time the affordable way, above a row of customer logos.',
      src: `${timeclickImages}/02-proof.webp`,
      width: 1600,
      height: 542,
    },
    {
      title: 'Made for small businesses',
      caption:
        'The first of three alternating rows. A short statement about who the product is for, a button to the reviews, and a custom illustration instead of a stock photo.',
      alt: 'Illustration of a barber shop and a cafe storefront next to the text "Time Tracking Made For Small Businesses" and a See Reviews button.',
      src: `${timeclickImages}/03-small-business.webp`,
      width: 1600,
      height: 508,
    },
    {
      title: 'Buy once, use forever',
      caption:
        'The main difference from every competitor gets its own row: you pay once and own the license. The button goes to pricing, which is where a visitor who likes this idea wants to go next.',
      alt: 'The text "Buy Once. Use Forever. No Subscription Required" with a See Pricing button, next to an illustration of a key set in a rock.',
      src: `${timeclickImages}/04-buy-once.webp`,
      width: 1600,
      height: 524,
    },
    {
      title: 'Payroll integrations',
      caption:
        'The third row answers the practical question: does it work with my payroll? QuickBooks, ADP and Gusto logos, one sentence, one button to the integrations page.',
      alt: 'Illustration of a computer exporting a timesheet to QuickBooks, ADP and Gusto, next to the text "Accurate Timesheets for Effortless Payroll".',
      src: `${timeclickImages}/05-payroll.webp`,
      width: 1600,
      height: 497,
    },
    {
      title: 'Eight features, one grid',
      caption:
        'Every feature in two rows of four: time clock, employee time tracking, department and job tracking, timesheet reports, PTO, the mobile app, payroll integrations and geofencing. Each one is two sentences and a link to its own page, which is also where the SEO traffic for those terms lands.',
      alt: 'A grid of eight features with short descriptions and links, under the heading "Time Clock Software With All The Features You Need".',
      src: `${timeclickImages}/06-features.webp`,
      width: 1600,
      height: 1070,
    },
    {
      title: 'Works the way you do',
      caption:
        'Four objections handled in four short blocks: setup takes under ten minutes, support is real people in the US, time theft, and your data stays on your own computer or server instead of the cloud.',
      alt: 'Four icon blocks: Quick and Easy Setup, Real People Real Support, Stop Time Theft Cold, Your Data Your Control.',
      src: `${timeclickImages}/07-works.webp`,
      width: 1600,
      height: 865,
    },
    {
      title: 'Reviews',
      caption:
        'Three real reviews with names, roles and companies, from a plastics company, a dental practice and an imaging business. The blue panel breaks up the white page before the last call to action.',
      alt: 'A blue panel with three customer reviews with photos, names and companies, and a See All Reviews button.',
      src: `${timeclickImages}/08-reviews.webp`,
      width: 1600,
      height: 922,
    },
    {
      title: 'Last call to action and footer',
      caption:
        'The trial offer again, with the two facts that matter (14 days, no credit card) above the headline. The footer lists every product page and every free tool, which also gives those pages internal links from every page on the site.',
      alt: 'A call to action reading "Start your free TimeClick trial now" with two buttons, above a dark footer with product, resources, free tools and support columns.',
      src: `${timeclickImages}/09-trial-footer.webp`,
      width: 1600,
      height: 1260,
    },
  ],
  galleries: [
    {
      title: 'Pages built for search and for the trial',
      intro: 'A few of the other pages I designed and wrote: the pages that rank, and the pages that convert.',
      columns: 2,
      items: [
        {
          src: `${timeclickImages}/page-federal-holidays.webp`,
          width: 1600,
          height: 1000,
          alt: 'The US Federal Holidays Calendar page: a blue header, a table of holidays by year and a list of common questions.',
          caption: 'US Federal Holidays Calendar. The single biggest source of organic traffic on the site, about 12,700 estimated visits a month.',
        },
        {
          src: `${timeclickImages}/page-time-card-calculator.webp`,
          width: 1600,
          height: 1000,
          alt: 'The Free Time Card Calculator page with a weekly grid of start, end and break times.',
          caption: 'Free Time Card Calculator. A working tool with breaks, lunch and overtime, built for the searches small business owners make every payday.',
        },
        {
          src: `${timeclickImages}/page-pricing.webp`,
          width: 1600,
          height: 1000,
          alt: 'The pricing page: "Simple, Straightforward Pricing" with a device license card showing a one-time price.',
          caption: 'Pricing. One-time price per device, what is included, and what a renewal costs, with nothing hidden.',
        },
        {
          src: `${timeclickImages}/page-no-subscription.webp`,
          width: 1600,
          height: 1000,
          alt: 'The no-subscription page: "Time tracking software you own, not rent" with a comparison of one-time cost against monthly subscriptions.',
          caption: 'No subscription. A page built around the one argument competitors cannot make, with a cost comparison over time.',
        },
        {
          src: `${timeclickImages}/page-free-trial.webp`,
          width: 1600,
          height: 1000,
          alt: 'The free trial page: a dark page with a short signup form and the words "14 Day Free Trial, No Credit Card Required".',
          caption: 'The free trial page. Everything on the site points here: one short form, no credit card, no distractions.',
        },
      ],
    },
  ],
  phonesIntro: 'The homepage on a phone. One column, the trial button within reach of a thumb, and the feature list turned into cards.',
  phones: [
    {
      src: `${timeclickImages}/mobile-hero.webp`,
      width: 1170,
      height: 2535,
      alt: 'timeclick.com on a phone: the headline, the trial button, the rating and the review site badges, then the software screenshot.',
      caption: 'The hero: headline, button and rating fit on the first screen.',
    },
    {
      src: `${timeclickImages}/mobile-features.webp`,
      width: 1170,
      height: 2535,
      alt: 'timeclick.com on a phone: the features section as a single column of cards.',
      caption: 'The feature grid becomes one column of cards.',
    },
    {
      src: `${timeclickImages}/mobile-works.webp`,
      width: 1170,
      height: 2535,
      alt: 'timeclick.com on a phone: the "Works the Way You Do" section with icons stacked.',
      caption: 'The objections section, stacked with the icons centered.',
    },
    {
      src: `${timeclickImages}/mobile-reviews.webp`,
      width: 1170,
      height: 2535,
      alt: 'timeclick.com on a phone: the blue reviews panel with review cards stacked.',
      caption: 'Reviews stack as full-width cards.',
    },
  ],
  details: {
    design: [
      'One message at the top: no monthly fees, free trial, no credit card. Everything else on the page supports that.',
      'Proof before features: the rating, the review count and the customer logos come right after the hero.',
      'Feature sections built around screenshots of the real software, not illustrations.',
      'Large text and high contrast, because the buyers are small business owners on laptops and phones, not designers on big screens.',
    ],
    build: [
      'WordPress child theme with hand-coded page templates, styled with Tailwind CSS. No page builder on the pages I built.',
      'A Zoho CRM signup on the blog rebuilt as a plain JavaScript <code>fetch()</code> call after WordPress filters kept breaking the embed.',
      'A small script that fixed the WooCommerce and Stripe ACH microdeposit flow on the purchase site.',
      'Free tools pages (calendar, calculators, converters) built as their own post type, each with FAQ and WebApplication schema.',
    ],
    marketing: [
      'Five-month SEO program: tools and resource pages, articles, on-page fixes, schema fixes, backlinks and internal linking. Organic traffic went from about 4,000 to over 30,000 visitors a month.',
      'Launched the trial and post-trial email campaigns, and the first newsletter to the existing customer base.',
      'Monthly reporting from Google Analytics 4, Search Console and Ahrefs.',
    ],
  },
  tools: ['WordPress', 'HTML & CSS', 'Tailwind CSS', 'JavaScript', 'Zoho CRM', 'WooCommerce', 'Stripe', 'Figma', 'Google Analytics 4', 'Search Console', 'Ahrefs', 'SEO', 'Email marketing'],
  ...backToProjects,
};

const ues: Walkthrough = {
  slug: 'ues',
  title: 'Universal Environmental Services',
  eyebrow: 'Case study',
  client: 'Universal Environmental Services (Georgia, US)',
  kind: 'Website rebuild, maps and SEO',
  role: 'Web developer and SEO consultant',
  year: '2026 to present',
  liveUrl: 'https://universalenvironmentalservices.com',
  summary:
    'I am rebuilding the website of a used oil collection company that operates in 28 states, one page at a time, and running its SEO program: a new homepage, a locations page with all 52 facilities, 28 state pages from one template, and my own SVG maps.',
  tags: ['WordPress', 'PHP', 'SVG maps', 'CSS animation', 'Local SEO', 'GA4 & Search Console'],
  description:
    'UES collects and recycles used oil and other automotive waste across much of the United States. I audited the site, built the SEO roadmap, and am rebuilding it page by page, including the homepage, locations page, service pages, state pages and custom maps.',
  pageDescription:
    'Universal Environmental Services case study: the homepage rebuild, a locations page with all 52 facilities, 28 state pages generated from one template, hand-built SVG maps, and the SEO program behind them.',
  pageTitle: 'Universal Environmental Services case study | Manny Pachano',
  facts: [
    { label: 'Live so far', value: 'Homepage, locations page, hazardous waste, universal waste, used oil pickup and Georgia' },
    { label: 'Awaiting sign-off', value: 'The remaining 27 state pages' },
  ],
  hero: {
    src: `${uesImages}/after-first.webp`,
    width: 1920,
    height: 1200,
    alt: 'The first screen of the new UES homepage: black header and hero with the headline "Used oil collection and recycling across 28 states", a Request a pickup button, a Call button and a photo of the re-refinery.',
  },
  compare: {
    labelA: 'Before',
    labelB: 'After',
    a: `${uesImages}/before-first.webp`,
    b: `${uesImages}/after-first.webp`,
    width: 1920,
    height: 1200,
    alt: 'The old UES homepage: a full-width photo of the plant with a "Call us" phone number over it, and a two-tone headline band below.',
  },
  heroCaption:
    'The first screen before and after. Drag the handle. The old page opened with a photo and a phone number; the new one opens with what the company does, where, and two ways to get a pickup.',
  highlights: [
    { value: '28', label: 'State pages built from a shared PHP template' },
    { value: '52', label: 'Facilities plotted on custom maps' },
    { value: '46 s', label: 'CSS timeline behind the truck animation' },
    { value: 'Byte-identical', label: 'HTML checks kept public pages unchanged before sign-off' },
  ],
  overviewTitle: 'About the project',
  overview: [
    'UES collects used oil, filters, antifreeze and oily water from more than 35,000 businesses. Its network includes 52 facilities across 28 states, more than 400 trucks and a re-refinery in Peachtree City, Georgia.',
    'The old site made two important things harder to find than they should have been: whether UES served a customer\'s area and what happened after the waste was picked up.',
    'I started with a site audit and four-month SEO roadmap, then connected Google Analytics 4 and Search Console so the work could be measured. From there, I began rebuilding the site around clearer service information, local coverage and stronger paths to request a pickup.',
    'The homepage and service pages use custom WordPress templates. The state pages are generated from shared facility and service data, so addresses, maps and coverage information can be maintained in one place.',
    'I also replaced the old map plugin with custom inline SVG maps built from US Census boundary files. A Python script generates the geography, while the site data supplies the facilities, labels and state coverage.',
    'All work is developed behind a preview gate on the live site. Before anything goes public, I compare the rendered HTML, verify file hashes and test the maps and mobile layouts with Playwright.',
  ],
  walkthroughIntro:
    'The homepage was rebuilt around the questions a potential customer is most likely to have: what UES collects, whether service is available nearby, what happens after pickup and how to get started.',
  sections: [
    {
      title: 'Header and hero',
      caption:
        'The first screen tells visitors what UES does, where it operates and how to request service. Customers can submit a pickup request or call directly.',
      alt: 'UES header and hero with the headline "Used oil collection and recycling across 28 states", a Request a pickup button, a Call button and a photo of the re-refinery.',
      src: `${uesImages}/01-hero.webp`,
      width: 1600,
      height: 690,
    },
    {
      title: 'The journey section',
      caption:
        'As the visitor scrolls, a drop of oil moves from the customer\'s shop to a UES facility, then to the re-refinery and finally into new base oil. The visitor controls the pace by scrolling.',
      alt: 'Recording of the journey section: as the page scrolls, a yellow oil drop moves along a curved path from a shop icon past a truck and a facility to a re-refinery and a bottle of new base oil, and the caption below changes from step 1 of 5 to step 5 of 5.',
      src: `${uesImages}/02-journey.webp`,
      video: { mp4: '/videos/ues-journey.mp4', webm: '/videos/ues-journey.webm' },
      width: 1600,
      height: 848,
    },
    {
      title: 'The counter and truck animation',
      caption:
        'The numbers establish the scale of the operation. Below them, a CSS animation shows the truck moving through pickup, unloading, transport and re-refining. The animation switches off automatically for visitors who prefer reduced motion.',
      alt: 'Recording of the black counter bar: a yellow number of gallons ticking upward next to a line drawing of a tanker truck moving between shops, a UES facility and the re-refinery.',
      src: `${uesImages}/03-counter.webp`,
      video: { mp4: '/videos/ues-truck.mp4', webm: '/videos/ues-truck.webm' },
      width: 1600,
      height: 172,
    },
    {
      title: 'Services',
      caption:
        'The nine main services are easy to scan and each links to its own page. A separate prompt helps customers who aren\'t sure how their waste should be classified.',
      alt: 'A grid of nine service cards (used oil pickup, used filter collection, oily wastewater, hazardous waste, vacuum services, spent absorbents, parts washer service, fluorescent bulbs, spent antifreeze) and a black bar that says "Not sure what category your waste falls into?".',
      src: `${uesImages}/04-services.webp`,
      width: 1600,
      height: 1250,
    },
    {
      title: 'What happens after you call',
      caption:
        'The process is reduced to four clear steps, from telling UES what needs to be collected through receiving the service receipt.',
      alt: 'Four numbered steps in a row under the heading "Four steps, start to finish".',
      src: `${uesImages}/05-four-steps.webp`,
      width: 1600,
      height: 460,
    },
    {
      title: 'Compliance',
      caption:
        'Receipts, service history, safety data sheets, insurance and industry memberships are brought together so customers can quickly see what documentation they\'ll have after a pickup.',
      alt: 'A checklist of compliance points next to an illustration of a UES service receipt.',
      src: `${uesImages}/06-compliance.webp`,
      width: 3200,
      height: 1572,
    },
    {
      title: 'Re-refining',
      caption:
        'This section explains what happens to collected oil after it leaves the customer and how it becomes new base oil at the Peachtree City re-refinery.',
      alt: 'A dark section titled "We re-refine what we collect" with a yellow card showing 50-85% less energy and 1 re-refinery.',
      src: `${uesImages}/07-re-refinery.webp`,
      width: 1600,
      height: 474,
    },
    {
      title: 'Service areas',
      caption:
        'The custom US map shows where UES operates and where its facilities are located. Visitors can open facility details from the map or go directly to their state page.',
      alt: 'A US map with the served states shaded, yellow pins for every facility, a legend, and a two-column list of the 28 states.',
      src: `${uesImages}/08-find-your-state.webp`,
      width: 1600,
      height: 930,
    },
    {
      title: 'Customer quotes',
      caption: 'Comments from customers add local proof from businesses already using UES collection routes.',
      alt: 'Three customer quotes in cards with a yellow left border, under the heading "Customers who know their drivers by name".',
      src: `${uesImages}/09-reviews.webp`,
      width: 1600,
      height: 430,
    },
    {
      title: 'Environmental program',
      caption: 'A short introduction explains the broader environmental program and links to the full page for visitors who want more detail.',
      alt: 'A section titled "Safety built into every operation" with a paragraph, a button and a photo of storage tanks.',
      src: `${uesImages}/10-program.webp`,
      width: 1600,
      height: 450,
    },
    {
      title: 'Pickup request',
      caption:
        'The page ends with a short form that asks for the information the dispatcher needs. The phone number sits alongside it for customers who would rather call.',
      alt: 'A dark section with a pickup request form on the right and a phone number on the left, above the site footer.',
      src: `${uesImages}/11-form-footer.webp`,
      width: 1600,
      height: 1460,
    },
  ],
  galleries: [
    {
      title: 'The locations page',
      intro:
        'The old locations page relied on a plugin map and copy that still said UES operated in 25 states. I rebuilt it around the information someone looking for local service actually needs.',
      columns: 2,
      items: [
        {
          src: `${uesImages}/loc-01-hero.webp`,
          width: 1600,
          height: 740,
          alt: 'The top of the locations page: the headline "Locations and service areas across 28 states", two buttons, a photo of the plant and the yellow numbers strip.',
          caption: 'The top of the page: the headline, the two buttons and the numbers strip.',
        },
        {
          src: `${uesImages}/loc-02-map.webp`,
          width: 2360,
          height: 1744,
          alt: 'The Find UES service in your state section: the US map with 52 pins and a legend beside a two-column list of states, and a black bar that says "Not sure if we reach you?".',
          caption: 'The custom US map appears near the top of the page and shows current service coverage and facility locations. Visitors can choose their state directly from the page or open a facility on the map.',
        },
        {
          src: `${uesImages}/loc-03-scroller.webp`,
          width: 3200,
          height: 1396,
          alt: 'The 52 UES locations section: an intro paragraph, previous and next arrows, and a horizontal row of facility cards with the state, the city, the facility type, the street address, the phone number and a link to the state page.',
          caption: 'All UES facilities are also available as cards with the city, facility type, address, phone number and relevant state page. The cards use the same source data as the maps and state pages, which keeps the information consistent across the site.',
        },
        {
          src: `${uesImages}/loc-04-routes.webp`,
          width: 1600,
          height: 480,
          alt: 'The How our collection routes work section: three numbered steps.',
          caption: 'A short section below explains how collection routes work and why a customer doesn\'t need a facility in their own city to receive service.',
        },
      ],
    },
    {
      title: 'State pages',
      intro:
        'UES serves 28 states, and each now has a dedicated page built from the same underlying system. The pages include a local introduction, nearby facilities and addresses, a state map, available services, common questions and the pickup form. States without a UES facility explain which nearby facility handles their service area. Georgia is live on the new system. The remaining state pages are built and waiting for client approval.',
      columns: 2,
      items: [
        {
          src: `${uesImages}/ga-01-hero.webp`,
          width: 1600,
          height: 700,
          alt: 'The top of the Georgia page: the headline "Used oil collection in Georgia", an on-this-page list and the yellow numbers strip.',
          caption: 'The top of the Georgia page: the state in the headline, a local introduction and an on-this-page list.',
        },
        {
          src: `${uesImages}/ga-02-facilities.webp`,
          width: 2360,
          height: 1526,
          alt: 'The Find your local facility section on the Georgia page: the state map with five pins next to five address cards.',
          caption: 'Facility cards and map pins are generated from the same data, keeping addresses and locations in sync.',
        },
        {
          src: `${uesImages}/ga-03-services.webp`,
          width: 1600,
          height: 590,
          alt: 'The What UES collects section on the Georgia page: a list of all nine services with links, next to a photo of the plant.',
          caption: 'Each state page includes the services available through UES and links visitors to the full service pages for more information.',
        },
        {
          src: `${uesImages}/ga-04-questions.webp`,
          width: 1600,
          height: 440,
          alt: 'The Common questions section on the Georgia page with four short questions and answers.',
          caption: 'Short answers cover the questions customers are likely to have before requesting service.',
        },
      ],
    },
    {
      title: 'The maps',
      intro:
        'The site\'s old mapping plugin has been replaced with custom inline SVG maps built from US Census cartographic boundary files. A Python script using pyshp and shapely converts the geographic data into paths that can be rendered directly by WordPress. Facility information is then added from the same data used throughout the state and locations pages. Pins open facility details on hover or keyboard focus. Headquarters and processing facilities use distinct markers, labels remain readable over state borders, and leader lines handle crowded areas along the East Coast. Because the maps are rendered directly on the page, they don\'t require a third-party mapping plugin or JavaScript library.',
      columns: 2,
      items: [
        {
          src: `${uesImages}/map-us.webp`,
          width: 1256,
          height: 924,
          alt: 'The US map: 28 served states shaded, 52 yellow pins, leader lines to the labels for New Jersey, Delaware and Maryland, a legend, and the popup for the Peachtree City headquarters open next to its pin.',
          caption: 'The US map with the popup for the Peachtree City headquarters open.',
        },
        {
          src: `${uesImages}/map-georgia.webp`,
          width: 1200,
          height: 1030,
          alt: 'The Georgia map: five pins with city labels, the headquarters pin at Peachtree City with a pulse ring, a diamond marker at Tyrone, and a legend.',
          caption: 'The Georgia map with the headquarters pin at Peachtree City and the diamond marker for the Tyrone processing facility.',
        },
      ],
    },
    {
      title: 'Other pages on the same system',
      columns: 2,
      items: [
        {
          src: `${uesImages}/page-hazardous-waste.webp`,
          width: 1600,
          height: 1000,
          alt: 'The hazardous waste page: the headline "Hazardous waste removal and disposal for businesses", an on-this-page list, and the yellow numbers strip.',
          caption: 'The hazardous waste page uses the same page structure while giving a longer service topic room for its own navigation and supporting information.',
        },
        {
          src: `${uesImages}/uop-01-hero.webp`,
          width: 1600,
          height: 900,
          alt: 'The used oil pickup page: the headline "Used oil pickup and disposal for businesses in 28 states", an on-this-page list and the yellow numbers strip.',
          caption: 'The main used oil service page explains collection and disposal, then connects visitors to local coverage through the US service map.',
        },
      ],
    },
    {
      title: 'The locations page before and after',
      columns: 2,
      items: [
        {
          src: `${uesImages}/before-locations.webp`,
          width: 1600,
          height: 1650,
          alt: 'The old locations page: a truck photo with "Call us" and a phone number over it, then a "Geographic service areas" heading with a gray plugin map and a paragraph.',
          caption: 'Before: the old page opened with a truck photo and phone number, followed by a plugin map and outdated coverage information.',
        },
        {
          src: `${uesImages}/after-locations.webp`,
          width: 1600,
          height: 1690,
          alt: 'The new locations page: the headline, the numbers strip, and the US map with the state list.',
          caption: 'After: the new page puts service coverage first, shows every facility on the custom map and gives visitors direct access to the state pages.',
        },
      ],
    },
  ],
  phonesIntro:
    'The mobile layouts were designed separately rather than simply shrinking the desktop version. Buttons become full width, the journey changes to a vertical path, animated sections stack, and map pins become larger targets for touch. The map keeps its legend and facility information without forcing visitors into a separate mobile experience.',
  phones: [
    {
      src: `${uesImages}/mobile-hero.webp`,
      width: 780,
      height: 1690,
      alt: 'The new UES homepage on a phone: headline, two full-width buttons, the reply promise and the plant photo.',
      caption: 'The first screen.',
    },
    {
      src: `${uesImages}/mobile-journey.webp`,
      width: 780,
      height: 1690,
      alt: 'The journey section on a phone: the path runs top to bottom from the shop to new base oil.',
      caption: 'The journey section.',
    },
    {
      src: `${uesImages}/mobile-counter.webp`,
      width: 780,
      height: 1690,
      alt: 'The yellow numbers and the black counter bar with the truck on a phone.',
      caption: 'The numbers and the counter bar.',
    },
    {
      src: `${uesImages}/mobile-map.webp`,
      width: 780,
      height: 1690,
      alt: 'The US map with its legend and the start of the state list on a phone.',
      caption: 'The US map.',
    },
  ],
  phonesB: {
    intro: 'For comparison, the old mobile homepage opened with a photo and phone number, while the services below used the same magnifying-glass icon for every category.',
    items: [
      {
        src: `${uesImages}/before-mobile-hero.webp`,
        width: 480,
        height: 1040,
        alt: 'The old UES homepage on a phone: a photo of storage tanks with "Call us" and a phone number over it.',
        caption: 'Before: the first screen.',
      },
      {
        src: `${uesImages}/before-mobile-services.webp`,
        width: 480,
        height: 1040,
        alt: 'The old UES services list on a phone: numbered magnifying-glass icons with short descriptions.',
        caption: 'Before: the services list.',
      },
    ],
  },
  details: {
    design: [
      'The main goal was to make the site easier to understand quickly, especially for someone checking it from a phone at a shop or facility.',
      'Black, white and the existing UES yellow carry the visual system. Large type and strong contrast keep important information easy to scan.',
      'Motion is used when it helps explain something, such as following the path of collected oil or showing the pickup process. Reduced-motion preferences are respected throughout.',
      'The maps were designed for actual use, with readable labels, clear facility markers and special handling for areas where locations sit close together.',
    ],
    build: [
      'The site runs on a WordPress child theme with custom templates for the homepage, locations, services and state pages.',
      'Shared data drives the state copy, facility lists and maps, which avoids maintaining the same information separately across dozens of pages.',
      'The geographic outlines come from US Census boundary files and are converted with Python into inline SVG paths. Map interactions are handled without a JavaScript mapping library, and the truck sequence runs entirely in CSS.',
      'Every live change stays behind a preview gate until approval. I use normalized HTML diffs to check the public page, SHA-256 hashes during file moves and Playwright to test the maps and mobile layouts before handoff.',
    ],
    marketing: [
      'The work began with a technical audit and four-month SEO roadmap.',
      'The SEO program covers the new service and state pages, local search across UES\'s service area, Google Business Profile verification and cleanup, and copy based on how customers search for waste pickup services in their area.',
      'Google Analytics 4 and Search Console track performance and leads, with reporting broken down by location. I\'ll add results to the case study once the rebuilt state pages have been live long enough to show a meaningful trend.',
    ],
  },
  tools: ['WordPress', 'PHP', 'HTML & CSS', 'JavaScript', 'SVG', 'Python', 'Playwright', 'Git', 'WPForms', 'Google Business Profile', 'Google Analytics 4', 'Search Console'],
  ...backToProjects,
};

const clox: Walkthrough = {
  slug: 'clox',
  title: 'Clox',
  eyebrow: 'Case study',
  client: 'Clox (my own company)',
  kind: 'SaaS product',
  role: 'Founder: product, design, front end and marketing',
  year: '2026 to present',
  liveUrl: 'https://getclox.com',
  liveLabel: 'Visit getclox.com',
  summary:
    'A time tracking product I built for small trades crews. Workers clock in from their phones, managers review and approve hours, and approved time can be exported to payroll.',
  tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Postgres', 'Stripe'],
  description:
    'A time tracking product I built for small trades crews. Workers clock in from their phones, managers review and approve hours, and approved time can be exported to payroll. I run the company and built the product end to end.',
  pageDescription:
    'Clox case study: a Next.js and TypeScript time tracking application with offline punches, Supabase, payroll exports, role-based access and 365 tests.',
  facts: [
    { label: 'Scale', value: '481 TypeScript files, 19 app routes, 55 API routes, 365 tests' },
    { label: 'Screens', value: 'The live app and the crew app, signed in to the demo organization' },
  ],
  hero: {
    src: `${cloxImages}/app-first-screen.webp`,
    width: 1920,
    height: 1200,
    alt: 'The Clox Today screen: the current time on a paper background, a project field, a note field and a large Clock in button.',
  },
  heroCaption:
    'The main clock-in screen. The current time, project, note and Clock in action are all visible without scrolling.',
  highlights: [
    { value: 'Works offline', label: 'Punches are stored on the device and synced when the connection returns' },
    { value: '365 tests', label: '39 test suites covering overtime, pay periods, timezones, geofences, imports and payroll exports' },
    { value: '19 app routes, 55 API routes', label: 'Plus Stripe billing, four payroll integrations and four scheduled jobs' },
  ],
  overviewTitle: 'About the project',
  overview: [
    'Clox is a time tracking product for small trades crews. Workers clock in from their phones, managers review hours and approve the week, and approved time can be exported to payroll. I founded the company and built the product end to end.',
    'The main technical constraint is that workers are often using the app on a job site with a weak connection. At the same time, the hours being recorded feed into payroll. The interface therefore has to handle offline use without losing or duplicating punches.',
    'When the phone is offline, punches are stored in an IndexedDB queue. Each one gets a UUID on the device, which is also used as the server-side idempotency key, so a punch that replays after a successful sync is ignored rather than written twice. When the connection returns, the queue uses the same server action as the normal online path. Clock in, clock out, breaks and project changes all use the same system.',
    'Failed punches are handled according to the type of failure. Temporary errors are retried, invalid punches can be discarded, and anything that needs a human decision is held for review. Unknown responses are held as well rather than silently dropping the punch.',
    'As with <a class="text-link" href="/web-developer-project-keyset">Keyset</a>, the business logic lives in plain modules rather than being tied to the framework. The 365 tests cover overtime, pay periods, timezone boundaries, geofences, CSV imports and payroll exports, with most of the logic tested without a browser.',
  ],
  walkthroughIntro: 'The application, screen by screen. These are the live app, signed in to the demo organization.',
  sections: [
    {
      title: 'Clocking in',
      caption:
        'The primary action is the Clock in button. Workers can optionally select a project and add a note before starting.',
      alt: 'The Clox Today screen, not clocked in: the time, a project picker, a note field and a Clock in button, with the week total below.',
      src: `${cloxImages}/app-01-today.webp`,
      width: 1600,
      height: 1000,
    },
    {
      title: 'The same screen, on shift',
      caption:
        'After clocking in, the interface switches to a dark state and the primary action becomes Clock out. The timer uses the server-recorded punch rather than the time the page was opened.',
      alt: 'The Clox Today screen while clocked in: the same layout inverted to dark, a running timer and a coral Clock out button.',
      src: `${cloxImages}/app-01-today-onshift.webp`,
      width: 1600,
      height: 1000,
    },
    {
      title: 'The week',
      caption:
        'The timesheet shows daily hours and individual shifts, including projects, break deductions and pay. Forgotten clock-outs are flagged so they can be corrected before approval.',
      alt: 'The Clox timesheet: a week of days with hours, and a list of shifts with projects, break deductions and pay.',
      src: `${cloxImages}/app-02-timesheet.webp`,
      width: 1600,
      height: 1000,
    },
    {
      title: 'Building the schedule',
      caption:
        'People are listed down the side and days run across the top. Shifts can be dragged between people and days, clicked to edit, or added to an empty cell. Dragging is built on pointer events rather than HTML5 drag, so touch behaves the same as a mouse, and the same moves work from the keyboard. Moving a shift preserves its duration across overnight and daylight saving changes.',
      alt: 'The Clox schedule board: eight employees down the side, seven days across the top, and shift chips showing times and project names.',
      src: `${cloxImages}/app-03-schedule-board.webp`,
      width: 1600,
      height: 1000,
    },
    {
      title: 'The approvals queue',
      caption:
        'The team screen shows who is working, weekly hours and items waiting for approval. Shifts can be approved individually or in bulk.',
      alt: 'The Clox Team page: nobody on shift, 338 hours this week, and a pending approvals panel with time off and shift groups.',
      src: `${cloxImages}/app-04-team.webp`,
      width: 1600,
      height: 1000,
    },
    {
      title: 'Where the punches happened',
      caption:
        'The map shows where clock-ins happened during the week. Clox records location at the time of the punch rather than continuously tracking workers, and punches outside an assigned worksite are refused.',
      alt: 'The Clox map view: 44 located punches for one week, a day-grouped list on the left and a map of New York with clustered markers.',
      src: `${cloxImages}/app-05-team-map.webp`,
      width: 1600,
      height: 1000,
    },
    {
      title: 'Reports',
      caption:
        'Reports show total hours, estimated payroll and overtime by employee. Hours can also be grouped by project, client and task, then exported to ADP, Paychex, Gusto or QuickBooks.',
      alt: 'The Clox reports page: 338 hours 49 minutes, $10,905 estimated payroll, and per-employee bars with overtime in a second color.',
      src: `${cloxImages}/app-08-reports.webp`,
      width: 1600,
      height: 1000,
    },
    {
      title: 'Getting last year in',
      caption:
        'The import tool accepts pasted spreadsheet data or CSV files. Existing people and projects are matched during the import, and nothing is written until the user confirms the preview.',
      alt: 'The Clox import page: a column specification table with example values, a CSV template download and a paste box.',
      src: `${cloxImages}/app-12-import.webp`,
      width: 1600,
      height: 1000,
    },
    {
      title: 'The audit log',
      caption:
        'The audit log records changes to rates, approvals, roles, worksites and shifts, including the values before and after each change. It can be filtered and exported to CSV.',
      alt: 'The Clox audit log: 140 entries with kiosk events and shift edits showing their before and after values.',
      src: `${cloxImages}/app-13-audit.webp`,
      width: 1600,
      height: 1000,
    },
  ],
  galleries: [
    {
      title: 'The rest of the application',
      intro:
        'The rest of the application covers scheduling, projects, worksites, kiosk mode and billing. Access is controlled through eleven capabilities with role defaults and per-person overrides.',
      columns: 2,
      items: [
        {
          src: `${cloxImages}/app-03-schedule-month.webp`,
          width: 1600,
          height: 1000,
          alt: 'The Clox schedule month view: weeks as columns, each cell showing a person\'s shift count and hours.',
          caption: 'A month view of the schedule, with shift counts and total hours for each person.',
        },
        {
          src: `${cloxImages}/app-06-projects.webp`,
          width: 1600,
          height: 1000,
          alt: 'The Clox projects page: six jobs with member and task counts and a bar of hours against each.',
          caption: 'Hours by job. Assigning a shift to a project makes those hours available for job costing.',
        },
        {
          src: `${cloxImages}/app-07-worksites.webp`,
          width: 1600,
          height: 1000,
          alt: 'The Clox worksites page: three named sites with their radius and the number of employees assigned.',
          caption: 'Named clock-in zones with a radius and assigned employees.',
        },
        {
          src: `${cloxImages}/app-10-settings.webp`,
          width: 1600,
          height: 1000,
          alt: 'The Clox settings page: profile, time and pay, notifications, organization, kiosk and integrations tabs.',
          caption: 'Organization settings, integrations and kiosk mode for shared tablets.',
        },
        {
          src: `${cloxImages}/app-11-settings-billing.webp`,
          width: 1600,
          height: 1000,
          alt: 'The Clox billing page: seats to pay for, a promo code field, and monthly and annual plan cards.',
          caption: 'Stripe billing with seat counts, promo codes and monthly or annual plans.',
        },
      ],
    },
    {
      title: 'The marketing site',
      intro:
        'The marketing site has a different job: explain the product and get crew owners into a trial. It uses the same stack as the application, with the phones, dashboards and map built in HTML, CSS and SVG rather than image files.',
      columns: 3,
      items: [
        {
          src: `${cloxImages}/01-hero.webp`,
          width: 1600,
          height: 905,
          alt: 'getclox.com hero: "Stop chasing paper timecards", a trial button, app store badges and two phones showing the clock-in screen.',
          caption: 'The homepage leads with the problem and a single primary action. The phone screens are built with CSS rather than screenshots.',
        },
        {
          src: `${cloxImages}/03-features.webp`,
          width: 1600,
          height: 880,
          alt: 'A grid of six feature cards under the heading "Everything you need to run an hourly crew".',
          caption: 'Six feature sections explain the main parts of the product without relying on icons or decorative graphics.',
        },
        {
          src: `${cloxImages}/05-product-tour.webp`,
          width: 1600,
          height: 1726,
          alt: 'Four alternating rows of dashboard screens: reports, team, schedule and map.',
          caption: 'The product tour uses dashboard screens built directly in the page rather than captured images.',
        },
        {
          src: `${cloxImages}/08-pricing.webp`,
          width: 1600,
          height: 463,
          alt: 'A pricing section showing $29 per month with a short explanation.',
          caption: 'One price, with the full feature set included.',
        },
        {
          src: `${cloxImages}/page-electricians.webp`,
          width: 1600,
          height: 1000,
          alt: 'The electricians page: "Time tracking built for electrical contractors".',
          caption: 'One of twenty trade-specific pages built around search demand for that industry.',
        },
        {
          src: `${cloxImages}/page-vs-clockshark.webp`,
          width: 1600,
          height: 1000,
          alt: 'The Clox vs ClockShark comparison page with a feature and price table.',
          caption: 'One of five comparison pages, using a straightforward price and feature table.',
        },
      ],
    },
  ],
  phonesIntro:
    'The crew app is built with Expo and React Native and shares the same Supabase project as the web app.',
  phones: [
    {
      src: `${cloxImages}/app-native-clock.webp`,
      width: 1170,
      height: 2532,
      alt: 'The Clox app clock screen, not clocked in, with a large Clock in button and the line All punches synced below it.',
      caption: 'The clock screen when a worker is not on shift. The status below the button confirms that all offline punches have synced.',
    },
    {
      src: `${cloxImages}/app-native-clock-project.webp`,
      width: 1170,
      height: 2532,
      alt: 'The same screen with a project and a task chosen before clocking in.',
      caption: 'Workers can select a project and task before clocking in. Organizations can make this required.',
    },
    {
      src: `${cloxImages}/app-native-board.webp`,
      width: 1170,
      height: 2532,
      alt: 'The Clox app schedule board on a phone, with the instruction to hold a shift then drag it onto a day to move it.',
      caption: 'The schedule board also works on the phone. Hold a shift and drag it onto another day to move it.',
    },
    {
      src: `${cloxImages}/app-native-map.webp`,
      width: 1170,
      height: 2532,
      alt: 'The Clox app map of punches for a month, showing 124 located punches over New York.',
      caption: 'Punch locations for the month. Clox records location for punches rather than tracking workers between them.',
    },
    {
      src: `${cloxImages}/app-native-approvals.webp`,
      width: 1170,
      height: 2532,
      alt: 'The Clox app approvals screen listing 45 timesheets, each with edit, reject and approve.',
      caption: 'Timesheets waiting for review, with edit, reject and approve actions.',
    },
  ],
  details: {
    design: [
      'Paper, ink and one clay accent. Color is reserved for primary actions and overtime.',
      'The app switches to a dark state while a worker is on shift, making the current state easy to recognize at a glance.',
      'Navigation is based on eleven capabilities, with defaults by role and overrides for individual people.',
      'Kiosk mode supports shared tablets on site. Workers use a PIN to identify themselves and a manager PIN to exit.',
      "Hours use tabular numerals so columns line up, and screens identify the organization's timezone.",
    ],
    build: [
      'Next.js 16 App Router, React 19 and TypeScript in strict mode, with Tailwind and shadcn/ui. Server components handle reads and server actions handle writes across 35 action modules.',
      'Supabase Auth uses the SSR client with cookies refreshed in middleware. Authentication resolves once per render with React cache, using getUser rather than getSession, because getSession reads the cookie locally and can come back empty in the moment after sign-in.',
      'Postgres runs on Supabase through Drizzle, with database migrations stored in the repository.',
      'The offline queue uses IndexedDB directly. Client timestamps are validated so they cannot be in the future or more than one day old.',
      '365 tests across 39 Vitest suites, with most business logic tested independently of the framework and browser.',
      'Payroll exports support ADP, Paychex, Gusto and QuickBooks, along with CSV and signed PDF. Spreadsheet formula characters are neutralized in exported text fields, so a value like a display name cannot execute when the file is opened.',
      'Stripe for billing, Upstash for rate limiting, Sentry for errors, PostHog for product analytics, Resend for transactional email, and Leaflet for maps.',
      'Four scheduled jobs handle abandoned shifts, Stripe reconciliation, trial reminders and weekly summaries.',
      'The crew apps use Expo and React Native and share the same Supabase project, with biometric unlock, camera, location, push notifications and over-the-air updates.',
    ],
    marketing: [
      'Twenty trade pages, five comparison pages, documentation and a blog, all built from the same components as the homepage and informed by search data.',
      'App Store listings, directory profiles and a Product Hunt launch.',
      'I also handle positioning, pricing, onboarding, SEO and support. Building my own product gives me experience across the same parts of a project I handle for clients.',
    ],
  },
  tools: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Postgres', 'Drizzle', 'Tailwind', 'Stripe', 'Expo', 'Vitest'],
  ...backToProjects,
};

const landscaperTemplates: Walkthrough = {
  slug: 'landscaper-templates',
  title: 'Landscaper Templates',
  eyebrow: 'Case study',
  client: 'My own project, for landscaping businesses',
  kind: 'Template system',
  role: 'Design and development',
  year: '2026',
  liveUrl: 'https://landscapertemplates.netlify.app',
  liveLabel: 'See the templates',
  summary:
    'Three ready-to-customize website templates for landscaping companies. Intentionally generic, so a business owner can see the layout, the flow and the speed before I make it theirs.',
  tags: ['HTML & CSS', 'JavaScript', 'Netlify', 'Templates'],
  description:
    'Three complete landscaping websites built as a sales tool. A business owner picks the layout they like, and I customize it with their name, photos and service area.',
  pageDescription:
    'Landscaper Templates case study: three landscaping website templates shown section by section and on a phone, and how the switcher and the customization work.',
  hero: {
    src: `${landscaperImages}/first-screen.webp`,
    width: 1920,
    height: 1200,
    alt: 'The first screen of template 1: a garden path photo with the headline "Beautiful landscapes, made simple", two buttons and a phone number.',
  },
  heroCaption: 'The first screen of template 1 at 1680 pixels wide. A bar at the bottom of the live page switches between the three templates and stays visible while you scroll.',
  highlights: [
    { value: 'Complete sites', label: 'Three finished websites to compare, not mockups or wireframes' },
    { value: 'One switcher', label: 'Visitors move between templates without leaving the page' },
    { value: 'Free customization', label: 'Included when a business owner chooses a template' },
  ],
  overviewTitle: 'About the project',
  overview: [
    'Most landscaping business owners want to see what their website would look like before they commit to anything. Instead of showing mockups, I built three complete landscaping websites and put them behind a switcher that stays visible while you scroll, so an owner can compare them in a minute.',
    'All three cover the same ground: a headline that says what the company does and where, services, a gallery of past work, reasons to choose the company, customer reviews and a quote request. Each one orders and styles it differently, and each adds a section of its own (seasonal tips in one, a blog and a team page in another, service areas in the third), so an owner can pick the one that fits how they sell.',
    'The templates are generic on purpose. The text and photos are placeholders. Once a business owner picks a template, I replace the placeholder content with their business name, photos and service area. That customization is free.',
    'The templates are hand-coded HTML, CSS and JavaScript hosted on Netlify. Each finished site loads quickly, costs nothing to host and has no plugins or page builder to maintain.',
  ],
  walkthroughIntro: 'Template 1, top to bottom. Templates 2 and 3 cover the same ground in a different order and style.',
  sections: [
    {
      title: 'Top bar, header and hero',
      caption:
        'A thin bar with the phone, email and city, then the logo, six links and a quote button. The hero is one photo, one headline, two buttons and a call-today box, so the number is on screen before anyone scrolls.',
      alt: 'Template 1 hero: a garden path photo, the headline "Beautiful landscapes, made simple", About us and Get a free quote buttons and a Call today box.',
      src: `${landscaperImages}/01-hero.webp`,
      width: 1600,
      height: 819,
    },
    {
      title: 'About, with three numbers',
      caption:
        'A photo, two short paragraphs and three numbers (years in business, projects completed, local and family owned). The numbers are placeholders the owner replaces with their own.',
      alt: 'An about section with a garden photo, two paragraphs and the numbers 10+ years, 500+ projects and 100% client rating.',
      src: `${landscaperImages}/02-about.webp`,
      width: 1600,
      height: 883,
    },
    {
      title: 'Four services',
      caption:
        'Landscape design, installation, lawn maintenance and hardscapes as four photo cards, each with one line of text. The owner\'s real services and photos go here.',
      alt: 'Four service cards with photos: landscape design, installation, lawn maintenance, hardscapes.',
      src: `${landscaperImages}/03-services.webp`,
      width: 1600,
      height: 816,
    },
    {
      title: 'One team, start to finish',
      caption:
        'Three photos, then six things the company handles, each with an icon and one sentence. This is where an owner lists what they actually do.',
      alt: 'Three landscaping photos above a list of six services with icons under the heading "One team. Start to finish."',
      src: `${landscaperImages}/04-one-team.webp`,
      width: 1600,
      height: 1002,
    },
    {
      title: 'Banner and seasonal tips',
      caption:
        'A green banner with the quote button, then four cards, one per season, with what the yard needs. The cards give the site something to say all year and give search engines something to rank.',
      alt: 'A green banner reading "Let\'s turn your yard into a place you love" above four seasonal cards: spring, summer, fall, winter.',
      src: `${landscaperImages}/05-banner-tips.webp`,
      width: 1600,
      height: 980,
    },
    {
      title: 'Portfolio',
      caption: 'Four project photos in a row. The owner sends their own and I swap them in.',
      alt: 'A row of four landscaping project photos under the heading "A portfolio of transformed properties".',
      src: `${landscaperImages}/06-gallery.webp`,
      width: 1600,
      height: 630,
    },
    {
      title: 'Reviews',
      caption: 'Three short quotes on a cream background. Placeholders until the owner sends their real reviews.',
      alt: 'Three client quotes in cards under the heading "What our clients appreciate most".',
      src: `${landscaperImages}/07-testimonials.webp`,
      width: 1600,
      height: 616,
    },
    {
      title: 'Request a free quote',
      caption:
        'Phone, email, address and hours on the left, a short quote form on the right: name, phone, email, service, message. In the template the form is a placeholder; it is connected to the owner\'s email when the site is customized.',
      alt: 'A contact section with phone, email, address and hours next to a quote request form.',
      src: `${landscaperImages}/08-contact.webp`,
      width: 1600,
      height: 875,
    },
    {
      title: 'Call strip and footer',
      caption: 'The phone number one more time in a dark strip, then a footer with quick links, services and contact details.',
      alt: 'A dark strip with "Call today" and a phone number above a footer with links.',
      src: `${landscaperImages}/09-cta-footer.webp`,
      width: 1600,
      height: 690,
    },
  ],
  galleries: [
    {
      title: 'The three templates',
      intro: 'Three looks at the same business. Template 1 is classic with a serif headline, template 2 is bold with a boxed uppercase headline over a lawn photo, template 3 is centered and airy in green and cream.',
      columns: 3,
      items: [
        { src: `${landscaperImages}/template-1.webp`, width: 1600, height: 1000, alt: 'Template 1 first screen: garden path photo with a left-aligned serif headline.', caption: 'Template 1: classic.' },
        { src: `${landscaperImages}/template-2.webp`, width: 1600, height: 1000, alt: 'Template 2 first screen: a lawn photo with a white box holding a bold uppercase headline.', caption: 'Template 2: bold.' },
        { src: `${landscaperImages}/template-3.webp`, width: 1600, height: 1000, alt: 'Template 3 first screen: a garden photo with a centered headline and two buttons.', caption: 'Template 3: centered.' },
      ],
    },
  ],
  phonesIntro: 'The templates at phone width. One column, photos first, and a quote button on every screen.',
  phones: [
    { src: `${landscaperImages}/mobile-t1-hero.webp`, width: 1170, height: 2535, alt: 'Template 1 on a phone: the top bar, the logo, a garden photo and the headline with two buttons.', caption: 'Template 1. The photo fills the first screen, with the headline and the quote button over it.' },
    { src: `${landscaperImages}/mobile-t1-services.webp`, width: 1170, height: 2535, alt: 'The what we do section of template 1 on a phone: the heading, then the first service card, a landscape design photo with a learn more link.', caption: 'The service cards become one column, each photo full width.' },
    { src: `${landscaperImages}/mobile-t1-quote.webp`, width: 1170, height: 2535, alt: 'The get in touch section of template 1 on a phone: the heading, then phone, email, office address and opening hours listed above the quote form.', caption: 'Phone, email, address and hours come before the form, so calling is always the easier option.' },
    { src: `${landscaperImages}/mobile-t2-hero.webp`, width: 1170, height: 2535, alt: 'Template 2 on a phone: a boxed uppercase headline over a lawn photo with two stacked buttons.', caption: 'Template 2 on the same screen size. Same job, different look.' },
  ],
  details: {
    design: [
      'Three designs over the same content, so the owner compares layouts instead of imagining them.',
      'On a desktop the phone number sits in the top bar and in the hero. On every screen size it comes back in the call strip above the footer.',
      'Photos do the selling. The text is short and stays out of the way.',
      'Generic on purpose: no fake company story, just the structure an owner can picture themselves in.',
    ],
    build: [
      'Hand-coded HTML, CSS and JavaScript. No framework, no page builder, no plugins.',
      'The switcher is a fixed bar linking the three pages, so any template is one tap away at any point in the page.',
      'Sections fade in as they scroll into view, with a small IntersectionObserver script. The whole page is under 50 KB of HTML.',
      'Hosted free on Netlify. A finished client site costs nothing to run.',
    ],
  },
  tools: ['HTML & CSS', 'JavaScript', 'Netlify', 'Figma', 'Photoshop'],
  ...backToProjects,
};

const jonathanZalzman: Walkthrough = {
  slug: 'jonathan-zalzman',
  title: 'Jonathan Zalzman Guitar',
  eyebrow: 'Case study',
  client: 'Jonathan Zalzman (Suwanee, Georgia, US)',
  kind: 'Design and development',
  role: 'Design and development',
  year: '2026',
  liveUrl: 'https://jonathanzalzmanguitar.netlify.app',
  summary:
    'Lesson booking site for a working musician in Suwanee, Georgia: nine teaching styles, transparent pricing, and a free trial lesson button that follows you down the page.',
  tags: ['HTML & CSS', 'JavaScript', 'Netlify Forms', 'Local business'],
  description:
    'A website for a guitar teacher and working musician in Suwanee, Georgia. The goal of the site is to get visitors to book a free trial lesson.',
  pageDescription:
    'Jonathan Zalzman Guitar case study: the lesson booking site section by section and on a phone, and how the design and the booking form were built.',
  hero: {
    src: `${jonathanImages}/first-screen.webp`,
    width: 1920,
    height: 1200,
    alt: 'The first screen of jonathanzalzmanguitar.netlify.app: a dark page with the headline "Learn guitar from a working musician" in condensed orange and white type, a photo of Jonathan playing on stage, and a card listing what students are learning.',
  },
  heroCaption: 'The first screen at 1680 pixels wide.',
  highlights: [
    { value: 'Hand-coded', label: 'HTML, CSS and JavaScript, no page builder or plugins' },
    { value: 'Two audiences', label: 'Adult players and parents, each given their own section on one page' },
    { value: 'One booking form', label: 'Every call to action on the page leads to it' },
  ],
  overviewTitle: 'About the project',
  overview: [
    'Jonathan teaches guitar, bass and ukulele in Suwanee, Georgia and online, and he performs regularly. The site is built around that. The headline is "Learn guitar from a working musician", and the design and copy are meant to make that clear right away and then make booking a lesson easy.',
    'The design uses performance photos on a dark background so the site looks like a musician\'s site rather than a directory listing. The nine styles he teaches (rock and blues, funk, jazz and fusion, prog and shred, metal, theory and ear training, bass and ukulele, songwriting, improvisation) each have a short description. Three five-star reviews from students of different ages are placed where a parent or an adult beginner would be deciding.',
    'Pricing is shown on the page: the first lesson is free, then 30 or 60 minute lessons at a flat rate, with no registration fee, contract or subscription. The booking form asks for the instrument, experience level and whether the lessons are in person or online. Every call to action on the page links to the form, and his phone number and email are also shown.',
    'The site is hand-coded HTML, CSS and JavaScript hosted on Netlify. There is no page builder and there are no plugins to update.',
  ],
  walkthroughIntro: 'The page, top to bottom.',
  sections: [
    {
      title: 'Header and hero',
      caption:
        'A condensed headline in orange and white, a stage photo, and a card that lists what students are learning right now. The two buttons are the only two things a visitor can do: book a free trial or watch him play.',
      alt: 'Dark hero with the headline "Learn guitar from a working musician", a photo of Jonathan on stage and a card titled "What students are learning".',
      src: `${jonathanImages}/01-hero.webp`,
      width: 1600,
      height: 1121,
    },
    {
      title: 'Ticker and bio',
      caption:
        'A scrolling ticker with the bands and the numbers (10+ years on Atlanta stages, 3 albums on Spotify), then a light section with his story in his words, a photo and a credentials card. The light background gives the eye a rest after the dark hero.',
      alt: 'A scrolling strip of credentials above a cream section titled "I teach what I actually play" with a bio, a photo and a background card.',
      src: `${jonathanImages}/02-about.webp`,
      width: 1600,
      height: 1277,
    },
    {
      title: 'Nine styles',
      caption:
        'A three-by-three grid, each style in its own color with two lines of copy. Under it, a bar for the visitor whose style is not listed, with the trial button again.',
      alt: 'A grid of nine teaching styles in colored condensed type, and a bar reading "Don\'t see your style? Ask me."',
      src: `${jonathanImages}/03-styles.webp`,
      width: 1600,
      height: 1448,
    },
    {
      title: 'Quote and three steps',
      caption:
        'A full-width stage photo with one quote over it, then how lessons start: free trial lesson, build a plan, show up and play. Numbered 01, 02, 03.',
      alt: 'A photo band with the quote "The stuff I teach is the stuff I do every weekend on stage" above a three-step "How to start lessons" section.',
      src: `${jonathanImages}/04-divider-how.webp`,
      width: 1600,
      height: 1301,
    },
    {
      title: 'For parents',
      caption:
        'Three short answers for a parent deciding for a kid: a gentle start, progress you can see, somewhere to play. Parents are half the audience, so they get their own section.',
      alt: 'A cream section titled "Thinking about lessons for your kid?" with three short cards.',
      src: `${jonathanImages}/05-parents.webp`,
      width: 1600,
      height: 779,
    },
    {
      title: 'Pricing',
      caption:
        'Three cards: the free first lesson, 30 minutes and 60 minutes, each with what is included and a button. No registration fee, no contract, no subscription is stated above the cards.',
      alt: 'Three pricing cards: $0 trial lesson, $30 for 30 minutes, $50 for 60 minutes, each with a Book button.',
      src: `${jonathanImages}/06-pricing.webp`,
      width: 1600,
      height: 938,
    },
    {
      title: 'Student reviews',
      caption: 'Three five-star reviews from students of different ages, each with who they are (a parent, an adult beginner, a teenager).',
      alt: 'Three review cards with five stars under the heading "What students say".',
      src: `${jonathanImages}/07-quotes.webp`,
      width: 1600,
      height: 813,
    },
    {
      title: 'I play guitar for a living',
      caption:
        'A band photo and three links: Spotify, YouTube and his band Free Hat. It lets a visitor hear him play before booking a lesson.',
      alt: 'The section "I play guitar for a living" with a band photo and links to Spotify, YouTube and Free Hat.',
      src: `${jonathanImages}/08-band.webp`,
      width: 1600,
      height: 739,
    },
    {
      title: 'Common questions',
      caption:
        'Seven questions in an accordion: is my kid too young, I have not played in 20 years, do I need my own guitar, what happens if I miss a lesson. These are the questions that otherwise arrive one at a time by email.',
      alt: 'An accordion of seven common questions under the heading "Questions I get every week".',
      src: `${jonathanImages}/09-faq.webp`,
      width: 1600,
      height: 1146,
    },
    {
      title: 'Booking form and footer',
      caption:
        'The booking form asks for the instrument, the student age, the experience level, in person or online, the plan and the best times, so the first reply can already suggest a slot. Under it, an email link and a phone number for anyone who would rather reach him directly.',
      alt: 'The booking form under the heading "Book your free lesson", followed by the footer.',
      src: `${jonathanImages}/10-book-footer.webp`,
      width: 1600,
      height: 1730,
    },
  ],
  phonesIntro: 'The site on a phone, where most parents and students will find it.',
  phones: [
    { src: `${jonathanImages}/mobile-hero.webp`, width: 1170, height: 2535, alt: 'The Jonathan Zalzman homepage on a phone: the condensed headline, one paragraph and two buttons, with a fixed bar at the bottom.', caption: 'The headline still fills the screen, and the fixed bar keeps Book free trial and Call one tap away.' },
    { src: `${jonathanImages}/mobile-styles.webp`, width: 1170, height: 2535, alt: 'The teaching styles as one column of colored cards on a phone.', caption: 'The three-by-three grid of styles becomes one column, each style keeping its own color.' },
    { src: `${jonathanImages}/mobile-pricing.webp`, width: 1170, height: 2535, alt: 'The pricing section on a phone, starting with the free first lesson card.', caption: 'Pricing stacks, and the free first lesson comes first so the risk is gone before the prices appear.' },
    { src: `${jonathanImages}/mobile-booking.webp`, width: 1170, height: 2535, alt: 'The booking form on a phone with the fields stacked one per line.', caption: 'The booking form at phone width, one field per line, with the bar still sitting at the bottom.' },
  ],
  details: {
    design: [
      'Dark background, orange accent and condensed display type, so the site looks like a musician\'s site, not a tutoring directory.',
      'His own performance photos in every section. No stock photos.',
      'Proof sits between the price and the form: student reviews, then the band section, then the questions people actually ask.',
      'The trial lesson button is in the header, the hero, after the styles, after pricing and at the end. On phones it sits in a bar at the bottom of the screen.',
    ],
    build: [
      'Hand-coded HTML, CSS and JavaScript. No framework, no page builder, no plugins.',
      'The credentials ticker, the pulsing trial button and the rise-in on the hero are CSS animations. The whole page is about 75 KB of HTML.',
      'The booking form runs on Netlify Forms with a honeypot field. It asks for the student\'s age, instrument, experience, in-person or online, the plan, best times and goals.',
      'On phones, a fixed bar at the bottom keeps Book free trial and Call one tap away the whole way down.',
      'Hosted free on Netlify.',
    ],
  },
  tools: ['HTML & CSS', 'JavaScript', 'Netlify', 'Netlify Forms', 'Figma', 'Photoshop'],
  ...backToProjects,
};

const keyset: Walkthrough = {
  slug: 'keyset',
  title: 'Keyset',
  eyebrow: 'Case study',
  client: 'My own project. No client, and the data is generated.',
  kind: 'React application',
  role: 'Design and development',
  year: '2026',
  liveUrl: 'https://keyset-project.netlify.app',
  liveLabel: 'Open Keyset',
  summary:
    'A maintenance desk for a property management company, built in React and TypeScript. Filtering, bulk edits, a schedule board that works by keyboard as well as by dragging, and optimistic saves that roll back when a save is refused.',
  tags: ['React', 'TypeScript', 'Vite', 'Vitest', 'Playwright', 'Accessibility'],
  description:
    'A maintenance desk for a property management company: 200 requests across five properties, filtered, edited in bulk and scheduled on a week board. I built it because I wanted a React and TypeScript application with enough state in it to be worth testing. The data is generated and there is no client.',
  pageDescription:
    'Keyset case study: a React and TypeScript maintenance desk with filtering, bulk edits, a keyboard-operable schedule board and optimistic saves that roll back.',
  facts: [
    { label: 'Source', value: 'github.com/MannyPachano/keyset' },
    { label: 'Tests', value: '132 across three suites' },
  ],
  hero: {
    src: `${keysetImages}/first-screen.webp`,
    width: 1920,
    height: 1200,
    alt: 'The Keyset queue: a table of maintenance requests with filter chips, priority and status pills, and an open-for column.',
  },
  heroCaption:
    'The queue. 200 requests across five properties, sorted by how long each has been open. The status chips carry live counts, and rows past their deadline are marked.',
  highlights: [
    { value: '132 tests', label: 'Logic, components, and browser tests covering four journeys and six accessibility checks' },
    { value: '100 accessibility', label: 'Lighthouse, with axe run against four separate states of the app' },
    { value: 'No router, no CSS framework', label: 'The History API and hand-written CSS' },
  ],
  overviewTitle: 'About the project',
  overview: [
    'I had not shipped a React application, and reading about it was not going to fix that. So I picked a problem with enough state to be awkward: a maintenance desk where a property manager triages repair requests, assigns contractors and books visits.',
    'The rule I set was that all the logic lives in plain modules with no React in them. Filtering, sorting, pagination, dates and the reducer are ordinary functions, so they run under the bare Node test runner with nothing installed. Only rendering needs a toolchain. That is why most of the test suite kept working while the interface changed.',
    'Saves are optimistic: the row changes immediately and rolls back if the request fails. There is a Force failures button in the header so you can see that happen rather than take my word for it. The data comes from a fixed seed, so everyone sees the same 200 requests.',
  ],
  walkthroughIntro: 'The app, screen by screen.',
  sections: [
    {
      title: 'Filtering',
      caption:
        'Search matches reference, unit, tenant and contractor, and every term has to match. The status chips carry live counts that ignore the status filter itself, so clicking Done shows you what Done contains rather than zero. Filters go into the URL, so a narrowed queue is a link you can send.',
      alt: 'The queue filtered to the word boiler, showing three matching requests and a Clear filters button.',
      src: `${keysetImages}/01-filters.webp`,
      width: 1600,
      height: 1000,
    },
    {
      title: 'Selecting a range',
      caption:
        'Click one checkbox, shift-click another, and everything between them is selected. The bar that appears assigns a contractor, sets a status or sets a priority for all of them at once. A change that pushes rows out of the current filter says so afterwards, with a button to show them.',
      alt: 'Five rows selected in the queue with a bulk action bar above them.',
      src: `${keysetImages}/02-bulk.webp`,
      width: 1600,
      height: 1000,
    },
    {
      title: 'One request',
      caption:
        'Everything about a request in one panel: the property, the tenant, how long it has been open, and a history of every change with who made it. Opening it moves focus inside, Escape closes it, and Tab stays in the panel while it is open.',
      alt: 'The detail panel open over the queue, showing request MR-1196 with its history and a note field.',
      src: `${keysetImages}/03-detail.webp`,
      width: 1600,
      height: 1000,
    },
    {
      title: 'The week',
      caption:
        'Scheduled visits laid out by day. Empty days stay on the board because they are drop targets. A day holding more visits than a crew can fit is flagged rather than quietly accepted.',
      alt: 'A week board with seven day columns and scheduled visits as cards.',
      src: `${keysetImages}/04-board.webp`,
      width: 1600,
      height: 1000,
    },
    {
      title: 'Moving a visit without a mouse',
      caption:
        'Each card has a handle. Enter picks the visit up, the arrow keys choose a day, Enter drops it and Escape puts it back. Every step is announced. Drag on its own would have made rescheduling a mouse-only feature.',
      alt: 'A visit picked up with the keyboard, with the target day column highlighted.',
      src: `${keysetImages}/05-board-move.webp`,
      width: 1600,
      height: 1000,
    },
    {
      title: 'When a save fails',
      caption:
        'The row changes immediately and goes back exactly as it was if the request is rejected, field by field. The banner says what failed and that nothing was saved. Force failures in the header makes every save fail.',
      alt: 'A red banner reading "The server rejected that change. Nothing was saved." above the queue.',
      src: `${keysetImages}/06-error.webp`,
      width: 1600,
      height: 1000,
    },
    {
      title: 'Nothing to show',
      caption:
        'An empty queue and a filter that matches nothing are different situations, so they say different things. This one names the filters as the reason and offers to clear them.',
      alt: 'An empty state reading "No requests match these filters" with a Clear filters button.',
      src: `${keysetImages}/07-empty.webp`,
      width: 1600,
      height: 1000,
    },
    {
      title: 'Dark theme',
      caption:
        'The theme follows the operating system until you pick one, and the choice is remembered. A small file loaded before the first paint sets it, so the page never flashes light before turning dark. Colours run through tokens, and both themes were measured against the 4.5 to 1 contrast minimum.',
      alt: 'The Keyset queue in the dark theme.',
      src: `${keysetImages}/08-dark.webp`,
      width: 1600,
      height: 1000,
    },
  ],
  phonesIntro:
    'On a phone the table becomes cards. A nine-column table at 390 pixels is unreadable however it is scaled.',
  phones: [
    {
      src: `${keysetImages}/mobile-queue.webp`,
      width: 1170,
      height: 2532,
      alt: 'The Keyset queue on a phone, with each request as a card.',
      caption:
        'Each row becomes a card with the reference, the property, the issue and the status. The checkbox moves to the corner and the overdue marker runs down the edge of the card.',
    },
    {
      src: `${keysetImages}/mobile-detail.webp`,
      width: 1170,
      height: 2532,
      alt: 'The Keyset detail panel filling a phone screen.',
      caption:
        'The detail panel fills the screen. The controls are the same ones as on desktop, at a size you can hit with a thumb.',
    },
    {
      src: `${keysetImages}/mobile-board.webp`,
      width: 1170,
      height: 2532,
      alt: 'The Keyset week board on a phone, with one day per row.',
      caption:
        'The week stacks one day per row, keeping the move handle and the visit count on every day.',
    },
  ],
  details: {
    design: [
      'Status and priority are never colour alone. Priority carries a dot and a word, so it still reads if you cannot separate red from amber.',
      'One accent colour. Red is kept for overdue and for failures, so it means one thing.',
      'Figures use tabular numerals, so columns of days and counts line up.',
      'The bar under each age shows how much of the response window has been used: four hours for an emergency, two days for urgent, seven for routine.',
      'Every control is at least 24 pixels, and the ones used repeatedly on a phone are larger.',
    ],
    build: [
      'React 19 and TypeScript on Vite. No router: the view and the open request live in the query string and are set with the History API directly.',
      'All logic sits in plain modules with no React imports, so 88 of the tests run under the bare Node test runner with nothing installed.',
      '34 component tests in Vitest and Testing Library, and 10 browser tests in Playwright: four journeys and six accessibility checks.',
      'The accessibility suite runs axe against the queue in both themes, the board, the open panel and a 390 pixel viewport, then measures tap targets and checks that nothing overlaps.',
      'A mock API with adjustable latency and failure rate, backed by localStorage, so the optimistic updates and the rollback have something real to fail against.',
      'Deployed on Netlify with a Content Security Policy that keeps script-src at self, which is why the theme script is a file rather than an inline tag.',
    ],
  },
  tools: ['React', 'TypeScript', 'Vite', 'Vitest', 'Testing Library', 'Playwright', 'axe', 'Netlify'],
  ...backToProjects,
};

const nuvector: Walkthrough = {
  slug: 'nuvector',
  title: 'nuVector',
  eyebrow: 'Case study',
  client: 'nuVector LLC (Atlanta, Georgia)',
  kind: 'Company website',
  role: 'Design, front-end development and content',
  year: '2024 to 2025',
  frameUrl: 'www.nu-vector.com',
  summary:
    "The company website for nuVector, which sells software for tracking returnable containers, racks and tooling. Nine client pages, three service pages and a blog of 20 posts, all pointed at one thing: a demo request.",
  tags: ['Astro', 'SCSS', 'TypeScript', 'Netlify', 'Figma', 'SEO'],
  description:
    "The company website for nuVector, which sells software for tracking returnable containers, racks and tooling. Nine client pages, three service pages and a blog of 20 posts, all pointed at one thing: a demo request.",
  pageDescription:
    'nuVector case study: an Astro company website with nine client pages, three service pages and a blog of 20 posts, rendered on demand on Netlify with structured data on every page.',
  facts: [
    { label: 'Scale', value: '17 fixed pages and 20 blog posts, plus the index, category and author pages built from them' },
    { label: 'Status', value: 'Not live in this form. The screens come from the build.' },
  ],
  hero: {
    src: `${nuvectorImages}/first-screen.webp`,
    width: 1920,
    height: 1200,
    alt: 'The nuVector homepage: the headline Next-Level Asset Management with a Discover Our Solutions button, beside the company monogram.',
  },
  heroCaption:
    'The first screen. One headline, one sentence and one button. Above the navigation there is a strip with the email address and the opening hours, and the header carries the phone number, which are the same details the homepage puts into its structured data.',
  highlights: [
    { value: '9 client pages', label: 'Volvo, Warner Bros. Discovery, Sonoco, Regal, ZF, Bosch, CHEP, UES and packIQ, all from one layout' },
    { value: '20 posts', label: 'Markdown files that produce the post pages, the paginated index, the category pages and the author pages' },
    { value: 'Astro on Netlify', label: 'Pages rendered on demand and cached at the edge, with the blog index and its category and author pages built ahead of time' },
  ],
  overviewTitle: 'About the project',
  overview: [
    'nuVector sells software that tracks returnable assets: the containers, racks and tooling that leave a plant and are supposed to come back. I worked there as a front-end developer and later in SEO and marketing, so I knew the customers before I started on the site. The site this one replaced was bad, and that is what drove the rebuild.',
    'The company site had a different job from the <a class="text-link" href="/web-developer-project-loopmanager">LoopManager product site</a>. LoopManager is nuVector\'s product, and that site explains what the software does. This one had to show that the company behind it is real and established, and then get a demo booked. That is why the client work sits high on the page and why every route ends at the same form.',
    'Most of the build is about not typing anything twice. The nine client pages are one layout with the client name, the kind of result, a photograph and a quote passed into it. The blog posts are Markdown files, and the post pages, the index, the category pages and the author pages are all generated from those files. Publishing a post means adding a file.',
    'I did the design, the front-end build and the 20 blog posts. The photography, the logos and the product claims are nuVector\'s. The four numbers in the case studies section are their claims about what their software does for their customers, not outcomes of my work on the website, and I have not presented them as mine.',
  ],
  walkthroughIntro: 'The homepage, section by section.',
  sections: [
    {
      title: 'Hero',
      caption:
        'One headline, one sentence and one button. The button goes to the asset management service page rather than to the contact form, so the first click is to read more. The demo request is in the header and again at the bottom of the page for anyone who already knows what they want.',
      alt: 'The nuVector hero: the headline Next-Level Asset Management, a line of copy and a Discover Our Solutions button, next to the company monogram.',
      src: `${nuvectorImages}/01-hero.webp`,
      width: 1600,
      height: 664,
    },
    {
      title: 'Services',
      caption:
        'Three services, numbered, each one a card that turns over on hover to show a sentence about what it covers and a link to its own page. Returnable asset management, workflow tracking, and data and infrastructure. On a phone the cards turn on tap instead.',
      alt: 'Three numbered service cards over grayscale photographs: Returnable Asset Management, Workflow Tracking, and Data and Infrastructure.',
      src: `${nuvectorImages}/02-services.webp`,
      width: 1600,
      height: 643,
    },
    {
      title: 'Clients and company',
      caption:
        'Nine client logos on a loop, then a short piece of company history. The logos are drawn as masks so they all come out in one gray, which stops a row of nine different brand treatments from fighting each other. The row is duplicated so the loop has no visible join, and the copy is hidden from screen readers so the same nine names are not read out twice.',
      alt: 'A row of client logos in gray above the About nuVector block, with a heading reading Innovating Together.',
      src: `${nuvectorImages}/03-clients.webp`,
      width: 1600,
      height: 1002,
    },
    {
      title: 'What the software does',
      caption:
        'A dark band across the page with four capabilities on the left and six tiles on the right, each tile a link into the asset management page. Three of the tiles carry a shorter heading that is used on narrow screens, so nothing wraps to three lines on a phone.',
      alt: 'A dark section listing four software capabilities beside six linked tiles with orange icons.',
      src: `${nuvectorImages}/04-benefits.webp`,
      width: 1600,
      height: 735,
    },
    {
      title: 'Client work',
      caption:
        'Six clients, each one linking to a full page about that client, and four numbers underneath. The client name and the kind of work sit over each photograph and appear on hover, which is why a still like this reads as six pictures. The four numbers are nuVector\'s claims about what their software does for their customers. They are not results of my work on the website and I am not presenting them as mine.',
      alt: 'The case studies section: a heading reading Real Results, Real Impact, a grid of six client photographs, and four percentage figures.',
      src: `${nuvectorImages}/05-results.webp`,
      width: 1600,
      height: 1536,
    },
    {
      title: 'Blog',
      caption:
        'The six most recent posts, read from the Markdown files at build time and sorted by date. One file produces the card, the post page, the category page and the author page, so publishing is a matter of adding a file.',
      alt: 'The blog section with six post cards, each showing a category, an image, a title, an author and date, and a Read Post button.',
      src: `${nuvectorImages}/06-blog.webp`,
      width: 1600,
      height: 1569,
    },
    {
      title: 'Demo request',
      caption:
        'The page ends on the same request the header opens with. One line, one button, no form fields.',
      alt: 'A full-width dark band reading Request a Free Demo with a Get Started Today button.',
      src: `${nuvectorImages}/07-cta.webp`,
      width: 1600,
      height: 489,
    },
  ],
  galleries: [
    {
      title: 'The rest of the site',
      intro:
        'Every page below the homepage gets its banner and its breadcrumb from one component, so you can always see how deep in the site you are.',
      columns: 2,
      items: [
        {
          src: `${nuvectorImages}/08-service-page.webp`,
          width: 1600,
          height: 1000,
          alt: 'The returnable asset management service page, headed Meet LoopManager, with four capabilities around the company monogram.',
          caption:
            'One of the three service pages. This one opens with LoopManager, which is nuVector\'s product and the subject of the other case study.',
        },
        {
          src: `${nuvectorImages}/09-result-volvo.webp`,
          width: 1600,
          height: 1000,
          alt: 'The Volvo client page: a banner reading Container Fleet Precision, a breadcrumb, the client name, share buttons and a photograph.',
          caption:
            'A client page. The layout takes the client name, the kind of result, a photograph, a pull quote and the body copy. Nine clients use it.',
        },
        {
          src: `${nuvectorImages}/10-results-index.webp`,
          width: 1600,
          height: 1000,
          alt: 'The Client Success Stories index page with an introduction and the start of the client grid.',
          caption: 'The index that holds all nine of them.',
        },
        {
          src: `${nuvectorImages}/11-blog-index.webp`,
          width: 1600,
          height: 1000,
          alt: 'The blog index with an introduction and a featured post.',
          caption:
            'The blog index: a featured post, then six posts to a page with pagination and a list of categories. The category and author pages are generated from the same files.',
        },
        {
          src: `${nuvectorImages}/12-about.webp`,
          width: 1600,
          height: 1000,
          alt: 'The About Us page with a heading reading Transforming Supply Chains with Innovative Tech, and Our Mission and Our Vision cards.',
          caption: 'About, which is where the company history goes in full.',
        },
        {
          src: `${nuvectorImages}/13-contact.webp`,
          width: 1600,
          height: 1000,
          alt: 'The Contact Us page with introductory copy beside a dark form panel.',
          caption:
            'Contact. The form marks its required fields and says what happens to the address, and it posts to a serverless function rather than to a third party.',
        },
      ],
    },
  ],
  phonesIntro:
    'The strip above the navigation is dropped on a phone, so the logo and the menu button are the only things above the content.',
  phones: [
    {
      src: `${nuvectorImages}/mobile-home.webp`,
      width: 1170,
      height: 2532,
      alt: 'The nuVector homepage on a phone, with the monogram above the headline.',
      caption: 'The homepage. The monogram moves above the headline and the copy runs full width.',
    },
    {
      src: `${nuvectorImages}/mobile-results.webp`,
      width: 1170,
      height: 2532,
      alt: 'The Client Success Stories page on a phone, with the banner and breadcrumb above the introduction.',
      caption: 'The client index. The banner and the breadcrumb hold their shape at this width.',
    },
    {
      src: `${nuvectorImages}/mobile-volvo.webp`,
      width: 1170,
      height: 2532,
      alt: 'The Volvo client page on a phone, showing the client name, share buttons, a photograph and the body copy.',
      caption: 'A client page. The photograph sits between the client name and the write-up rather than beside it.',
    },
    {
      src: `${nuvectorImages}/mobile-contact.webp`,
      width: 1170,
      height: 2532,
      alt: 'The contact page on a phone, with the address, email and phone number above the form.',
      caption: 'Contact. The address, the email and the phone number come before the form, because on a phone most people want to call.',
    },
  ],
  details: {
    design: [
      'Montserrat for headings and Nunito Sans for body text, both self-hosted and preloaded rather than fetched from Google.',
      "The brand's orange and charcoal, kept from the existing identity rather than replaced.",
      'Every section opens with a small double slash label above its heading, so someone scanning the page can tell where they are.',
      'Client logos are drawn as single color masks, so a row of nine different brand treatments reads as one row.',
      'Every page below the homepage takes its banner and breadcrumb from one component, so the size of the site is visible from anywhere in it.',
    ],
    build: [
      'Astro 4 with MDX, the sitemap integration and astro-icon, using three icon sets.',
      'Hosted on Netlify through the Netlify adapter. Pages are rendered on demand and cached at the edge. The paginated blog index, the category pages and the author pages are built ahead of time instead, since they come from a fixed set of files.',
      'SCSS with one variables file and one mixins file. No CSS framework.',
      'The nine client pages are a single layout that takes the client name, the kind of result, a photograph, a pull quote and the body copy.',
      'Posts are Markdown. The frontmatter carries the title, date, author, category, description, image and a table of contents, and on 14 of them a list of questions and answers.',
      'Drafts and posts dated in the future are filtered out at build, so a post can be written early and dated for later.',
      'The contact form posts to a serverless function on Netlify, which sends the mail.',
    ],
    marketing: [
      'Structured data is generated for each page: BlogPosting on posts, LocalBusiness on the homepage, and FAQPage merged into the 14 posts that carry questions and answers.',
      'Canonical URL, Open Graph and Twitter card tags on every page, with a per page switch to mark one noindex.',
      'The 20 posts, across four categories, from February 2023 to March 2025. Each one is aimed at a particular search and ends at the demo form.',
    ],
  },
  tools: ['Astro', 'SCSS', 'TypeScript', 'JavaScript', 'Figma', 'Netlify', 'SEO'],
  ...backToProjects,
};

export const projectWalkthroughs: Walkthrough[] = [
  timeclick,
  ues,
  ...(SHOW_CLOX ? [clox] : []),
  keyset,
  nuvector,
  landscaperTemplates,
  jonathanZalzman,
];
