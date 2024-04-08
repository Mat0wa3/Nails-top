import { MongoClient } from 'mongodb';

const uri = import.meta.env.MONGODB_URI;
const options = {};

export const connectToDatabase = async () => {
    try {
        const client = new MongoClient(uri, options);
        await client.connect();
        return client;
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
};

export const Orders = async () => {
    const client = await connectToDatabase();
    const db = client.db('nails-top');
    const collection = db.collection('orders');
    return collection;
};

export const Users = async () => {
    const client = await connectToDatabase();
    const db = client.db('nails-top');
    const collection = db.collection('users');
    return collection;
}