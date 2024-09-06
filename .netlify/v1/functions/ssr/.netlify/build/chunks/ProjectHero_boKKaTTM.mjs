import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_BIiRwBcH.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                           */

const $$Astro = createAstro();
const $$ProjectHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectHero;
  const { title, description, buttontext, link, nodisplay = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="hero-section" data-astro-cid-cdjvly25> <div class="hero-content" data-astro-cid-cdjvly25> <h1 data-astro-cid-cdjvly25>${title}</h1> <h4 data-astro-cid-cdjvly25>${description}</h4> <a${addAttribute(`${link}`, "href")} target="_blank"${addAttribute(`${nodisplay && "nodisplay"}`, "class")} data-astro-cid-cdjvly25> <button data-astro-cid-cdjvly25>${buttontext}</button> </a> </div> <div class="mouse-section" data-astro-cid-cdjvly25> <div class="mouse" data-astro-cid-cdjvly25></div> </div> </div> `;
}, "/Users/manuelpachano/Documents/GitHub/mannywebdeveloper/src/components/ProjectHero.astro", void 0);

export { $$ProjectHero as $ };
