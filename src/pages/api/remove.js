import { deleteOrder } from "@/db/orders";

export const POST = async ({ request }) => {
    const { name } = await request.json();
    const order = await deleteOrder(name);
    return new Response(JSON.stringify(order), {
        status: 200,
    });
}