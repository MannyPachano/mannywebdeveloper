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
  overviewTitle: 'What the site has to do',
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
  kind: 'Homepage rebuild and SEO',
  role: 'Web developer and SEO consultant',
  year: '2026 to present',
  liveUrl: 'https://universalenvironmentalservices.com',
  summary:
    'I rebuilt the homepage for a used oil collection company that operates in 28 states. I am now rebuilding the rest of the site page by page while running its local SEO program.',
  tags: ['WordPress', 'Local SEO', 'Google Business Profile', 'GA4', 'Search Console', 'Conversion design'],
  description:
    'I rebuilt the homepage for a used oil collection and recycling company that operates in 28 states. I am rebuilding the rest of the site on the same template and running its SEO program.',
  pageDescription:
    'Universal Environmental Services case study: the homepage rebuild shown before and after and section by section, the mobile version, and the local SEO program behind it.',
  pageTitle: 'Universal Environmental Services case study | Manny Pachano',
  facts: [{ label: 'Status', value: 'Homepage live; other pages being rebuilt' }],
  hero: {
    src: `${uesImages}/after-first.webp`,
    width: 1920,
    height: 1200,
    alt: 'The first screen of the new UES homepage: black header and hero with the headline "Used oil collection and recycling in 28 states", two buttons and a photo of the re-refinery, above a yellow strip of numbers.',
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
    { value: '28 states', label: 'Service area covered by the local SEO program' },
    { value: 'One template', label: 'The homepage pattern the rest of the site is now being rebuilt on' },
    { value: 'Lead tracking', label: 'Form submissions and phone calls tracked in Google Analytics 4' },
  ],
  overviewTitle: 'What the site has to do',
  overview: [
    'UES collects used oil, filters, antifreeze and oily water from more than 35,000 businesses and re-refines the oil into new base oil at its plant in Peachtree City, Georgia. Its customers are shop owners and fleet managers. They want to know that a truck will show up and that the paperwork will pass an inspection. The old homepage did not answer either question quickly, so I rebuilt it with both answers near the top of the page.',
    'The new homepage is the first page built on a template that the rest of the site is being rebuilt on; the hazardous waste page is the second. It starts with a short headline, a call button and a request-a-pickup button with a same-day reply promise, followed by the company\'s numbers. The nine collection services each get a short card. Below that are a four-step explanation of how a pickup works, a compliance section (a receipt at every pickup, EPA transporter ID, insurance and industry memberships), a section about the re-refinery, a list of states, customer quotes and a pickup request form. The page uses large text and high contrast and was designed for phones first.',
    'The second part of the engagement is SEO. I run the technical and local SEO work across the 28-state service area, including the company\'s Google Business Profile listings (verification, cleanup and appeals), on-page SEO as each page is rebuilt, and content written around how customers search for pickup services in their area. I set up Google Analytics 4 and Search Console so that form submissions and phone clicks are tracked as leads, and I send a monthly report that shows rankings, traffic and leads by location. The program is in its second month, so there are no results to show yet.',
  ],
  walkthroughIntro: 'The new homepage, top to bottom.',
  sections: [
    {
      title: 'Header, hero and the numbers',
      caption:
        'The headline says what the company does and where. Two buttons: request a pickup, or call. Under them, the promise that matters to a shop owner: same business day reply, no account needed. The yellow strip carries the four numbers that make the company credible.',
      alt: 'UES header and hero with the headline "Used oil collection and recycling in 28 states", a Request a pickup button, a Call button, a photo of the re-refinery and a yellow strip with 35,000+ customers, 400+ trucks, 90M+ gallons and 28 states.',
      src: `${uesImages}/01-hero-numbers.webp`,
      width: 1600,
      height: 690,
    },
    {
      title: 'Nine services',
      caption:
        'One card per service, each with an icon, two sentences and a link to its page. The black bar at the bottom catches the visitor who is not sure what category their waste falls into, which is a common reason people do not call.',
      alt: 'A grid of nine service cards (used oil pickup, used filter collection, oily wastewater, hazardous waste, vacuum services, spent absorbents, parts washer service, fluorescent bulbs, spent antifreeze) and a black bar that says "Not sure what category your waste falls into?".',
      src: `${uesImages}/02-services.webp`,
      width: 1600,
      height: 1296,
    },
    {
      title: 'Four steps, start to finish',
      caption:
        'What happens after you call, in four numbered steps: tell us what you have, we put you on a route, our driver pumps and hauls, you get the receipt. The old site never explained this.',
      alt: 'Four numbered steps in a row under the heading "Four steps, start to finish".',
      src: `${uesImages}/03-four-steps.webp`,
      width: 1600,
      height: 492,
    },
    {
      title: 'Compliance',
      caption:
        'The inspector question, answered: a receipt at every pickup, the full service history in the customer portal, safety data sheets, a $20M insurance policy and the industry memberships. The receipt on the right is drawn in HTML and CSS, not a screenshot.',
      alt: 'A checklist of compliance points next to an illustration of a UES service receipt.',
      src: `${uesImages}/04-compliance.webp`,
      width: 1600,
      height: 748,
    },
    {
      title: 'The re-refinery',
      caption:
        'A dark section about what happens to the oil after pickup. The yellow card carries the two numbers that matter: 50 to 85 percent less energy than making base oil from crude, and one re-refinery in Peachtree City.',
      alt: 'A dark section titled "We re-refine what we collect" with a yellow card showing 50-85% less energy and 1 re-refinery.',
      src: `${uesImages}/05-re-refinery.webp`,
      width: 1600,
      height: 478,
    },
    {
      title: 'Find your state',
      caption:
        'A map of the service area and a list of the 28 states. Each state links to its own page, which is where the local SEO work lands.',
      alt: 'A US map with the service area shaded and a two-column list of states.',
      src: `${uesImages}/06-find-your-state.webp`,
      width: 1600,
      height: 904,
    },
    {
      title: 'Customer quotes',
      caption:
        'Three unedited comments from customers on the routes, with the town and state. Short, specific and believable.',
      alt: 'Three customer quotes in cards with a yellow left border, under the heading "Most of our accounts stay for years".',
      src: `${uesImages}/07-reviews.webp`,
      width: 1600,
      height: 484,
    },
    {
      title: 'The environmental program',
      caption: 'One short paragraph and a link to the full program page, next to a photo of the plant.',
      alt: 'A section titled "The program behind the trucks" with a paragraph, a button and a photo of storage tanks.',
      src: `${uesImages}/08-program.webp`,
      width: 1600,
      height: 414,
    },
    {
      title: 'Pickup request form and footer',
      caption:
        'The form asks only what the dispatcher needs: who you are, where you are, what to collect and roughly how much. The phone number is right next to it for people who would rather talk. Submissions and calls are tracked as leads in GA4.',
      alt: 'A dark section with a pickup request form on the right and a phone number on the left, above the site footer.',
      src: `${uesImages}/09-form-footer.webp`,
      width: 1600,
      height: 1364,
    },
  ],
  galleries: [
    {
      title: 'The next pages on the same template',
      intro: 'The rest of the site is being rebuilt page by page on the homepage template. The hazardous waste division page was the first one after the homepage.',
      columns: 2,
      items: [
        {
          src: `${uesImages}/page-hazardous-waste.webp`,
          width: 1600,
          height: 1000,
          alt: 'The hazardous waste page: the headline "Hazardous waste removal and disposal for businesses", an on-this-page list, and the yellow numbers strip.',
          caption: 'Hazardous waste removal and disposal. Same header, same buttons, an on-this-page list for a longer page.',
        },
      ],
    },
  ],
  phonesIntro: 'The new homepage on a phone. It was designed for phones first, because that is what a shop owner has in hand when the drum is full.',
  phones: [
    {
      src: `${uesImages}/mobile-hero.webp`,
      width: 1170,
      height: 2535,
      alt: 'The new UES homepage on a phone: headline, two full-width buttons, the reply promise and the plant photo.',
      caption: 'Headline, two full-width buttons and the reply promise on the first screen.',
    },
    {
      src: `${uesImages}/mobile-steps.webp`,
      width: 1170,
      height: 2535,
      alt: 'The four pickup steps stacked on a phone.',
      caption: 'The four steps, stacked.',
    },
    {
      src: `${uesImages}/mobile-compliance.webp`,
      width: 1170,
      height: 2535,
      alt: 'The compliance checklist on a phone.',
      caption: 'The compliance checklist stays readable at phone size.',
    },
    {
      src: `${uesImages}/mobile-form.webp`,
      width: 1170,
      height: 2535,
      alt: 'The pickup request section on a phone, with the phone number above the form.',
      caption: 'The phone number comes before the form, because most people on a phone would rather call.',
    },
  ],
  phonesB: {
    intro: 'The old homepage on a phone, for comparison: a photo, a phone number, a welcome paragraph, and nine magnifying-glass icons for the services.',
    items: [
      {
        src: `${uesImages}/before-mobile-hero.webp`,
        width: 480,
        height: 1040,
        alt: 'The old UES homepage on a phone: a photo of storage tanks with "Call us" and a phone number over it.',
        caption: 'Before: the first screen was a photo and a phone number.',
      },
      {
        src: `${uesImages}/before-mobile-services.webp`,
        width: 480,
        height: 1040,
        alt: 'The old UES services list on a phone: numbered magnifying-glass icons with short descriptions.',
        caption: 'Before: the services, each with the same magnifying-glass icon.',
      },
    ],
  },
  details: {
    design: [
      'Two questions answered above the fold: will a truck show up, and will the paperwork pass an inspection.',
      'Black, white and the company yellow. Large text and high contrast for people reading on a phone in a shop.',
      'Numbers wherever they exist: customers, trucks, gallons, states, energy saved.',
      'The sample receipt is drawn in HTML and CSS, so it is sharp on every screen and weighs almost nothing.',
    ],
    build: [
      'WordPress with a hand-coded page template in the child theme, so the rest of the site can be rebuilt on it page by page.',
      'WPForms for the pickup request form, with Cloudflare Turnstile instead of a captcha puzzle.',
      'Form submissions and phone clicks tracked as leads in Google Analytics 4.',
      'An interactive map of the service area; every state links to its own page.',
    ],
    marketing: [
      'Local SEO across 28 states: Google Business Profile verification, cleanup and appeals, on-page SEO as each page is rebuilt, and content written around how customers search for pickup services in their area.',
      'Google Analytics 4 and Search Console set up for lead tracking, with a monthly report by location.',
      'Second month of the program. Results will be added here when there are enough months to show a trend.',
    ],
  },
  tools: ['WordPress', 'HTML & CSS', 'JavaScript', 'WPForms', 'Google Business Profile', 'Google Analytics 4', 'Search Console', 'Local SEO'],
  ...backToProjects,
};

const clox: Walkthrough = {
  slug: 'clox',
  title: 'Clox',
  eyebrow: 'Case study',
  client: 'Clox (my own company)',
  kind: 'Founder',
  role: 'Founder: product, design, front end and marketing',
  year: '2026 to present',
  liveUrl: 'https://getclox.com',
  liveLabel: 'Visit getclox.com',
  summary:
    'I built Clox for small field crews in the trades: native iOS and Android apps, a web dashboard and the marketing site. I designed, built and market the whole product.',
  tags: ['Next.js', 'TypeScript', 'Mobile apps', 'SaaS', 'SEO', 'Product marketing'],
  description:
    'Clox is my own time-tracking product for small field crews in the trades. I designed and built the native apps, web dashboard and marketing site, and I handle the marketing.',
  pageDescription:
    'Clox case study: the getclox.com marketing site section by section, the product screens, the industry and comparison pages, and the mobile version.',
  hero: {
    src: `${cloxImages}/first-screen.webp`,
    width: 1920,
    height: 1200,
    alt: 'The first screen of getclox.com: the headline "Stop chasing paper timecards", a Start your 14-day free trial button, App Store and Google Play badges, and two phones showing the Clox clock-in screen.',
  },
  heroCaption: 'The first screen of getclox.com at 1680 pixels wide.',
  highlights: [
    { value: '$29 a month', label: 'Includes three users, then $6 per user' },
    { value: 'iOS, Android and web', label: 'Native apps for the crew and a web dashboard for the office' },
    { value: '14-day trial', label: 'No credit card, no sales call, no onboarding fee' },
  ],
  overviewTitle: 'What the site has to do',
  overview: [
    'Many small trades crews (electricians, plumbers, HVAC, landscapers, general contractors) still track hours on paper timecards or in text messages. The hours get collected at the end of the week and the totals are often wrong. Clox records hours at the time they happen. The crew clocks in from their phones, and the office sees hours, job costs and the schedule in one place. I founded the company and I am responsible for the product, the design, the front end and the marketing.',
    'The product is a native iOS and Android app for workers and a web dashboard for managers. Clock-ins use GPS and geofencing, so a clock-in from outside the job site is blocked. Overtime and break rules are applied automatically, each job shows its labor cost, and payroll can be exported to QuickBooks, ADP, Gusto or Paychex. Managers can build schedules by drag and drop, approve shifts and time-off requests, and see the day\'s clock-ins on a map. Time records can be exported as a signed PDF if there is a dispute.',
    'The marketing site has one job: get a crew owner to start the free trial. The homepage follows the structure I use for client sites: the problem, the fix, the features, a tour of the real product, three steps to start, a list of the trades it is built for, the price and one call to action. Around it sit a page for each trade, a comparison page for each competitor, docs and a blog, all written from search data.',
    'Running my own product means I deal with positioning, pricing, onboarding, SEO and support directly. That experience carries over to the client sites I build.',
  ],
  walkthroughIntro: 'The homepage, top to bottom.',
  sections: [
    {
      title: 'Header and hero',
      caption:
        'One headline that names the problem, one paragraph that says who it is for, one button. The app store badges and a 40-second tour link sit under it for people who want to see before they sign up. The two phones are the clock-in screen rebuilt in HTML and CSS, so they are sharp on every display and cost nothing to load.',
      alt: 'getclox.com hero: "Stop chasing paper timecards", a short paragraph, a trial button, App Store and Google Play badges and two phones with the clock-in screen.',
      src: `${cloxImages}/01-hero.webp`,
      width: 1600,
      height: 905,
    },
    {
      title: 'The problem, then the fix',
      caption:
        'A short section on why paper timecards cost money, in the words a crew owner would use, and a boxed one-line answer: every punch lands the moment it happens.',
      alt: 'A section titled "Paper timecards make payroll slow and the hours hard to trust" with a highlighted box labeled "The fix".',
      src: `${cloxImages}/02-problem.webp`,
      width: 1600,
      height: 538,
    },
    {
      title: 'Six features',
      caption:
        'Two rows of three cards: clock in even offline, off-site clock-ins blocked, overtime and breaks calculated, real job costs, records that hold up in a dispute, fix a punch. Each card is two or three sentences, no icons, no marketing words.',
      alt: 'A grid of six feature cards under the heading "Everything you need to run an hourly crew".',
      src: `${cloxImages}/03-features.webp`,
      width: 1600,
      height: 880,
    },
    {
      title: 'The 40-second tour',
      caption:
        'A real screen recording of a clock-in, 40 seconds, with captions. It is the only media file on the page, it loads on demand and it does not autoplay.',
      alt: 'A video player showing the Clox clock-in screen on a phone, labeled as a real screen recording.',
      src: `${cloxImages}/04-video.webp`,
      width: 1600,
      height: 1010,
    },
    {
      title: 'Product tour',
      caption:
        'Four alternating rows, each a dashboard screen drawn in HTML and CSS: reports with overtime flagged before payday, the team page with who is on the clock, the weekly schedule, and the map of clock-ins. Ends with the trial button again.',
      alt: 'Four rows of dashboard screenshots: reports, team, schedule and map, each with a short heading and paragraph.',
      src: `${cloxImages}/05-product-tour.webp`,
      width: 1600,
      height: 1726,
    },
    {
      title: 'Three steps to start',
      caption:
        'Set up on the web, invite the crew by text, run payroll on Friday. Numbered 01, 02, 03, one sentence each. No sales call, no onboarding fee.',
      alt: 'Three numbered steps under the heading "Set up Clox yourself in a few minutes".',
      src: `${cloxImages}/06-setup.webp`,
      width: 1600,
      height: 570,
    },
    {
      title: 'Is this you?',
      caption:
        'Eight trades as small cards: electricians, plumbers, HVAC, landscapers, general contractors, cleaning services, concrete and masonry, roofers. The site has a page written for each of 20 trades, linked from the footer and the trades index.',
      alt: 'A row of trade names as small chips under the heading "Is this you?".',
      src: `${cloxImages}/07-is-this-you.webp`,
      width: 1600,
      height: 490,
    },
    {
      title: 'Pricing',
      caption:
        'One price, in one line: $29 a month for the first three users, then $6 per user. Every feature is on every plan. The trial needs no credit card.',
      alt: 'A pricing section showing $29 per month with a short explanation and a See full pricing button.',
      src: `${cloxImages}/08-pricing.webp`,
      width: 1600,
      height: 463,
    },
    {
      title: 'Last call to action and footer',
      caption:
        '"Get your Sunday night back." The trial button and the how-it-works link one more time, then a footer that links the main trade pages, the five comparison pages and the legal pages.',
      alt: 'A call to action reading "Get your Sunday night back" above a footer with product, crew, built-for, comparisons, company and legal columns.',
      src: `${cloxImages}/09-cta-footer.webp`,
      width: 1600,
      height: 1129,
    },
  ],
  galleries: [
    {
      title: 'The product',
      intro: 'The screens behind the site: the web dashboard for the office and the app for the crew.',
      columns: 3,
      items: [
        { src: '/images/clox-app-tracking.webp', width: 1600, height: 924, alt: 'Clox reports screen on a laptop showing 383 hours by employee, with the mobile clock-in screen next to it.', caption: 'Hours by employee in the dashboard, and the clock-in screen on the phone.' },
        { src: '/images/clox-app-clock-in.webp', width: 1600, height: 924, alt: 'Two phones showing the Clox clock-in screen. On the second one the clock-in is blocked because the worker is outside the job site.', caption: 'One-tap clock-in. Outside the job site, the punch is blocked.' },
        { src: '/images/clox-app-map.webp', width: 1600, height: 924, alt: 'Clox team roster on a laptop and a phone, with each clock-in shown on a map of job sites.', caption: 'Every clock-in on a map of the job sites.' },
        { src: '/images/clox-app-schedule.webp', width: 1600, height: 924, alt: 'Clox weekly schedule on a laptop, with the same schedule shown on a phone.', caption: 'Drag-and-drop scheduling, seen by the crew on their phones.' },
        { src: '/images/clox-app-approvals.webp', width: 1600, height: 924, alt: 'Clox team page with pending approvals on a laptop, and the approvals list on a phone.', caption: 'Shift and time-off approvals.' },
        { src: '/images/clox-app-overtime.webp', width: 1600, height: 924, alt: 'Clox report showing hours by employee with overtime highlighted and a labor cost total.', caption: 'Overtime flagged before payroll, with the labor cost total.' },
      ],
    },
    {
      title: 'The pages around the homepage',
      intro: 'Each trade has its own page, each competitor has a comparison page, and the pricing and how-it-works pages answer the two questions every trial signup asks first.',
      columns: 2,
      items: [
        { src: `${cloxImages}/page-pricing.webp`, width: 1600, height: 1000, alt: 'The Clox pricing page: "One plan, two ways to pay", with monthly and annual cards.', caption: 'Pricing: one plan, monthly or annual.' },
        { src: `${cloxImages}/page-how-it-works.webp`, width: 1600, height: 1000, alt: 'The How Clox works page: managers run Clox on the web, crews clock in from their phones.', caption: 'How it works, split into managers and crews.' },
        { src: `${cloxImages}/page-electricians.webp`, width: 1600, height: 1000, alt: 'The electricians page: "Time tracking built for electrical contractors" with a phone showing the clock-in screen.', caption: 'One of 20 trade pages, written for electrical contractors.' },
        { src: `${cloxImages}/page-vs-clockshark.webp`, width: 1600, height: 1000, alt: 'The Clox vs ClockShark comparison page with a feature and price table.', caption: 'One of five comparison pages, with a plain price and feature table.' },
      ],
    },
  ],
  phonesIntro: 'getclox.com on a phone. Most crew owners will see it there first.',
  phones: [
    { src: `${cloxImages}/mobile-hero.webp`, width: 1170, height: 2535, alt: 'The Clox homepage on a phone: the headline, the trial button, the app store badges and the top of the clock-in phone mockup.', caption: 'One column, the trial button above the fold, and the tour link for people who want to look first.' },
    { src: `${cloxImages}/mobile-fix.webp`, width: 1170, height: 2535, alt: 'The problem section on a phone: the paragraph about paper timecards, then the fix in its own bordered box.', caption: 'The problem in three sentences, then the one-line answer in its own box.' },
    { src: `${cloxImages}/mobile-features.webp`, width: 1170, height: 2535, alt: 'The what you get section on a phone: the heading, then the feature cards stacked one per row, clock in even offline and off-site clock-ins blocked.', caption: 'The feature grid becomes one column, in the same order.' },
    { src: `${cloxImages}/mobile-tour.webp`, width: 1170, height: 2535, alt: 'The product tour on a phone: the 40-second video and the first dashboard row.', caption: 'The video and the dashboard rows, each one full width.' },
  ],
  details: {
    design: [
      'Cream background, one dark accent and one red. The product screens are the visuals; there are no stock photos and no icons for the sake of icons.',
      'Every section answers one question a crew owner has, in the order they have them: what is this, why, what do I get, show me, how do I start, is it for me, what does it cost.',
      'Short copy in trade language. "Sunday night", "payroll Friday", "the drum is full" kind of language, not software language.',
      'Twenty trade pages and five comparison pages built on the same components as the homepage, so they stay consistent.',
    ],
    build: [
      'Next.js and TypeScript for the marketing site. The product is native iOS and Android apps plus a web dashboard.',
      'There is not a single image file on the homepage: the phones, the dashboard windows and the map are drawn in HTML, CSS and SVG. The only media file is the 40-second video, and it loads on demand.',
      'No third-party scripts on the page. Every script comes from getclox.com.',
      'Docs, a blog, 20 trade pages and five comparison pages share the homepage components.',
    ],
    marketing: [
      'A blog and the trade and comparison pages are written from search data.',
      'App store listings, directory profiles and a Product Hunt launch.',
      'Running my own product means I handle positioning, pricing, onboarding, SEO and support directly.',
    ],
  },
  tools: ['Next.js', 'TypeScript', 'React', 'Native mobile apps', 'Figma', 'SEO', 'Product Hunt'],
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
  overviewTitle: 'What the pages have to do',
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
  overviewTitle: 'What the site has to do',
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
        'The form the whole page points at. It asks for the instrument, the student age, the experience level, in person or online, the plan and the best times, so the first reply can already suggest a slot. Under it, an email link and a phone number for people who would rather reach him directly.',
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
  overviewTitle: 'Why I built it',
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
        'The row changes immediately and goes back exactly as it was if the request is rejected, field by field. The banner says what failed and that nothing was saved. Force failures in the header makes every save fail, so this is something you can try rather than something I claim.',
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
  overviewTitle: 'What the site had to do',
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
        'Nine client logos on a loop, then a short piece of company history. The logos are drawn as masks so they all come out in one gray, which stops a row of nine different brand treatments from fighting each other. The row is duplicated to make the loop seamless, and the copy is hidden from screen readers so the same nine names are not read out twice.',
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
        'The page ends on the same request the header opens with. One line, one button, no form fields here, so there is one thing to do and one place the whole site is pointed at.',
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
