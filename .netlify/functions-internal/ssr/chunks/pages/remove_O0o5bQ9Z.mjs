import { d as deleteOrder } from './Facture_aK6ncybw.mjs';

const POST = async ({ request }) => {
    const { name } = await request.json();
    const order = await deleteOrder(name);
    return new Response(JSON.stringify(order), {
        status: 200,
    });
};

export { POST };
