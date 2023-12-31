import { connectToDb } from "@utils/database";
import Order from '@models/Order';


export const POST = async ( request, response ) => {
    
    const { userId, combo, sauce, side, drink, notes } = await request.json();

    try {
        await connectToDb();
        const newOrder = new Order({ 
            creator : userId,
            combo,
            sauce,
            side,
            drink,
            notes
        })
        // "lambda function" means that it'll die once it does its job
        await newOrder.save();
        return new Response(JSON.stringify(newOrder), {
            status : 201
        })

    }
    catch (error) {
        return new Response("Failed to create a new order. Check it out.", {
            status : 500
        })

    }
}