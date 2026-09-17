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
    role: 'Website redesign and marketing',
    year: '2024 to present',
    featured: true,
    summary:
      'I redesigned the marketing website for TimeClick, a time clock software company used by thousands of small businesses, and built the CRM, checkout and email systems that support it. The main goal of the site is to get the right visitors to start a free trial.',
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
    role: 'Homepage rebuild and SEO',
    year: '2026',
    summary:
      'I rebuilt the homepage for a used oil collection company that operates in 28 states, and I run their SEO program: local SEO, Google Business Profile listings and lead tracking.',
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
          role: 'Founder',
          year: '2026 to present',
          summary:
            'My own product. Clox is a time-tracking app for small field crews in the trades, with native iOS and Android apps, a web dashboard and a marketing site. I designed, built and market it myself.',
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
    role: 'Design and development',
    year: '2024',
    summary:
      'A portfolio website for a video production studio. Every video on the page plays automatically, so I built the site on Astro and converted the videos to HLS playlists to keep it fast.',
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
    role: 'Redesign and custom CMS',
    year: '2024',
    summary:
      "A redesign of the website for nuVector's LoopManager software. I moved it from WordPress to Astro to match a new explainer video and built a custom blog CMS so the marketing team could publish posts without a developer.",
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
    role: 'Company website redesign',
    year: '2024 to 2025',
    summary:
      "A redesign and rebuild of nuVector's company website on Astro, with services, client logos, case studies and an SEO blog. The main call to action on the site is a demo request.",
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
    role: 'Design and development',
    year: '2026',
    summary:
      'A website for a guitar teacher in Suwanee, Georgia. It covers the nine styles he teaches, his pricing, student reviews and a form to book a free trial lesson.',
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
    role: 'Website templates',
    year: '2026',
    summary:
      'Three website templates for landscaping companies. They are intentionally generic so a business owner can see the layout and speed first. I then customize the one they choose.',
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
      'A membership website for an online gaming community with more than 5,000 members, built on Wix Studio with Velo. It includes facial verification for new sign-ups, a members-only area and a virtual currency system.',
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
      'A small web app my friends and I use to track martial arts classes. Attendance earns experience points and levels, and progress syncs across devices with Firebase.',
    tags: ['JavaScript', 'Firebase', 'Netlify'],
    video: {
      mp4: '/videos/mma-thumbnail.mp4',
      poster: '/images/mma-thumbnail.svg',
      fit: 'contain',
    },
  },
];
