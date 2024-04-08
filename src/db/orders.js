import { Orders } from "./mongodb";

export const getOrders = async () => {
    const orders = await Orders();
    const result = await orders.find({}).toArray();
    return result;
}

export const createOrder = async (order) => {
    const orders = await Orders();
    const result = await orders.insertOne(order);
    return result;
}