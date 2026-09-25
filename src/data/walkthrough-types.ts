// ---------------------------------------------------------------------------
// WALKTHROUGH TYPES
// One shape for every walkthrough page: the landing pages (/landing-page-<slug>)
// and the project case studies (/web-developer-project-<slug>). The page
// template is src/components/WalkthroughPage.astro. Blocks marked optional are
// skipped when the entry does not have them.
// ---------------------------------------------------------------------------

export type Screenshot = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

/** A short recording that plays in place of the screenshot; the screenshot stays as its poster. */
export type ShotVideo = {
  mp4: string;
  webm?: string;
};

export type Captioned = Screenshot & {
  caption: string;
  video?: ShotVideo;
};

export type WalkthroughSection = {
  /** Short name, e.g. "Hero" */
  title: string;
  /** One to three plain sentences: what the section does and how it was built. */
  caption: string;
  alt: string;
  /** Default crop (variant A). */
  src: string;
  /** Optional second variant (B), shown when the switch is set to B. */
  srcB?: string;
  /** Optional recording shown instead of the image; src is then the poster. */
  video?: ShotVideo;
  width: number;
  height: number;
};

/** Two versions of the same screen behind one draggable divider. */
export type Compare = {
  /** Label for the base image, shown on the left. */
  labelA: string;
  /** Label for the top image, revealed on the right. */
  labelB: string;
  a: string;
  b: string;
  width: number;
  height: number;
  /** Describes the screen (used for the base image). */
  alt: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Gallery = {
  title: string;
  intro?: string;
  /** 2 or 3 columns on desktop. */
  columns?: 2 | 3;
  items: Captioned[];
};

export type Walkthrough = {
  slug: string;
  title: string;
  /** Small label above the title, e.g. "Case study" or "Landing page" */
  eyebrow: string;
  /** Who the site is for */
  client: string;
  /** Short label for the card, e.g. "Concept redesign" */
  kind: string;
  role: string;
  year: string;
  liveUrl?: string;
  liveLabel?: string;
  /** Address to draw in the browser frame when there is no live site to link to. */
  frameUrl?: string;
  /** Card text, rendered by LandingPageCard from landing-pages.ts. Project case
   *  studies carry this field too because they share this type, but nothing
   *  renders it for them: their homepage card comes from projects.ts.
   *  Inline <strong> is allowed. */
  summary: string;
  tags: string[];
  /** One or two sentences under the title. */
  description: string;
  /** Meta description. */
  pageDescription: string;
  pageTitle?: string;
  /** Extra rows in the facts strip, after Client, My role and Year. */
  facts?: { label: string; value: string }[];
  /** First screen. Shown in a browser frame when there is no compare slider. */
  hero: Screenshot;
  /** Optional slider on top of the page (and on the card). */
  compare?: Compare;
  heroCaption?: string;
  /** Three or four numbers under the first screen. */
  highlights?: Stat[];
  overviewTitle: string;
  /** Paragraphs. Inline HTML like <strong> and <a> is allowed. */
  overview: string[];
  /** Optional results block, e.g. SEO numbers with charts. */
  results?: {
    title: string;
    intro?: string;
    stats?: Stat[];
    figures?: Captioned[];
    /** Paragraphs after the figures. Inline HTML allowed. */
    paragraphs?: string[];
  };
  walkthroughIntro: string;
  /** Labels for the A/B switch. Only used when sections have srcB. */
  sectionVariants?: { a: string; b: string };
  sections: WalkthroughSection[];
  /** Optional image grids, e.g. app screens, or other pages of the same site. */
  galleries?: Gallery[];
  phonesIntro: string;
  /** Portrait screens (6:13). The first one is also shown on landing page cards. */
  phones: Captioned[];
  /** Optional second row of phones, e.g. the old site for a before/after. */
  phonesB?: { intro: string; items: Captioned[] };
  details: { design: string[]; build: string[]; marketing?: string[] };
  tools: string[];
  /** Where the back buttons go. */
  backHref: string;
  backLabel: string;
};
