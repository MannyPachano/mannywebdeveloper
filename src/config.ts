// Site-wide constants. Import from here instead of hard-coding URLs or titles.

export const SITE = {
  url: 'https://websitesbymanny.netlify.app',
  name: 'Manny Pachano',
  title: 'Manny Pachano | Front-End Developer & Marketing Specialist',
  description:
    'Front-end developer and marketing specialist building fast, conversion-focused websites for small businesses and software companies. Case studies for TimeClick, Universal Environmental Services and more.',
  ogImage: '/images/og-image.jpg',
} as const;

// ---------------------------------------------------------------------------
// TEMPORARY CONTENT SWITCH
// Every mention of Clox on the site is wrapped in `SHOW_CLOX`.
// To remove Clox from the whole site: set this to false, commit, deploy. Done.
// ---------------------------------------------------------------------------
export const SHOW_CLOX = true;
