import { connectToDb } from "@utils/database";
import Order from '@models/Order';


// GET
export const GET = async ( request, params ) => {
    try {
        await connectToDb();
        const order = await Order.findById( params.id ).populate('creator');
        if(!order) {
            return new Response("Order was not found.", { status : 404 })
        }
        return new Response(JSON.stringify( order ), { status : 200 })

    }

    catch (error) {
        return new Response(`Failed to get the orders loaded. Something went wrong. ${error}`, { status : 500 })
    }
}

// UPDATE
export const PATCH = async ( request, params ) => {
    const { combo, sauce, side, drink, notes } = await request.json();

    try {
        await connectToDb();
        const existingOrder = await Order.findById( params.id );
        if(!existingOrder) {
            return new Response("Order was not found.", { status : 404 })
        }
        
        existingOrder.combo = combo
        existingOrder.sauce = sauce
        existingOrder.side = side
        existingOrder.drink = drink
        existingOrder.notes = notes

        await existingOrder.save();

        return new Response(JSON.stringify(existingOrder), { status : 200 })

    }
    catch (error) {
        return new Response("Failed to update this order.", { status : 500 })
    }
}

// DELETE
export const DELETE = async ( request, { params } ) => {
    try {
        await connectToDb();
        await Order.findByIdAndRemove(params.id)
        return new Response("Order has been deleted.", { status : 200 })

    }

    catch (error) {
        return new Response("Order did not delete.", { status : 500 })
    }
}