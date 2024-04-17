import { c as createAstro, d as createComponent, r as renderTemplate, j as addAttribute, m as maybeRenderHead, f as renderComponent } from '../astro_BSP7C2Di.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { g as getOrders } from './Facture_aK6ncybw.mjs';
/* empty css                          */
import { a as $$Layout } from './SignIn_vrV9cuqT.mjs';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro();
const $$OrdersTable = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$OrdersTable;
  const username = Astro2.cookies.get("user-name");
  const orders = await getOrders(username?.value);
  if (!orders) {
    throw new Error("No se encontraron ordenes");
  }
  return renderTemplate(_a || (_a = __template(["", '<section class="orders" data-astro-cid-ss7y4upz> <section class="section-header" data-astro-cid-ss7y4upz> <h2 data-astro-cid-ss7y4upz>\xD3rdenes Pendientes</h2> </section> <section class="section-body" data-astro-cid-ss7y4upz> <table data-astro-cid-ss7y4upz> <thead data-astro-cid-ss7y4upz> <tr data-astro-cid-ss7y4upz> <th data-astro-cid-ss7y4upz>Cliente</th> <th data-astro-cid-ss7y4upz>Servicio</th> <th data-astro-cid-ss7y4upz>Fecha</th> <th data-astro-cid-ss7y4upz>Hora</th> <th data-astro-cid-ss7y4upz>Estado</th> <th data-astro-cid-ss7y4upz>Acciones</th> </tr> </thead> <tbody data-astro-cid-ss7y4upz> ', ' </tbody> </table> </section> </section> <script>\n    const cancelBtns = document.querySelectorAll(".cancel-btn");\n    cancelBtns.forEach((btn) => {\n        btn.addEventListener("click", () => {\n            const name = btn.id;\n            const res = confirm("\xBFQuieres cancelar esta orden?");\n            if (!res) return;\n            fetch(`/api/remove`, {\n                method: "POST",\n                body: JSON.stringify({ name: name }),\n            })\n            location.reload();\n        })\n    })\n<\/script> '], ["", '<section class="orders" data-astro-cid-ss7y4upz> <section class="section-header" data-astro-cid-ss7y4upz> <h2 data-astro-cid-ss7y4upz>\xD3rdenes Pendientes</h2> </section> <section class="section-body" data-astro-cid-ss7y4upz> <table data-astro-cid-ss7y4upz> <thead data-astro-cid-ss7y4upz> <tr data-astro-cid-ss7y4upz> <th data-astro-cid-ss7y4upz>Cliente</th> <th data-astro-cid-ss7y4upz>Servicio</th> <th data-astro-cid-ss7y4upz>Fecha</th> <th data-astro-cid-ss7y4upz>Hora</th> <th data-astro-cid-ss7y4upz>Estado</th> <th data-astro-cid-ss7y4upz>Acciones</th> </tr> </thead> <tbody data-astro-cid-ss7y4upz> ', ' </tbody> </table> </section> </section> <script>\n    const cancelBtns = document.querySelectorAll(".cancel-btn");\n    cancelBtns.forEach((btn) => {\n        btn.addEventListener("click", () => {\n            const name = btn.id;\n            const res = confirm("\xBFQuieres cancelar esta orden?");\n            if (!res) return;\n            fetch(\\`/api/remove\\`, {\n                method: "POST",\n                body: JSON.stringify({ name: name }),\n            })\n            location.reload();\n        })\n    })\n<\/script> '])), maybeRenderHead(), orders.map((order) => renderTemplate`<tr data-astro-cid-ss7y4upz> <td data-astro-cid-ss7y4upz>${order.name}</td> <td data-astro-cid-ss7y4upz>${order.services.map((service, index) => index === order.services.length - 1 ? `${service.name}` : `${service.name}, `)}</td> <td data-astro-cid-ss7y4upz>${order.date}</td> <td data-astro-cid-ss7y4upz>${order.time}</td> <td data-astro-cid-ss7y4upz>${order.status}</td> <td class="actions" data-astro-cid-ss7y4upz> <a target="_blank" rel="noopener noreferrer"${addAttribute(`/employe/Facture?name=${order.name}`, "href")} class="complete-btn" data-astro-cid-ss7y4upz>Factura</a> <button${addAttribute(order.name, "id")} class="cancel-btn" data-astro-cid-ss7y4upz>Cancelar</button> </td> </tr>`));
}, "C:/Users/Admin/Documents/dev/Nails-top/src/components/OrdersTable.astro", void 0);

const $$Astro$4 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nails-top Medell\xEDn - Empleados", "data-astro-cid-7edfhbam": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container" data-astro-cid-7edfhbam> <section data-astro-cid-7edfhbam> ${renderComponent($$result2, "OrdersTable", $$OrdersTable, { "data-astro-cid-7edfhbam": true })} </section> </main> ` })} `;
}, "C:/Users/Admin/Documents/dev/Nails-top/src/pages/employe/index.astro", void 0);

const $$file$1 = "C:/Users/Admin/Documents/dev/Nails-top/src/pages/employe/index.astro";
const $$url$1 = "/employe";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-bbe6dxrz> <h1 data-astro-cid-bbe6dxrz>Disfruta de un momento de belleza y relajación en nuestro spa de uñas</h1> <p data-astro-cid-bbe6dxrz>
Ofrecemos una amplia gama de servicios para que tus manos y pies luzcan
        impecables.
</p> <a href="/user/date" data-astro-cid-bbe6dxrz>Reserva tu cita ahora</a> </section> `;
}, "C:/Users/Admin/Documents/dev/Nails-top/src/components/Hero.astro", void 0);

const $$Astro$2 = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${maybeRenderHead()}<section id="services" class="section-container" data-astro-cid-g5jplrhu> <section class="section-header" data-astro-cid-g5jplrhu> <h2 data-astro-cid-g5jplrhu>Nuestros servicios</h2> </section> <section class="section-body" data-astro-cid-g5jplrhu> <ul data-astro-cid-g5jplrhu> <li data-astro-cid-g5jplrhu> <img src="/BG.jpg" alt="Servicio 1" data-astro-cid-g5jplrhu> <h3 data-astro-cid-g5jplrhu>Manicura y pedicura</h3> <p data-astro-cid-g5jplrhu>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> </li> <li data-astro-cid-g5jplrhu> <img src="/BG.jpg" alt="Servicio 2" data-astro-cid-g5jplrhu> <h3 data-astro-cid-g5jplrhu>Uñas acrílicas y de gel</h3> <p data-astro-cid-g5jplrhu>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> </li> <li data-astro-cid-g5jplrhu> <img src="/BG.jpg" loading="lazy" alt="Servicio 3" data-astro-cid-g5jplrhu> <h3 data-astro-cid-g5jplrhu>Diseño de uñas</h3> <p data-astro-cid-g5jplrhu>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> </li> </ul> </section> </section> `;
}, "C:/Users/Admin/Documents/dev/Nails-top/src/components/Services.astro", void 0);

const $$Astro$1 = createAstro();
const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Testimonials;
  return renderTemplate`${maybeRenderHead()}<section id="testimonials" class="section-container" data-astro-cid-aadlzisc> <section class="section-header" data-astro-cid-aadlzisc> <h2 data-astro-cid-aadlzisc>Testimonios</h2> </section> <section class="section-body" data-astro-cid-aadlzisc> <ul data-astro-cid-aadlzisc> <li data-astro-cid-aadlzisc> <blockquote data-astro-cid-aadlzisc>
"El servicio en este spa es excelente. Las chicas son muy
                    amables y profesionales."
</blockquote> <p data-astro-cid-aadlzisc>- Ana García</p> </li> <li data-astro-cid-aadlzisc> <blockquote data-astro-cid-aadlzisc>
"Estoy muy contenta con los resultados de mi manicura. ¡Mis uñas
                    se ven fabulosas!"
</blockquote> <p data-astro-cid-aadlzisc>- María Pérez</p> </li> </ul> </section> </section> `;
}, "C:/Users/Admin/Documents/dev/Nails-top/src/components/Testimonials.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nails-top Medell\xEDn.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container" data-astro-cid-j7pv25f6> <section class="hero" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} </section> <section id="services" class="services" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Services", $$Services, { "data-astro-cid-j7pv25f6": true })} </section> <section id="testimonials" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Testimonials", $$Testimonials, { "data-astro-cid-j7pv25f6": true })} </section> </main> ` })} `;
}, "C:/Users/Admin/Documents/dev/Nails-top/src/pages/index.astro", void 0);

const $$file = "C:/Users/Admin/Documents/dev/Nails-top/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
