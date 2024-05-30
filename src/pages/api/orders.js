import { createOrder } from "../../db/orders";

export const POST = async ({ request }) => {
    const body = await request.json();
    const order = await createOrder(body);
    return new Response(JSON.stringify(order), {
        status: 200,
    });
}