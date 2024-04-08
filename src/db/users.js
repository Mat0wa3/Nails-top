import { Users } from "./mongodb";

export const getUser = async (phone) => {
    const users = await Users();
    const result = await users.findOne({ phone });
    return result;
}

export const createUser = async (user) => {
    const users = await Users();
    const result = await users.insertOne(user);
    return result;
}