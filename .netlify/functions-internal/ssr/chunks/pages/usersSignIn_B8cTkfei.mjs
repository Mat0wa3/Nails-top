import { U as Users } from './Facture_aK6ncybw.mjs';

const getUser = async (user, password) => {
    const users = await Users();
    const result = await users.findOne({ email: user, password: password });
    return result;
};

const createUser = async (user) => {
    const users = await Users();
    const result = await users.insertOne(user);
    return result;
};

const POST = async ({ request }) => {
    const body = await request.json();
    const user = await getUser(body.email, body.password);

    if (!user) {
        return new Response(JSON.stringify({ error: "Invalid credentials" }), {
            status: 401,
        });
    }

    return new Response(JSON.stringify({ user }), {
        status: 200,
    });

};

const usersSignIn = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

export { createUser as c, usersSignIn as u };
