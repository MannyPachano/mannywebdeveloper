import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_BIiRwBcH.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_D7S2DZ9P.mjs';
import { $ as $$ProjectHero } from '../chunks/ProjectHero_boKKaTTM.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$WebDeveloperProjectLoopmanager = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WebDeveloperProjectLoopmanager;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectHero", $$ProjectHero, { "title": "LoopManager", "description": "nuVector needed to revamp the website for their main product, LoopManager. They needed an aesthetic that would go well with their new animated explainer video.", "buttontext": "demo link", "link": "https://loopmanager.com" })} ${maybeRenderHead()}<div class="project-summary-section"> <div class="project-summary-container"> <!-- video --> <div class="project-summary-video"> <div class="video-nav"> <div class="video-nav-btn" id="video-nav-prev"> <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img" style="transform: rotate(225deg);"> <rect x="13.8" y="8.3999" width="1.8" height="1.8" fill="var(--text-header)"></rect> <rect x="15.6001" y="6.6001" width="1.8" height="1.8" fill="var(--text-header)"></rect> <rect x="15.6001" y="10.2002" width="1.8" height="1.8" fill="var(--text-header)"></rect> <rect x="15.6001" y="8.3999" width="1.8" height="1.8" fill="var(--text-header)"></rect> <rect x="12" y="6.6001" width="1.8" height="1.8" fill="var(--text-header)"></rect> <rect x="13.8" y="6.6001" width="1.8" height="1.8" fill="var(--text-header)"></rect> <rect x="12" y="10.2002" width="1.8" height="1.8" fill="var(--text-header)"></rect> <rect x="10.2002" y="12" width="1.8" height="1.8" fill="var(--text-header)"></rect> <rect x="6.6001" y="15.6001" width="1.8" height="1.8" fill="var(--text-header)"></rect> </svg> </div> <div class="video-titles-container"> <!-- spans hides text in very small screens --> <p class="video-title">Intro<span>ducing the product</span></p> <p class="video-title"><span>Showcasing the </span>value</p> <p class="video-title">Footer</p> </div> <div class="video-nav-btn" id="video-nav-next"> <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img" style="transform: rotate(45deg)"> <rect x="13.8" y="8.3999" width="1.8" height="1.8" fill="var(--text-header)"></rect> <rect x="15.6001" y="6.6001" width="1.8" height="1.8" fill="var(--text-header)"></rect> <rect x="15.6001" y="10.2002" width="1.8" height="1.8" fill="var(--text-header)"></rect> <rect x="15.6001" y="8.3999" width="1.8" height="1.8" fill="var(--text-header)"></rect> <rect x="12" y="6.6001" width="1.8" height="1.8" fill="var(--text-header)"></rect> <rect x="13.8" y="6.6001" width="1.8" height="1.8" fill="var(--text-header)"></rect> <rect x="12" y="10.2002" width="1.8" height="1.8" fill="var(--text-header)"></rect> <rect x="10.2002" y="12" width="1.8" height="1.8" fill="var(--text-header)"></rect> <rect x="6.6001" y="15.6001" width="1.8" height="1.8" fill="var(--text-header)"></rect> </svg> </div> </div> <div class="videos-container"> <div class="placeholder-img project-media-item" style="background-image: url(/images/loopmanager-intro.svg);"> <video class="project-video-item" playsinline autoplay muted loop src="videos/web-development-project-loopmanager-intro.mp4"></video> </div> <div class="placeholder-img project-media-item" style="background-image: url(/images/loopmanager-value.svg);"> <video class="project-video-item" playsinline autoplay muted loop src="videos/web-development-project-loopmanager-value.mp4"></video> </div> <div class="placeholder-img project-media-item" style="background-image: url(/images/loopmanager-footer.svg);"> <video class="project-video-item" playsinline autoplay muted loop src="videos/web-development-project-loopmanager-footer.mp4"></video> </div> </div> </div> <!-- Copy --> <div class="project-summary-copy"> <div> <h3>Project Overview</h3> <p>nuVector is a tech company that focuses on returnable asset management solutions. They needed to revamp the website for their flagship product, LoopManager, so that it would align with their newly produced explainer video. They would need consistent branding across the site, along with a fresh and engaging design. </p><br> <p>We used Figma's collaborative features throughout the initial designs, which allowed decision makers to stay in the loop throughout the entire journey. As we progressed to the development of the site, I suggested that we move the site from WordPress to the relatively new Astro JS platform in order to make the videos on the site load faster. The videos were converted from mp4's to m3u playlists using a custom script that would allow for an ultra-fast video loading experience.</p><br> <p>Since their marketing strategy included publishing new blog posts on a bi-monthly basis, I created a custom content management system that would allow their marketing director to write and publish new blog posts on her own, quickly and easily with absolutely zero coding. The team at nuVector were delighted with their new website. Check out the live site below.</p><br> </div> <!-- Tools Used --> <div> <h3>Tools Used</h3> <ul class="skills-list"> <li>HTML</li> <li>CSS</li> <li>JavaScript</li> <li>Astro JS</li> <li>WordPress</li> <li>Figma</li> <li>Photoshop</li> <li>Canva</li> <li>ChatGPT</li> </ul> </div> <!-- Button Links --> <div> <h3>See It Live</h3> <div class="project-summary-btns"> <a href="https://loopmanager.com" target="_blank"> <button class="button-small project-link">demo link</button> </a> <a href="/#project-section"> <button class="button-small project-back-btn">go back</button> </a> </div> </div> </div> </div> </div> ` })}`;
}, "/Users/manuelpachano/Documents/GitHub/mannywebdeveloper/src/pages/web-developer-project-loopmanager.astro", void 0);

const $$file = "/Users/manuelpachano/Documents/GitHub/mannywebdeveloper/src/pages/web-developer-project-loopmanager.astro";
const $$url = "/web-developer-project-loopmanager";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$WebDeveloperProjectLoopmanager,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
