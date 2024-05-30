import { getUser } from "@/db/users";

export const POST = async ({ request }) => {
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

}