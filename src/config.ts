// Site-wide constants. Import from here instead of hard-coding URLs or titles.

export const SITE = {
  url: 'https://websitesbymanny.netlify.app',
  name: 'Manny Pachano',
  title: 'Manny Pachano | Front-End Developer & Marketing Specialist',
  description:
    'Front-end developer and marketing specialist. I build and maintain websites for software companies and small businesses in the US. Case studies for TimeClick, Universal Environmental Services, nuVector and others.',
  ogImage: '/images/og-image.jpg',
} as const;

// ---------------------------------------------------------------------------
// TEMPORARY CONTENT SWITCH
// Every mention of Clox on the site is wrapped in `SHOW_CLOX`.
// To remove Clox from the whole site: set this to false, commit, deploy. Done.
// ---------------------------------------------------------------------------
export const SHOW_CLOX = true;
