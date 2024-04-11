import { Orders } from "./mongodb";

export const getOrders = async (manicurista) => {
    const orders = await Orders();
    const result = await orders.find({ manicurista : manicurista }).toArray();
    return result;
}

export const createOrder = async (order) => {
    const orders = await Orders();
    const result = await orders.insertOne(order);
    return result;
}