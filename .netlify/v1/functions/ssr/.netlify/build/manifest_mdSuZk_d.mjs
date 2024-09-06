import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'devalue';
import 'html-escaper';
import 'clsx';
import { g as decodeKey } from './chunks/astro/server_BIiRwBcH.mjs';
import { compile } from 'path-to-regexp';

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/manuelpachano/Documents/GitHub/mannywebdeveloper/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.sTfh_Jdw.js"}],"styles":[{"type":"external","src":"/_astro/index.CpKoVVOY.css"},{"type":"inline","content":".hero-section[data-astro-cid-cdjvly25]{height:calc(100vh - 5rem);min-height:36.5rem;background:linear-gradient(to right,#f5f5f5cc,#f5f5f5cc),url(/images/common-bg.svg);position:relative}.hero-content[data-astro-cid-cdjvly25]{text-align:center;width:92%;max-width:45rem;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1}.mouse-section[data-astro-cid-cdjvly25]{position:absolute;bottom:3%;left:50%;transform:translate(-50%)}.mouse[data-astro-cid-cdjvly25]{width:25px;height:40px;border:2px solid #333;border-radius:60px;position:relative;overflow:hidden}.mouse[data-astro-cid-cdjvly25]:before{content:\"\";width:5px;height:5px;position:absolute;top:7px;left:50%;transform:translate(-50%);background-color:#333;border-radius:50%;opacity:1;animation:scroll 1.3s infinite}@keyframes scroll{to{opacity:0%;top:27px}}.hero-section[data-astro-cid-cdjvly25],.about-section[data-astro-cid-cdjvly25],.projects-section[data-astro-cid-cdjvly25],.contact-section[data-astro-cid-cdjvly25],footer[data-astro-cid-cdjvly25],.project-summary-section[data-astro-cid-cdjvly25]{min-width:320px}.nodisplay[data-astro-cid-cdjvly25]{display:none}\n"}],"routeData":{"route":"/web-developer-project-3","isIndex":false,"type":"page","pattern":"^\\/web-developer-project-3\\/?$","segments":[[{"content":"web-developer-project-3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/web-developer-project-3.astro","pathname":"/web-developer-project-3","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.sTfh_Jdw.js"}],"styles":[{"type":"external","src":"/_astro/index.CpKoVVOY.css"},{"type":"inline","content":".hero-section[data-astro-cid-cdjvly25]{height:calc(100vh - 5rem);min-height:36.5rem;background:linear-gradient(to right,#f5f5f5cc,#f5f5f5cc),url(/images/common-bg.svg);position:relative}.hero-content[data-astro-cid-cdjvly25]{text-align:center;width:92%;max-width:45rem;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1}.mouse-section[data-astro-cid-cdjvly25]{position:absolute;bottom:3%;left:50%;transform:translate(-50%)}.mouse[data-astro-cid-cdjvly25]{width:25px;height:40px;border:2px solid #333;border-radius:60px;position:relative;overflow:hidden}.mouse[data-astro-cid-cdjvly25]:before{content:\"\";width:5px;height:5px;position:absolute;top:7px;left:50%;transform:translate(-50%);background-color:#333;border-radius:50%;opacity:1;animation:scroll 1.3s infinite}@keyframes scroll{to{opacity:0%;top:27px}}.hero-section[data-astro-cid-cdjvly25],.about-section[data-astro-cid-cdjvly25],.projects-section[data-astro-cid-cdjvly25],.contact-section[data-astro-cid-cdjvly25],footer[data-astro-cid-cdjvly25],.project-summary-section[data-astro-cid-cdjvly25]{min-width:320px}.nodisplay[data-astro-cid-cdjvly25]{display:none}\n"}],"routeData":{"route":"/web-developer-project-explainer-visuals","isIndex":false,"type":"page","pattern":"^\\/web-developer-project-explainer-visuals\\/?$","segments":[[{"content":"web-developer-project-explainer-visuals","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/web-developer-project-explainer-visuals.astro","pathname":"/web-developer-project-explainer-visuals","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.sTfh_Jdw.js"}],"styles":[{"type":"external","src":"/_astro/index.CpKoVVOY.css"},{"type":"inline","content":".hero-section[data-astro-cid-cdjvly25]{height:calc(100vh - 5rem);min-height:36.5rem;background:linear-gradient(to right,#f5f5f5cc,#f5f5f5cc),url(/images/common-bg.svg);position:relative}.hero-content[data-astro-cid-cdjvly25]{text-align:center;width:92%;max-width:45rem;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1}.mouse-section[data-astro-cid-cdjvly25]{position:absolute;bottom:3%;left:50%;transform:translate(-50%)}.mouse[data-astro-cid-cdjvly25]{width:25px;height:40px;border:2px solid #333;border-radius:60px;position:relative;overflow:hidden}.mouse[data-astro-cid-cdjvly25]:before{content:\"\";width:5px;height:5px;position:absolute;top:7px;left:50%;transform:translate(-50%);background-color:#333;border-radius:50%;opacity:1;animation:scroll 1.3s infinite}@keyframes scroll{to{opacity:0%;top:27px}}.hero-section[data-astro-cid-cdjvly25],.about-section[data-astro-cid-cdjvly25],.projects-section[data-astro-cid-cdjvly25],.contact-section[data-astro-cid-cdjvly25],footer[data-astro-cid-cdjvly25],.project-summary-section[data-astro-cid-cdjvly25]{min-width:320px}.nodisplay[data-astro-cid-cdjvly25]{display:none}\n"}],"routeData":{"route":"/web-developer-project-loopmanager","isIndex":false,"type":"page","pattern":"^\\/web-developer-project-loopmanager\\/?$","segments":[[{"content":"web-developer-project-loopmanager","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/web-developer-project-loopmanager.astro","pathname":"/web-developer-project-loopmanager","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.sTfh_Jdw.js"}],"styles":[{"type":"external","src":"/_astro/index.CpKoVVOY.css"},{"type":"inline","content":".hero-section[data-astro-cid-cdjvly25]{height:calc(100vh - 5rem);min-height:36.5rem;background:linear-gradient(to right,#f5f5f5cc,#f5f5f5cc),url(/images/common-bg.svg);position:relative}.hero-content[data-astro-cid-cdjvly25]{text-align:center;width:92%;max-width:45rem;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1}.mouse-section[data-astro-cid-cdjvly25]{position:absolute;bottom:3%;left:50%;transform:translate(-50%)}.mouse[data-astro-cid-cdjvly25]{width:25px;height:40px;border:2px solid #333;border-radius:60px;position:relative;overflow:hidden}.mouse[data-astro-cid-cdjvly25]:before{content:\"\";width:5px;height:5px;position:absolute;top:7px;left:50%;transform:translate(-50%);background-color:#333;border-radius:50%;opacity:1;animation:scroll 1.3s infinite}@keyframes scroll{to{opacity:0%;top:27px}}.hero-section[data-astro-cid-cdjvly25],.about-section[data-astro-cid-cdjvly25],.projects-section[data-astro-cid-cdjvly25],.contact-section[data-astro-cid-cdjvly25],footer[data-astro-cid-cdjvly25],.project-summary-section[data-astro-cid-cdjvly25]{min-width:320px}.nodisplay[data-astro-cid-cdjvly25]{display:none}\n"}],"routeData":{"route":"/web-developer-project-panda","isIndex":false,"type":"page","pattern":"^\\/web-developer-project-panda\\/?$","segments":[[{"content":"web-developer-project-panda","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/web-developer-project-panda.astro","pathname":"/web-developer-project-panda","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CMfZyIlV.js"}],"styles":[{"type":"external","src":"/_astro/index.CpKoVVOY.css"},{"type":"external","src":"/_astro/index.Clb8XgrH.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/manuelpachano/Documents/GitHub/mannywebdeveloper/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/manuelpachano/Documents/GitHub/mannywebdeveloper/src/pages/web-developer-project-3.astro",{"propagation":"none","containsHead":true}],["/Users/manuelpachano/Documents/GitHub/mannywebdeveloper/src/pages/web-developer-project-explainer-visuals.astro",{"propagation":"none","containsHead":true}],["/Users/manuelpachano/Documents/GitHub/mannywebdeveloper/src/pages/web-developer-project-loopmanager.astro",{"propagation":"none","containsHead":true}],["/Users/manuelpachano/Documents/GitHub/mannywebdeveloper/src/pages/web-developer-project-panda.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/web-developer-project-3@_@astro":"pages/web-developer-project-3.astro.mjs","\u0000@astro-page:src/pages/web-developer-project-explainer-visuals@_@astro":"pages/web-developer-project-explainer-visuals.astro.mjs","\u0000@astro-page:src/pages/web-developer-project-loopmanager@_@astro":"pages/web-developer-project-loopmanager.astro.mjs","\u0000@astro-page:src/pages/web-developer-project-panda@_@astro":"pages/web-developer-project-panda.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_mdSuZk_d.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.CMfZyIlV.js","/astro/hoisted.js?q=1":"_astro/hoisted.sTfh_Jdw.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.CpKoVVOY.css","/_astro/index.Clb8XgrH.css","/favicon.svg","/_astro/hoisted.CMfZyIlV.js","/_astro/hoisted.sTfh_Jdw.js","/videos/explainer-visuals-thumbnail-full.mp4","/videos/explainer-visuals-thumbnail.mp4","/videos/loopmanager-thumbnail.mp4","/videos/mma-thumbnail.mp4","/videos/panda-playhouse-thumbnail.mp4","/videos/web-development-project-explainer-visuals-footer.mp4","/videos/web-development-project-explainer-visuals-process.mp4","/videos/web-development-project-loopmanager-footer.mp4","/videos/web-development-project-loopmanager-intro.mp4","/videos/web-development-project-loopmanager-value.mp4","/videos/web-development-project-mma.mp4","/videos/web-development-project-pandas-playhouse-development.mp4","/videos/web-development-project-pandas-playhouse-prototype.mp4","/images/common-bg.svg","/images/explainer-visuals-thumbnail.svg","/images/hifi-img.svg","/images/loopmanager-footer.svg","/images/loopmanager-intro.svg","/images/loopmanager-thumbnail.svg","/images/loopmanager-value.svg","/images/man-face.png","/images/manny-img.webp","/images/mma-thumbnail.svg","/images/mma.svg","/images/panda-development.svg","/images/panda-prototype.svg","/images/panda-thumbnail.svg","/images/web-development-project-pandas-playhouse-lofi-wireframe.png","/images/web-development-project-pandas-playhouse-ui-design-full.png","/images/web-development-project-pandas-playhouse-ui-design.png"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"2PaLuIwB2kdwQToY3IoBWsWae13C76P7Nw9+0DwMdAA=","experimentalEnvGetSecretEnabled":false});

export { manifest };
