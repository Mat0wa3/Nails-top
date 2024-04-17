import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_BSP7C2Di.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Layout } from './SignIn_vrV9cuqT.mjs';
import 'clsx';
/* empty css                             */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$UserSignup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$UserSignup;
  return renderTemplate(_a || (_a = __template(["", '<form class="section-container" action="" method="POST" data-astro-cid-tfl2taty> <section class="section-header" data-astro-cid-tfl2taty> <h2 data-astro-cid-tfl2taty>Registrar</h2> </section> <section class="section-body" data-astro-cid-tfl2taty> <label for="name" data-astro-cid-tfl2taty>Nombre</label> <input type="text" name="name" id="name" data-astro-cid-tfl2taty> <label for="email" data-astro-cid-tfl2taty>Correo</label> <input type="email" name="email" id="email" data-astro-cid-tfl2taty> <label for="phone" data-astro-cid-tfl2taty>Tele\u0301fono</label> <input type="tel" name="phone" id="phone" data-astro-cid-tfl2taty> <label for="password" data-astro-cid-tfl2taty>Contrase\xF1a</label> <input type="password" name="password" id="password" data-astro-cid-tfl2taty> <label for="confirmPassword" data-astro-cid-tfl2taty>Confirma tu contrase\xF1a</label> <input type="password" name="confirmPassword" id="confirmPassword" data-astro-cid-tfl2taty> <button data-astro-cid-tfl2taty>Enviar</button> </section> </form> <script>\n    const button = document.querySelector("button");\n    let data = {};\n\n    button.addEventListener("click", (e) => {\n        e.preventDefault();\n\n        const name = document.getElementById("name");\n        const email = document.getElementById("email");\n        const phone = document.getElementById("phone");\n        const password = document.getElementById("password");\n        const confirmPassword = document.getElementById("confirmPassword");\n\n        if (\n            name.value === "" ||\n            email.value === "" ||\n            phone.value === "" ||\n            password.value === "" ||\n            confirmPassword.value === ""\n        ) {\n            alert("Todos los campos son obligatorios");\n            return;\n        }\n\n        if (password.value !== confirmPassword.value) {\n            alert("Las contrasen\u0303as no coinciden");\n            return;\n        }\n\n        data = {\n            name: name.value,\n            role: "Employe",\n            email: email.value,\n            phone: phone.value,\n            password: password.value,\n        };\n\n        fetch("/api/usersSignUp", {\n            method: "post",\n            body: JSON.stringify(data),\n        }).then((response) => {\n            if (response.ok) {\n                alert("Usuario creado");\n                window.location.href = "/";\n            } else {\n                alert("Error al crear el usuario");\n            }\n        });\n    });\n<\/script> '])), maybeRenderHead());
}, "C:/Users/Admin/Documents/dev/Nails-top/src/components/UserSignup.astro", void 0);

const $$Astro = createAstro();
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nails-top - Empleados", "data-astro-cid-etmj65j2": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container" data-astro-cid-etmj65j2> <section data-astro-cid-etmj65j2> ${renderComponent($$result2, "UserSignup", $$UserSignup, { "data-astro-cid-etmj65j2": true })} </section> </main> ` })} `;
}, "C:/Users/Admin/Documents/dev/Nails-top/src/pages/employe/register.astro", void 0);

const $$file = "C:/Users/Admin/Documents/dev/Nails-top/src/pages/employe/register.astro";
const $$url = "/employe/register";

export { $$Register as default, $$file as file, $$url as url };
