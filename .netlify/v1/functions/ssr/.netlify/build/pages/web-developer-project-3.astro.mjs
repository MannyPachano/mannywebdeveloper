import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BIiRwBcH.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_D7S2DZ9P.mjs';
import { $ as $$ProjectHero } from '../chunks/ProjectHero_boKKaTTM.mjs';
export { renderers } from '../renderers.mjs';

const $$WebDeveloperProject3 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectHero", $$ProjectHero, { "title": "MMA Class Tracker", "description": "A web application that makes it easy to keep track of your mma classes. Features include EXP progress bars and new characters as you level up.", "buttontext": "demo link", "link": "https://mma-fighter-stats.netlify.app/" })} ${maybeRenderHead()}<div class="project-summary-section"> <div class="project-summary-container"> <div class="project-summary-video"> <div class="videos-container"> <div class="placeholder-img project-media-item" style="background-image: url(/images/mma.svg);"> <video class="project-video-item" playsinline autoplay muted loop src="videos/web-development-project-mma.mp4"></video> </div> </div> </div> <div class="project-summary-copy"> <div> <h3>Project Overview</h3> <p>My friends and I needed a way to motivate ourselves to show up to our martial arts classes. I decided this would be  a good opportunity to practice my skills in design responsiveness and create a web app that would allow us to keep track of our mma classes in a fun way.</p><br> <p>I used HTML, CSS, and Javascript for the frontend, and Google's firebase database to keep track of our progress across devices. The app is 100% responsive across screen sizes and features animated progress bars that increase every time you attend a class. Every time you attend a class, you'll see your experience points increase, with each type of class featuring a different amount of EXP points according to that class's difficulty.</p><br> </div> <div> <h3>Tools Used</h3> <ul class="skills-list"> <li>HTML</li> <li>CSS</li> <li>JavaScript</li> <li>SQL</li> <li>Google Firebase</li> <li>Github</li> <li>Netlify</li> </ul> </div> <div> <h3>See It Live</h3> <div class="project-summary-btns"> <a href="https://mma-fighter-stats.netlify.app/" target="”_blank”"> <button class="button-small project-link">live link</button> </a> <a href="/#project-section"> <button class="button-small project-back-btn">go back</button> </a> </div> </div> </div> </div> </div> ` })}`;
}, "/Users/manuelpachano/Documents/GitHub/mannywebdeveloper/src/pages/web-developer-project-3.astro", void 0);

const $$file = "/Users/manuelpachano/Documents/GitHub/mannywebdeveloper/src/pages/web-developer-project-3.astro";
const $$url = "/web-developer-project-3";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$WebDeveloperProject3,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
