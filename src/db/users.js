import { Users } from "./mongodb";

export const getUser = async (user, password) => {
    const users = await Users();
    const result = await users.findOne({ email: user, password: password });
    return result;
}

export const getUsers = async () => {
    const users = await Users();
    const result = await users.find({}).toArray();
    return result;
}

export const createUser = async (user) => {
    const users = await Users();
    const result = await users.insertOne(user);
    return result;
}