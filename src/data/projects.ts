// ---------------------------------------------------------------------------
// PROJECT LIST (homepage cards)
// Order here = display order on the homepage. The first entry is featured.
// Each slug maps to a page at /web-developer-project-<slug>.
// Video files live in /public/videos, posters in /public/images.
// ---------------------------------------------------------------------------

import { SHOW_CLOX } from '../config';

export type Project = {
  slug: string;
  title: string;
  role: string;
  year: string;
  /** One or two sentences. Inline <strong> is allowed. */
  summary: string;
  tags: string[];
  video: {
    mp4: string;
    webm?: string;
    poster: string;
    /** cover = full-bleed screen recording; contain = laptop mockup with margins */
    fit: 'cover' | 'contain';
  };
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'timeclick',
    title: 'TimeClick',
    role: 'Website redesign & growth',
    year: '2024 to present',
    featured: true,
    summary:
      'A full redesign of the marketing site for a time clock software company used by thousands of small businesses, plus the CRM, checkout and email systems behind it. <strong>One goal: get the right visitors into a free trial with zero friction.</strong>',
    tags: ['WordPress', 'JavaScript', 'Zoho CRM', 'Stripe & WooCommerce', 'SEO', 'Email marketing'],
    video: {
      mp4: '/videos/timeclick-thumbnail.mp4',
      webm: '/videos/timeclick-thumbnail.webm',
      poster: '/images/timeclick-thumbnail.webp',
      fit: 'cover',
    },
    liveUrl: 'https://timeclick.com',
  },
  {
    slug: 'ues',
    title: 'Universal Environmental Services',
    role: 'Homepage rebuild & SEO program',
    year: '2026',
    summary:
      'Rebuilt the homepage for a used oil collection company running routes in 28 states, then took over their search presence: <strong>local SEO, Google Business Profile listings and end-to-end lead tracking.</strong>',
    tags: ['WordPress', 'Local SEO', 'Google Business Profile', 'GA4', 'Search Console', 'Conversion design'],
    video: {
      mp4: '/videos/ues-thumbnail.mp4',
      webm: '/videos/ues-thumbnail.webm',
      poster: '/images/ues-thumbnail.webp',
      fit: 'cover',
    },
    liveUrl: 'https://universalenvironmentalservices.com',
  },
  // Temporary: removed from the homepage when SHOW_CLOX is false (src/config.ts).
  ...(SHOW_CLOX
    ? [
        {
          slug: 'clox',
          title: 'Clox',
          role: 'Founder, product & marketing',
          year: '2026 to present',
          summary:
            'My own product: time tracking for small field crews in the trades. Native iOS and Android apps, a web dashboard and a marketing site, designed, built and marketed by me. <strong>One flat price, a 14-day trial, and payroll done by Friday.</strong>',
          tags: ['Next.js', 'TypeScript', 'Mobile apps', 'SaaS', 'SEO', 'Product marketing'],
          video: {
            mp4: '/videos/clox-thumbnail.mp4',
            webm: '/videos/clox-thumbnail.webm',
            poster: '/images/clox-thumbnail.webp',
            fit: 'cover' as const,
          },
          liveUrl: 'https://getclox.com',
        },
      ]
    : []),
  {
    slug: 'explainer-visuals',
    title: 'Explainer Visuals',
    role: 'Design & development',
    year: '2024',
    summary:
      "A video production studio's portfolio site where every video autoplays at once. <strong>Built on Astro with HLS video playlists</strong> so the page stays fast under a wall of motion.",
    tags: ['Astro', 'HLS video', 'Figma', 'Shell scripting'],
    video: {
      mp4: '/videos/explainer-visuals-thumbnail.mp4',
      poster: '/images/explainer-visuals-thumbnail.svg',
      fit: 'contain',
    },
  },
  {
    slug: 'loopmanager',
    title: 'LoopManager',
    role: 'Redesign & custom CMS',
    year: '2024',
    summary:
      "Website redesign for nuVector's returnable asset software, moved from WordPress to Astro to match a new explainer video, <strong>with a custom blog CMS so the marketing team could publish without a developer.</strong>",
    tags: ['Astro', 'Figma', 'Custom CMS', 'HLS video'],
    video: {
      mp4: '/videos/loopmanager-thumbnail.mp4',
      poster: '/images/loopmanager-thumbnail.svg',
      fit: 'contain',
    },
  },
  {
    slug: 'nuvector',
    title: 'nuVector',
    role: 'Corporate site redesign',
    year: '2024 to 2025',
    summary:
      "Redesign and rebuild of the corporate site for an Atlanta returnable asset management company, <strong>rebuilt on Astro</strong> with services, client logos, case studies and an SEO blog, all pointed at one action: request a demo.",
    tags: ['Astro', 'HTML & CSS', 'JavaScript', 'Figma', 'SEO'],
    video: {
      mp4: '/videos/nuvector-thumbnail.mp4',
      webm: '/videos/nuvector-thumbnail.webm',
      poster: '/images/nuvector-thumbnail.webp',
      fit: 'cover',
    },
  },
  {
    slug: 'jonathan-zalzman',
    title: 'Jonathan Zalzman Guitar',
    role: 'Design & development',
    year: '2026',
    summary:
      'Lesson booking site for a working musician in Suwanee, Georgia: nine teaching styles, transparent pricing, and <strong>a free trial lesson CTA that follows you down the page.</strong>',
    tags: ['HTML & CSS', 'JavaScript', 'Netlify Forms', 'Local business'],
    video: {
      mp4: '/videos/jonathan-zalzman-thumbnail.mp4',
      webm: '/videos/jonathan-zalzman-thumbnail.webm',
      poster: '/images/jonathan-zalzman-thumbnail.webp',
      fit: 'cover',
    },
    liveUrl: 'https://jonathanzalzmanguitar.netlify.app',
  },
  {
    slug: 'landscaper-templates',
    title: 'Landscaper Templates',
    role: 'Template system',
    year: '2026',
    summary:
      'Three ready-to-customize website templates for landscaping companies. <strong>Intentionally generic</strong>, so a business owner can see the layout, the flow and the speed before I make it theirs.',
    tags: ['HTML & CSS', 'JavaScript', 'Netlify', 'Templates'],
    video: {
      mp4: '/videos/landscaper-templates-thumbnail.mp4',
      webm: '/videos/landscaper-templates-thumbnail.webm',
      poster: '/images/landscaper-templates-thumbnail.webp',
      fit: 'cover',
    },
    liveUrl: 'https://landscapertemplates.netlify.app',
  },
  {
    slug: 'panda',
    title: "Panda's Playhouse",
    role: 'Wix Studio build',
    year: '2023',
    summary:
      "Membership site for an online gaming community with 5,000+ members: <strong>facial verification for sign-ups, a members-only area and a virtual currency system</strong>, built on Wix Studio with Velo.",
    tags: ['Wix Studio', 'JavaScript (Velo)', 'Third-party APIs', 'Figma'],
    video: {
      mp4: '/videos/panda-playhouse-thumbnail.mp4',
      poster: '/images/panda-thumbnail.svg',
      fit: 'contain',
    },
  },
  {
    slug: '3',
    title: 'MMA Class Tracker',
    role: 'Side project',
    year: '2023',
    summary:
      'A web app that <strong>gamifies showing up to martial arts class</strong>: EXP bars, level-ups and new characters, synced across devices with Firebase.',
    tags: ['JavaScript', 'Firebase', 'Netlify'],
    video: {
      mp4: '/videos/mma-thumbnail.mp4',
      poster: '/images/mma-thumbnail.svg',
      fit: 'contain',
    },
  },
];
