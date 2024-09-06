import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_mdSuZk_d.mjs';
import { onRequest } from './_noop-middleware.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/web-developer-project-3.astro.mjs');
const _page2 = () => import('./pages/web-developer-project-explainer-visuals.astro.mjs');
const _page3 = () => import('./pages/web-developer-project-loopmanager.astro.mjs');
const _page4 = () => import('./pages/web-developer-project-panda.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/web-developer-project-3.astro", _page1],
    ["src/pages/web-developer-project-explainer-visuals.astro", _page2],
    ["src/pages/web-developer-project-loopmanager.astro", _page3],
    ["src/pages/web-developer-project-panda.astro", _page4],
    ["src/pages/index.astro", _page5]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "1f56833a-dbab-4ade-84d7-6c9e86dc1c4f"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
