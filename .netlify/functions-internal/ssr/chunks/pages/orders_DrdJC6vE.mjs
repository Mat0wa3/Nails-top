import { c as createOrder } from './Facture_aK6ncybw.mjs';

const POST = async ({ request }) => {
    const body = await request.json();
    const order = await createOrder(body);
    return new Response(JSON.stringify(order), {
        status: 200,
    });
};

export { POST };
