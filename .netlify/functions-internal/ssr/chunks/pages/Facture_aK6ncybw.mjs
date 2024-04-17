import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderHead, f as renderComponent } from '../astro_BSP7C2Di.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { MongoClient } from 'mongodb';
/* empty css                            */

const uri = "mongodb+srv://nailstop:BDkAXdZqqho9oBWO@nails-top.rivat1p.mongodb.net/";
const options = {};
const connectToDatabase = async () => {
  const client = new MongoClient(uri, options);
  await client.connect();
  return client;
};
const Orders = async () => {
  const client = await connectToDatabase();
  const db = client.db("nails-top");
  const collection = db.collection("orders");
  return collection;
};
const Users = async () => {
  const client = await connectToDatabase();
  const db = client.db("nails-top");
  const collection = db.collection("users");
  return collection;
};

const OrderList = async () => {
    const orders = await Orders();
    const result = await orders.find({}).toArray();
    return result;
};

const getOrders = async (manicurista) => {
    const orders = await Orders();
    const result = await orders.find({ manicurista : manicurista }).toArray();
    return result;
};

const getOrder = async (id) => {
    const orders = await Orders();
    const result = await orders.findOne({ name: id });
    return result;
};

const createOrder = async (order) => {
    const orders = await Orders();
    const result = await orders.insertOne(order);
    return result;
};

const deleteOrder = async (id) => {
    const orders = await Orders();
    const result = await orders.deleteOne({ name: id });
    return result;
};

const $$Astro$1 = createAstro();
const $$Facture$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Facture$1;
  const name = Astro2.url.searchParams.get("name");
  const order = await getOrder(name);
  if (!order) {
    console.log("error");
  }
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-sqe6te2j> <img src="/Nails-top_logo.webp" alt="coso" data-astro-cid-sqe6te2j> <section data-astro-cid-sqe6te2j> <h1 data-astro-cid-sqe6te2j>Nails Top</h1> <p data-astro-cid-sqe6te2j>Cra 80a #112-56</p> <p data-astro-cid-sqe6te2j>3042333522</p> </section> </header> <section data-astro-cid-sqe6te2j> <h2 data-astro-cid-sqe6te2j>Factura</h2> <div class="client" data-astro-cid-sqe6te2j> <section data-astro-cid-sqe6te2j> <p data-astro-cid-sqe6te2j>Pago de:</p> <p data-astro-cid-sqe6te2j>${order.name}</p> <p data-astro-cid-sqe6te2j>${order.phone}</p> </section> <section data-astro-cid-sqe6te2j> <p data-astro-cid-sqe6te2j>N# de orden:</p> <p data-astro-cid-sqe6te2j>${Math.floor(Math.random() * (100 - 1 + 1)) + 1}</p> <p data-astro-cid-sqe6te2j>Fecha:</p> <p data-astro-cid-sqe6te2j>${order.date}</p> </section> </div> <div class="table" data-astro-cid-sqe6te2j> <div class="table-head" data-astro-cid-sqe6te2j> <p data-astro-cid-sqe6te2j>Descripción</p> <p data-astro-cid-sqe6te2j>Precio</p> </div> ${order.services.map((service) => renderTemplate`<div class="table-body" data-astro-cid-sqe6te2j> <p data-astro-cid-sqe6te2j>${service.name}</p> <p data-astro-cid-sqe6te2j>$${service.price}</p> </div>`)} </div> <p data-astro-cid-sqe6te2j><strong data-astro-cid-sqe6te2j>Total: $${order.total.toLocaleString("es-ES")}</strong></p> </section> `;
}, "C:/Users/Admin/Documents/dev/Nails-top/src/components/Facture.astro", void 0);

const $$Astro = createAstro();
const $$Facture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Facture;
  return renderTemplate`<html lang="es" data-astro-cid-i73pzkvf> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Factura</title><link rel="shortcut icon" href="/Nails-top_icon.webp" type="image/x-icon">${renderHead()}</head> <body data-astro-cid-i73pzkvf> <main data-astro-cid-i73pzkvf> ${renderComponent($$result, "FactureImp", $$Facture$1, { "data-astro-cid-i73pzkvf": true })} </main> </body></html>`;
}, "C:/Users/Admin/Documents/dev/Nails-top/src/pages/employe/Facture.astro", void 0);

const $$file = "C:/Users/Admin/Documents/dev/Nails-top/src/pages/employe/Facture.astro";
const $$url = "/employe/Facture";

const Facture = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Facture,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { Facture as F, OrderList as O, Users as U, createOrder as c, deleteOrder as d, getOrders as g };
