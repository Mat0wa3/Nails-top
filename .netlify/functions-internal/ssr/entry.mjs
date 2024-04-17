import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CwHKXJqu.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_DOITHN0x.mjs');
const _page1 = () => import('./chunks/orders_Bo_e8D-C.mjs');
const _page2 = () => import('./chunks/remove_DNFOziz7.mjs');
const _page3 = () => import('./chunks/usersSignIn_vxY-iR3J.mjs');
const _page4 = () => import('./chunks/usersSignUp_BCAOydrX.mjs');
const _page5 = () => import('./chunks/Facture_B7tlXn1C.mjs');
const _page6 = () => import('./chunks/register_DPDQqaiQ.mjs');
const _page7 = () => import('./chunks/SignIn_CAHdUmbI.mjs');
const _page8 = () => import('./chunks/index_CcU6-VLb.mjs');
const _page9 = () => import('./chunks/date_CGRJLQMK.mjs');
const _page10 = () => import('./chunks/index_DRpe31C9.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/orders.js", _page1],
    ["src/pages/api/remove.js", _page2],
    ["src/pages/api/usersSignIn.js", _page3],
    ["src/pages/api/usersSignUp.js", _page4],
    ["src/pages/employe/Facture.astro", _page5],
    ["src/pages/employe/register.astro", _page6],
    ["src/pages/employe/SignIn.astro", _page7],
    ["src/pages/employe/index.astro", _page8],
    ["src/pages/user/date.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "68cd8834-9408-4200-974e-ab126d52efc1"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
