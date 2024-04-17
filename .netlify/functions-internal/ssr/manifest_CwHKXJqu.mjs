import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_BSP7C2Di.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
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
    const path = toPath(params);
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
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/orders","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/orders\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"orders","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/orders.js","pathname":"/api/orders","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/remove","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/remove\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"remove","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/remove.js","pathname":"/api/remove","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/userssignin","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/usersSignIn\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"usersSignIn","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/usersSignIn.js","pathname":"/api/usersSignIn","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/userssignup","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/usersSignUp\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"usersSignUp","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/usersSignUp.js","pathname":"/api/usersSignUp","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"header[data-astro-cid-sqe6te2j]{color:#acacac;padding:.5rem;display:flex;align-items:center;gap:1rem}header[data-astro-cid-sqe6te2j] img[data-astro-cid-sqe6te2j]{width:190px}section[data-astro-cid-sqe6te2j]{display:flex;flex-direction:column;gap:1rem}.client[data-astro-cid-sqe6te2j]{display:flex;align-items:center;justify-content:space-between;gap:1rem}.table[data-astro-cid-sqe6te2j]{display:flex;flex-direction:column;gap:.5rem}.table-head[data-astro-cid-sqe6te2j]{display:flex;align-items:center;justify-content:space-between;gap:1rem}.table-body[data-astro-cid-sqe6te2j]{display:flex;align-items:center;justify-content:space-between;gap:8rem}p[data-astro-cid-sqe6te2j]{margin:0}main[data-astro-cid-i73pzkvf]{font-family:Poppins,sans-serif;padding:0 1.5rem;max-width:1200px;margin-inline:auto;margin-top:4rem;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem}\n"}],"routeData":{"route":"/employe/facture","isIndex":false,"type":"page","pattern":"^\\/employe\\/Facture\\/?$","segments":[[{"content":"employe","dynamic":false,"spread":false}],[{"content":"Facture","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/employe/Facture.astro","pathname":"/employe/Facture","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".section-body[data-astro-cid-tfl2taty]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;padding:20px;border-radius:10px}main[data-astro-cid-etmj65j2]{color:#333;padding:2rem}section[data-astro-cid-etmj65j2]{width:100%;margin-inline:auto;margin-bottom:4rem}.container[data-astro-cid-etmj65j2]{max-width:1200px;margin:0 auto}\n"},{"type":"external","src":"/_astro/SignIn.C4uc6a7U.css"}],"routeData":{"route":"/employe/register","isIndex":false,"type":"page","pattern":"^\\/employe\\/register\\/?$","segments":[[{"content":"employe","dynamic":false,"spread":false}],[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/employe/register.astro","pathname":"/employe/register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".section-body[data-astro-cid-uvy5cbfp]{text-align:center;position:relative;background-color:transparent;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;padding:20px;border-radius:10px}button[data-astro-cid-uvy5cbfp]{background:none;border:none;outline:none;color:#fff;font-weight:500;font-size:.85rem;padding:10px 20px;cursor:pointer}.btn[data-astro-cid-uvy5cbfp]{background-color:#2ba18f;color:#fff;border:none;padding:8px 12px;cursor:pointer;border-radius:4px}.btn[data-astro-cid-uvy5cbfp]:hover{background-color:#208175}main[data-astro-cid-eqn2cdx5]{color:#333;padding:2rem}section[data-astro-cid-eqn2cdx5]{width:100%;margin-inline:auto;margin:4rem 0}.container[data-astro-cid-eqn2cdx5]{max-width:1200px;margin:0 auto}\n"},{"type":"external","src":"/_astro/SignIn.C4uc6a7U.css"}],"routeData":{"route":"/employe/signin","isIndex":false,"type":"page","pattern":"^\\/employe\\/SignIn\\/?$","segments":[[{"content":"employe","dynamic":false,"spread":false}],[{"content":"SignIn","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/employe/SignIn.astro","pathname":"/employe/SignIn","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".orders[data-astro-cid-ss7y4upz]{width:82vw;background-color:#fff5;margin:4rem 0;backdrop-filter:blur(7px);box-shadow:0 .4rem .8rem #0005;border-radius:.8rem;overflow:hidden}.orders[data-astro-cid-ss7y4upz] h2[data-astro-cid-ss7y4upz]{color:#333}.section-header[data-astro-cid-ss7y4upz]{background-color:#f0f0f0}.section-body[data-astro-cid-ss7y4upz]{width:95%;max-height:calc(89% - .8rem);background-color:#fff;margin:.8rem auto;border-radius:.6rem;overflow:auto;&::-webkit-scrollbar{width:.5rem;height:.5rem}}.section-body[data-astro-cid-ss7y4upz]::-webkit-scrollbar-thumb{border-radius:.5rem;background-color:#0004;visibility:hidden}.section-body[data-astro-cid-ss7y4upz]:hover::-webkit-scrollbar-thumb{visibility:visible}table[data-astro-cid-ss7y4upz]{width:100%;border-collapse:collapse}thead[data-astro-cid-ss7y4upz] th[data-astro-cid-ss7y4upz]{position:sticky;top:0;left:0;background-color:#d5d1defe}table[data-astro-cid-ss7y4upz] th[data-astro-cid-ss7y4upz],table[data-astro-cid-ss7y4upz] td[data-astro-cid-ss7y4upz]{padding:10px;text-align:left;border-bottom:1px solid #ddd}table[data-astro-cid-ss7y4upz] th[data-astro-cid-ss7y4upz]{background-color:#f5f5f5}table[data-astro-cid-ss7y4upz] tr[data-astro-cid-ss7y4upz]:hover{background-color:#eee}.actions[data-astro-cid-ss7y4upz]{display:flex;flex-wrap:wrap;gap:.6rem}.complete-btn[data-astro-cid-ss7y4upz],.cancel-btn[data-astro-cid-ss7y4upz],.details-btn[data-astro-cid-ss7y4upz]{background-color:#2ba18f;color:#fff;border:none;padding:8px 12px;cursor:pointer;border-radius:4px;font-size:16px;line-height:1}.complete-btn[data-astro-cid-ss7y4upz]:hover,.cancel-btn[data-astro-cid-ss7y4upz]:hover,.details-btn[data-astro-cid-ss7y4upz]:hover{background-color:#208175}main[data-astro-cid-7edfhbam]{color:#333;padding-inline:2rem}section[data-astro-cid-7edfhbam]{width:100%;margin-inline:auto;margin-bottom:4rem}.container[data-astro-cid-7edfhbam]{max-width:1200px;margin:0 auto}\n"},{"type":"external","src":"/_astro/SignIn.C4uc6a7U.css"}],"routeData":{"route":"/employe","isIndex":true,"type":"page","pattern":"^\\/employe\\/?$","segments":[[{"content":"employe","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/employe/index.astro","pathname":"/employe","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"label[data-astro-cid-24mobdr7]{display:flex;flex-direction:column;align-items:center;gap:10px;width:200px;height:230px;padding:20px;border-radius:10px;cursor:pointer;position:relative;border:1px solid #ddd;transition:scale .3s ease}.disabled[data-astro-cid-24mobdr7]{pointer-events:none;opacity:.5}.disabled[data-astro-cid-24mobdr7]:is(label:hover){scale:1}label[data-astro-cid-24mobdr7]:hover{scale:1.1}input[data-astro-cid-24mobdr7][type=checkbox]{display:none}input[data-astro-cid-24mobdr7][type=checkbox]:checked:not([disabled])+label[data-astro-cid-24mobdr7]{border-color:#b87333;color:#b87333;background-color:#b8733233}h4[data-astro-cid-24mobdr7]{font-size:18px;margin:0}p[data-astro-cid-24mobdr7]{font-size:14px;margin:0}section[data-astro-cid-ij5zonff]{background-color:transparent;width:100%}.servicesList[data-astro-cid-ij5zonff]{display:flex;flex-wrap:wrap;justify-content:center;gap:15px}select[data-astro-cid-ry7jm6uv]{outline:none;padding:10px;border-radius:5px;border:1px solid #ccc}optgroup[data-astro-cid-ry7jm6uv]{font-weight:700}option[data-astro-cid-ry7jm6uv]{font-weight:400}label[data-astro-cid-at2cjfen]{width:100%;display:flex;flex-direction:column;align-items:flex-start;gap:5px}input[data-astro-cid-at2cjfen]{outline:none;border:none;background:transparent}.input[data-astro-cid-at2cjfen]{background-color:#fff7;width:100%;overflow:hidden;cursor:text;display:flex;align-items:center;gap:10px;border:1px solid #fff;border-radius:9999px}.input[data-astro-cid-at2cjfen] span[data-astro-cid-at2cjfen]{padding:5px;background-color:#fff;display:flex;align-items:center;justify-content:center}section[data-astro-cid-xnjxe6wi]{background-color:transparent;display:flex;flex-direction:column;gap:20px}.section-body[data-astro-cid-zgcf63k7]{text-align:center;position:relative;background-color:transparent;background-color:#f2f2f2c0;display:flex;flex-direction:column;align-items:center;justify-content:center}button[data-astro-cid-zgcf63k7]{background:none;border:none;outline:none;color:#fff;font-weight:500;font-size:.85rem;padding:10px 20px;cursor:pointer}.btn[data-astro-cid-zgcf63k7]{background-color:#2ba18f;border-radius:5px;transition:background-color .3s ease;align-self:flex-end}.btn[data-astro-cid-zgcf63k7]:hover{background-color:#208175}main[data-astro-cid-o4f7jc6w]{color:#333;padding:2rem}section[data-astro-cid-o4f7jc6w]{width:100%;margin-inline:auto;padding-top:8rem;margin-bottom:3rem}.container[data-astro-cid-o4f7jc6w]{max-width:1200px;margin:4rem auto}\n"},{"type":"external","src":"/_astro/SignIn.C4uc6a7U.css"}],"routeData":{"route":"/user/date","isIndex":false,"type":"page","pattern":"^\\/user\\/date\\/?$","segments":[[{"content":"user","dynamic":false,"spread":false}],[{"content":"date","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/user/date.astro","pathname":"/user/date","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".hero[data-astro-cid-bbe6dxrz]{text-align:center}.hero[data-astro-cid-bbe6dxrz] h1[data-astro-cid-bbe6dxrz]{font-size:36px;margin:0 0 20px;color:#333}.hero[data-astro-cid-bbe6dxrz] p[data-astro-cid-bbe6dxrz]{font-size:16px;margin:0;color:#fff;text-shadow:0 0 6px #000}.hero[data-astro-cid-bbe6dxrz] a[data-astro-cid-bbe6dxrz]{margin-top:.85rem;display:inline-block;padding:10px 20px;background-color:#2ba18f;color:#fff;text-decoration:none;font-size:16px;border-radius:8px;transition:background-color .3s ease}.hero[data-astro-cid-bbe6dxrz] a[data-astro-cid-bbe6dxrz]:hover{background-color:#208175}#services[data-astro-cid-g5jplrhu] h2[data-astro-cid-g5jplrhu]{font-size:1.4rem}#services[data-astro-cid-g5jplrhu] ul[data-astro-cid-g5jplrhu]{list-style:none;margin:0;padding:10px}#services[data-astro-cid-g5jplrhu] ul[data-astro-cid-g5jplrhu] li[data-astro-cid-g5jplrhu]{display:inline-block;margin:5px;width:32%;text-align:center;border:1px solid #d3d3d3;padding:20px}#services[data-astro-cid-g5jplrhu] ul[data-astro-cid-g5jplrhu] li[data-astro-cid-g5jplrhu] img[data-astro-cid-g5jplrhu]{max-width:100px;margin:0 0 20px}#services[data-astro-cid-g5jplrhu] ul[data-astro-cid-g5jplrhu] li[data-astro-cid-g5jplrhu] h3[data-astro-cid-g5jplrhu]{font-size:18px;margin:0 0 10px}#services[data-astro-cid-g5jplrhu] ul[data-astro-cid-g5jplrhu] li[data-astro-cid-g5jplrhu] p[data-astro-cid-g5jplrhu]{font-size:16px;margin:0}@media (max-width: 768px){#services[data-astro-cid-g5jplrhu] ul[data-astro-cid-g5jplrhu] li[data-astro-cid-g5jplrhu]{width:100%}}#testimonials[data-astro-cid-aadlzisc]{background-color:#d3d3d399}#testimonials[data-astro-cid-aadlzisc] h2[data-astro-cid-aadlzisc]{font-size:1.4rem}#testimonials[data-astro-cid-aadlzisc] ul[data-astro-cid-aadlzisc]{list-style:none;margin:0;padding:10px}#testimonials[data-astro-cid-aadlzisc] ul[data-astro-cid-aadlzisc] li[data-astro-cid-aadlzisc]{margin:5px;border:1px solid #d3d3d3;padding:20px}#testimonials[data-astro-cid-aadlzisc] ul[data-astro-cid-aadlzisc] li[data-astro-cid-aadlzisc] blockquote[data-astro-cid-aadlzisc]{font-style:italic;margin:0 0 20px}#testimonials[data-astro-cid-aadlzisc] ul[data-astro-cid-aadlzisc] li[data-astro-cid-aadlzisc] p[data-astro-cid-aadlzisc]{font-size:16px;margin:0}@media (max-width: 768px){#testimonials[data-astro-cid-aadlzisc] ul[data-astro-cid-aadlzisc] li[data-astro-cid-aadlzisc]{width:100%}}main[data-astro-cid-j7pv25f6]{color:#333;padding:2rem}section[data-astro-cid-j7pv25f6]{width:100%;margin-inline:auto;padding-top:4rem;position:relative}section[data-astro-cid-j7pv25f6]:last-child{margin-bottom:3rem}.container[data-astro-cid-j7pv25f6]{max-width:1200px;margin:0 auto}\n"},{"type":"external","src":"/_astro/SignIn.C4uc6a7U.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Admin/Documents/dev/Nails-top/src/pages/employe/Facture.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Documents/dev/Nails-top/src/pages/employe/SignIn.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Documents/dev/Nails-top/src/pages/employe/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Documents/dev/Nails-top/src/pages/employe/register.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Documents/dev/Nails-top/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Documents/dev/Nails-top/src/pages/user/date.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/user/date.astro":"chunks/pages/date_BgV4XpAP.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_AHrckPwI.mjs","/src/pages/api/orders.js":"chunks/pages/orders_DrdJC6vE.mjs","/src/pages/employe/register.astro":"chunks/pages/register_Do5dGJH7.mjs","/src/pages/api/remove.js":"chunks/pages/remove_O0o5bQ9Z.mjs","/src/pages/api/usersSignUp.js":"chunks/pages/usersSignUp_BP1IdYWX.mjs","\u0000@astrojs-manifest":"manifest_CwHKXJqu.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DOITHN0x.mjs","\u0000@astro-page:src/pages/api/orders@_@js":"chunks/orders_Bo_e8D-C.mjs","\u0000@astro-page:src/pages/api/remove@_@js":"chunks/remove_DNFOziz7.mjs","\u0000@astro-page:src/pages/api/usersSignIn@_@js":"chunks/usersSignIn_vxY-iR3J.mjs","\u0000@astro-page:src/pages/api/usersSignUp@_@js":"chunks/usersSignUp_BCAOydrX.mjs","\u0000@astro-page:src/pages/employe/Facture@_@astro":"chunks/Facture_B7tlXn1C.mjs","\u0000@astro-page:src/pages/employe/register@_@astro":"chunks/register_DPDQqaiQ.mjs","\u0000@astro-page:src/pages/employe/SignIn@_@astro":"chunks/SignIn_CAHdUmbI.mjs","\u0000@astro-page:src/pages/employe/index@_@astro":"chunks/index_CcU6-VLb.mjs","\u0000@astro-page:src/pages/user/date@_@astro":"chunks/date_CGRJLQMK.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_DRpe31C9.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/SignIn.C4uc6a7U.css","/BG.jpg","/BG2.jpg","/Nails-top_icon.webp","/Nails-top_logo.webp"],"buildFormat":"directory"});

export { manifest };
