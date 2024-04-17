import { c as createUser } from './usersSignIn_B8cTkfei.mjs';

const post = async ({ request }) => {
    const body = await request.json();
    const user = await createUser(body);
    return new Response(JSON.stringify(user), {
        status: 200,
    });
};

export { post };
