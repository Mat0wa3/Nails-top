import { createUser } from '../../db/users';

export const POST = async ({ request }) => {
    const body = await request.json();
    const user = await createUser(body);
    return new Response(JSON.stringify(user), {
        status: 200,
    });
}