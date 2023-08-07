import { connectToDb } from "@utils/database";
import Order from '@models/Order';


export const POST = async ( request, response ) => {
    const { userId, combo, sauce, side, drink, notes, tag } = await request.json();

    try {
        await connectToDb();
        const newPrompt = new Prompt({ 
            creator : userId,
            combo,
            sauce,
            side,
            drink,
            notes,
            tag
        })

        // "lambda function" means that it'll die once it does its job

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), {
            status : 201
        })

    }
    catch (error) {
        return new Response("Failed to create a new order. Check it out.", {
            status : 500
        })

    }
}