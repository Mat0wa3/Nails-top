import { Orders } from "./mongodb";

export const OrderList = async () => {
    const orders = await Orders();
    const result = await orders.find({}).toArray();
    return result;
}

export const getOrders = async (manicurista) => {
    const orders = await Orders();
    const result = await orders.find({ manicurista : manicurista }).toArray();
    return result;
}

export const getOrder = async (id) => {
    const orders = await Orders();
    const result = await orders.findOne({ name: id });
    return result;
}

export const createOrder = async (order) => {
    const orders = await Orders();
    const result = await orders.insertOne(order);
    return result;
}

export const deleteOrder = async (id) => {
    const orders = await Orders();
    const result = await orders.deleteOne({ name: id });
    return result;
}