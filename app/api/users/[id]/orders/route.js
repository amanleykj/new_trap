import { connectToDb } from "@utils/database";
import Order from '@models/Order';

export const GET = async ( request, { params } ) => {
    try {
        await connectToDb();
        const orders = await Order.find({ creator : params.id }).populate('creator');
        return new Response(JSON.stringify(orders), { status : 200 })

    }

    catch (error) {
        return new Response(`Failed to get the orders loaded. Something went wrong. ${error}`, { status : 500 })
    }
}