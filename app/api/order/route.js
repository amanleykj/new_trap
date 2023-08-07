import { connectToDb } from "@utils/database";
import Order from '@models/Order';

export const GET = async ( request ) => {
    try {
        await connectToDb();
        const orders = await Order.find({}).populate('creator');
        return new Response(JSON.stringify(orders), { status : 200 })

    }

    catch (error) {
        return new Response(`Failed to get the orders loaded. Something went wrong. ${error}`, { status : 500 })
    }
}