/**
 * Generates copy-inventory.md: every piece of visible copy on the site, with
 * where it lives and what job it does, in the order a visitor meets it.
 *
 * The data files are the source of truth, so they are imported directly
 * rather than parsed with regexes. Astro components are extracted from their
 * template section.
 *
 * Run:  npm run copy-inventory
 */
import { readFile, writeFile } from 'node:fs/promises';
import { projects } from '../src/data/projects.ts';
import { projectWalkthroughs } from '../src/data/project-walkthroughs.ts';
import { landingPages } from '../src/data/landing-pages.ts';

/* What each field of a walkthrough entry is for. Written once here rather than
   repeated per entry, because the job of a field never changes. */
const FIELD_JOB = {
  summary: 'Card text in the homepage grid. This is the first thing a visitor reads about this page. Inline <strong> allowed.',
  description: 'One or two sentences directly under the page title.',
  pageDescription: 'Meta description. Shown in search results and link previews, never on the page itself. Aim for 150 to 160 characters.',
  pageTitle: 'Browser tab title and search result headline.',
  heroCaption: 'Caption under the first screenshot.',
  overviewTitle: 'Heading above the overview paragraphs.',
  overview: 'Overview paragraphs. The main prose: what the page had to do and how it was approached.',
  walkthroughIntro: 'One line introducing the section-by-section walkthrough below it.',
  'sections.title': 'Short name of one section of the page being walked through.',
  'sections.caption': 'One to three sentences under a section screenshot: what that section does and how it was built.',
  phonesIntro: 'One line introducing the phone screenshots.',
  'phones.caption': 'Caption under one phone screenshot.',
  'highlights.value': 'Large text of a stat tile under the first screen. Usually two or three words.',
  'highlights.label': 'Explaining line under a stat tile value.',
  'details.design': 'Bullet in the Design notes list.',
  'details.build': 'Bullet in the Build notes list.',
  'details.marketing': 'Bullet in the Marketing notes list.',
  'results.title': 'Heading of the results block.',
  'results.intro': 'Intro line of the results block.',
  'results.paragraphs': 'Paragraph in the results block.',
  'results.stats.value': 'Large text of a results stat.',
  'results.stats.label': 'Explaining line under a results stat.',
  'results.figures.caption': 'Caption under a results chart or screenshot.',
  'galleries.title': 'Heading of an image grid.',
  'galleries.intro': 'Intro line of an image grid.',
  'galleries.items.caption': 'Caption under one image in a grid.',
  'facts.label': 'Label in the facts strip near the top of the page.',
  'facts.value': 'Value in the facts strip.',
  'compare.labelA': 'Label on the left side of the before/after slider.',
  'compare.labelB': 'Label on the right side of the before/after slider.',
  heroAlt: 'Alt text for the first screenshot. Read by screen readers, never shown.',
  backLabel: 'Text of the back link at the bottom of the page.',
};

const META_FIELDS = ['eyebrow', 'client', 'kind', 'role', 'year', 'liveLabel'];

function esc(s) {
  return String(s).replace(/\r/g, '').trim();
}

function block(out, label, path, text, job) {
  if (text === undefined || text === null || esc(text) === '') return;
  out.push(`#### ${label}`);
  out.push(`\`${path}\``);
  if (job) out.push(`*${job}*`);
  out.push('');
  out.push('```');
  out.push(esc(text));
  out.push('```');
  out.push('');
}

function walkEntry(out, file, entry, kindLabel) {
  const id = entry.slug;
  out.push(`### ${entry.title}`);
  out.push('');
  out.push(`**Page:** \`/${kindLabel}-${id}\`  `);
  const meta = META_FIELDS.filter((k) => entry[k]).map((k) => `${k}: ${entry[k]}`).join(' · ');
  if (meta) out.push(`**Fixed labels (not prose, do not rewrite):** ${meta}  `);
  if (entry.tags?.length) out.push(`**Tags:** ${entry.tags.join(', ')}  `);
  if (entry.tools?.length) out.push(`**Tools:** ${entry.tools.join(', ')}  `);
  out.push('');

  const p = (f) => `${file} → ${id}.${f}`;

  block(out, 'summary', p('summary'), entry.summary, FIELD_JOB.summary);
  block(out, 'description', p('description'), entry.description, FIELD_JOB.description);
  block(out, 'pageTitle', p('pageTitle'), entry.pageTitle, FIELD_JOB.pageTitle);
  block(out, 'pageDescription', p('pageDescription'), entry.pageDescription, FIELD_JOB.pageDescription);

  (entry.facts || []).forEach((f, i) => {
    block(out, `facts[${i}]`, p(`facts[${i}]`), `${f.label}: ${f.value}`, FIELD_JOB['facts.label']);
  });

  if (entry.compare) {
    block(out, 'compare.labelA', p('compare.labelA'), entry.compare.labelA, FIELD_JOB['compare.labelA']);
    block(out, 'compare.labelB', p('compare.labelB'), entry.compare.labelB, FIELD_JOB['compare.labelB']);
  }

  block(out, 'heroCaption', p('heroCaption'), entry.heroCaption, FIELD_JOB.heroCaption);

  (entry.highlights || []).forEach((h, i) => {
    block(out, `highlights[${i}]`, p(`highlights[${i}]`), `${h.value} — ${h.label}`,
      'Stat tile under the first screen. Format is: large value, then an explaining line.');
  });

  block(out, 'overviewTitle', p('overviewTitle'), entry.overviewTitle, FIELD_JOB.overviewTitle);
  (entry.overview || []).forEach((t, i) => block(out, `overview[${i}]`, p(`overview[${i}]`), t, FIELD_JOB.overview));

  if (entry.results) {
    const r = entry.results;
    block(out, 'results.title', p('results.title'), r.title, FIELD_JOB['results.title']);
    block(out, 'results.intro', p('results.intro'), r.intro, FIELD_JOB['results.intro']);
    (r.stats || []).forEach((s, i) => block(out, `results.stats[${i}]`, p(`results.stats[${i}]`), `${s.value} — ${s.label}`, FIELD_JOB['results.stats.label']));
    (r.figures || []).forEach((f, i) => block(out, `results.figures[${i}].caption`, p(`results.figures[${i}].caption`), f.caption, FIELD_JOB['results.figures.caption']));
    (r.paragraphs || []).forEach((t, i) => block(out, `results.paragraphs[${i}]`, p(`results.paragraphs[${i}]`), t, FIELD_JOB['results.paragraphs']));
  }

  block(out, 'walkthroughIntro', p('walkthroughIntro'), entry.walkthroughIntro, FIELD_JOB.walkthroughIntro);

  (entry.sections || []).forEach((s, i) => {
    block(out, `sections[${i}].title`, p(`sections[${i}].title`), s.title, FIELD_JOB['sections.title']);
    block(out, `sections[${i}].caption`, p(`sections[${i}].caption`), s.caption, FIELD_JOB['sections.caption']);
  });

  (entry.galleries || []).forEach((g, gi) => {
    block(out, `galleries[${gi}].title`, p(`galleries[${gi}].title`), g.title, FIELD_JOB['galleries.title']);
    block(out, `galleries[${gi}].intro`, p(`galleries[${gi}].intro`), g.intro, FIELD_JOB['galleries.intro']);
    (g.items || []).forEach((it, ii) =>
      block(out, `galleries[${gi}].items[${ii}].caption`, p(`galleries[${gi}].items[${ii}].caption`), it.caption, FIELD_JOB['galleries.items.caption']));
  });

  block(out, 'phonesIntro', p('phonesIntro'), entry.phonesIntro, FIELD_JOB.phonesIntro);
  (entry.phones || []).forEach((ph, i) =>
    block(out, `phones[${i}].caption`, p(`phones[${i}].caption`), ph.caption, FIELD_JOB['phones.caption']));
  if (entry.phonesB) {
    block(out, 'phonesB.intro', p('phonesB.intro'), entry.phonesB.intro, FIELD_JOB.phonesIntro);
    (entry.phonesB.items || []).forEach((ph, i) =>
      block(out, `phonesB.items[${i}].caption`, p(`phonesB.items[${i}].caption`), ph.caption, FIELD_JOB['phones.caption']));
  }

  for (const group of ['design', 'build', 'marketing']) {
    (entry.details?.[group] || []).forEach((t, i) =>
      block(out, `details.${group}[${i}]`, p(`details.${group}[${i}]`), t, FIELD_JOB[`details.${group}`]));
  }

  out.push('---');
  out.push('');
}

/* Astro components. Source wraps paragraphs across lines, so inline tags are
   removed first, block tags become paragraph breaks, and each chunk is rejoined
   into one line. Anything shorter than that gets lost: "the page.", "About me"
   and every form label are real copy. */
const INLINE = /<\/?(strong|em|b|i|a|span|code|small|br|abbr|sup)\b[^>]*>/gi;

function flatten(src) {
  src = src.replace(/^---[\s\S]*?---/, '');
  src = src.replace(/<style[\s\S]*?<\/style>/g, '');
  src = src.replace(/<script[\s\S]*?<\/script>/g, '');
  src = src.replace(/<svg[\s\S]*?<\/svg>/g, '');
  src = src.replace(/<!--[\s\S]*?-->/g, '');
  /* Flatten simple expressions so conditional copy stays visible and a bare
     interpolation like {year} is not silently swallowed. */
  src = src.replace(/\{([^{}]*)\}/g, (m, inner) => {
    const strs = [...inner.matchAll(/'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"/g)]
      .map((x) => (x[1] ?? x[2] ?? '').trim())
      .filter((t) => /[a-z]/i.test(t));
    if (strs.length) return ` [shown conditionally: ${strs.join(' | ')}] `;
    if (/^[a-zA-Z0-9_.]+$/.test(inner.trim())) return ` [${inner.trim()}] `;
    return ' ';
  });
  src = src.replace(INLINE, '');
  src = src.replace(/<[^>]+>/g, '\n\n');
  return src
    .split(/\n\s*\n+/)
    .map((c) => c.split('\n').map((l) => l.trim()).filter(Boolean).join(' ').trim())
    .filter((c) => c && !c.includes('{') && !c.includes('}') && /[a-zA-Z]/.test(c));
}

/* Nav labels, skill groups, the experience list and the form options are data
   in the frontmatter, not template text, so they never survive tag stripping. */
function frontmatter(src) {
  const m = src.match(/^---([\s\S]*?)---/);
  if (!m) return null;
  const body = m[1].trim();
  return /['"][^'"]*[a-zA-Z][^'"]*['"]/.test(body) ? body : null;
}

async function astroCopy(out, file, heading, job) {
  const src = await readFile(file, 'utf8');
  const runs = flatten(src);
  const fm = frontmatter(src);
  if (!runs.length && !fm) return;
  out.push(`### ${heading}`);
  out.push('');
  out.push(`**File:** \`${file}\`  `);
  out.push(`*${job}*`);
  out.push('');
  if (runs.length) {
    out.push('Visible text, in page order:');
    out.push('');
    out.push('```');
    runs.forEach((r) => out.push(r));
    out.push('```');
    out.push('');
  }
  if (fm) {
    out.push('Labels and list items defined at the top of the same file:');
    out.push('');
    out.push('```ts');
    out.push(fm);
    out.push('```');
    out.push('');
  }
  out.push('---');
  out.push('');
}

/* Five case studies are standalone pages passing props to CaseStudyLayout
   rather than entries in the data file. Their copy lives in those props. */
function propString(src, name) {
  const m = src.match(new RegExp(name + '="((?:[^"\\\\]|\\\\.)*)"'));
  return m ? m[1] : undefined;
}

function propArray(src, name, minWords = 1) {
  const i = src.indexOf(name + '={[');
  if (i < 0) return [];
  let j = src.indexOf('[', i), d = 0, k = j;
  for (; k < src.length; k++) {
    if (src[k] === '[') d++;
    else if (src[k] === ']') { d--; if (d === 0) break; }
  }
  const body = src.slice(j, k + 1);
  return [...body.matchAll(/'((?:[^'\\]|\\.)+)'|"((?:[^"\\]|\\.)+)"/g)]
    .map((m) => (m[1] ?? m[2] ?? '').replace(/\\'/g, "'"))
    .filter((t) => !t.includes('/') && t.split(/\s+/).length >= minWords);
}

async function caseStudyPage(out, file, slug) {
  const src = await readFile(file, 'utf8');
  const title = propString(src, 'title') || slug;
  out.push(`### ${title}`);
  out.push('');
  out.push(`**Page:** \`/web-developer-project-${slug}\`  `);
  out.push(`**Note:** this case study is a standalone Astro page, not an entry in the data file.  `);
  const meta = ['client', 'role', 'year'].map((k) => [k, propString(src, k)]).filter(([, v]) => v);
  if (meta.length) out.push(`**Fixed labels (not prose, do not rewrite):** ${meta.map(([k, v]) => `${k}: ${v}`).join(' · ')}  `);
  const tools = propArray(src, 'tools');
  if (tools.length) out.push(`**Tools:** ${tools.join(', ')}  `);
  out.push('');

  const p = (f) => `${file} → ${f}`;
  block(out, 'title', p('title'), title, 'Page title, shown as the main heading.');
  block(out, 'pageTitle', p('pageTitle'), propString(src, 'pageTitle'), FIELD_JOB.pageTitle);
  block(out, 'description', p('description'), propString(src, 'description'), FIELD_JOB.description);
  propArray(src, 'slides', 2).forEach((t, i) =>
    block(out, `slides[${i}].title`, p(`slides[${i}].title`), t, 'Short label above one screenshot or video.'));
  propArray(src, 'highlights', 2).forEach((t, i) =>
    block(out, `highlights[${i}]`, p(`highlights[${i}]`), t,
      'Stat tile under the first screen. These come in value and label pairs, in order.'));
  propArray(src, 'overview', 4).forEach((t, i) =>
    block(out, `overview[${i}]`, p(`overview[${i}]`), t, FIELD_JOB.overview));
  out.push('---');
  out.push('');
}

const HEADER = await readFile('tools/copy-inventory-header.md', 'utf8');

const out = [HEADER, ''];

out.push('## 1. Homepage');
out.push('');
await astroCopy(out, 'src/components/Header.astro', 'Navigation', 'Site navigation and the logo label. Present on every page.');
await astroCopy(out, 'src/components/Hero.astro', 'Hero', 'The first screen of the homepage. Headline, one paragraph, two buttons, and a line naming recent work.');
await astroCopy(out, 'src/components/About.astro', 'About', 'Second section of the homepage: who he is, background, skills and tools, and a work history list.');
await astroCopy(out, 'src/components/Projects.astro', 'Projects section intro', 'Heading and intro above the project card grid.');
await astroCopy(out, 'src/components/LandingPages.astro', 'Landing pages section intro', 'Heading and intro above the landing page card grid.');
await astroCopy(out, 'src/components/Contact.astro', 'Contact', 'Contact heading, intro, and every form label and placeholder.');
await astroCopy(out, 'src/components/Footer.astro', 'Footer', 'Site footer, present on every page.');

out.push('## 2. Project cards on the homepage');
out.push('');
out.push('*Each card shows: title, role, year, and the summary below. Clicking through goes to the case study page of the same name in section 3.*');
out.push('');
for (const p of projects) {
  out.push(`#### ${p.title}`);
  out.push(`\`src/data/projects.ts → ${p.slug}.summary\``);
  out.push(`*Card summary. Role: ${p.role}. Year: ${p.year}. Tags: ${p.tags.join(', ')}.*`);
  out.push('');
  out.push('```');
  out.push(esc(p.summary));
  out.push('```');
  out.push('');
}
out.push('---');
out.push('');

out.push('## 3. Project case study pages');
out.push('');
for (const w of projectWalkthroughs) walkEntry(out, 'src/data/project-walkthroughs.ts', w, 'web-developer-project');

for (const [file, slug] of [
  ['src/pages/web-developer-project-explainer-visuals.astro', 'explainer-visuals'],
  ['src/pages/web-developer-project-loopmanager.astro', 'loopmanager'],
  ['src/pages/web-developer-project-nuvector.astro', 'nuvector'],
  ['src/pages/web-developer-project-panda.astro', 'panda'],
  ['src/pages/web-developer-project-3.astro', '3'],
]) await caseStudyPage(out, file, slug);

out.push('## 4. Landing page walkthroughs');
out.push('');
for (const w of landingPages) walkEntry(out, 'src/data/landing-pages.ts', w, 'landing-page');

await writeFile('copy-inventory.md', out.join('\n'), 'utf8');

const words = out.join(' ').split(/\s+/).length;
console.log('Wrote copy-inventory.md');
console.log('  entries:', projectWalkthroughs.length + landingPages.length + projects.length);
console.log('  approx words:', words);
