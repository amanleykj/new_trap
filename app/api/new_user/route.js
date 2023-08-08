import { connectToDb } from "@utils/database";
import User from '@models/User';
import { NextApiRequest, NextApiResponse } from "next";
// this may not be the right import above; check again if needed
import bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from "next/server";
// other recommendation is bcryptjs from bcryptjs



export const POST = async ( request, response ) => {
    
    const { first_name, last_name, email, password, username } = await request.json();

    try {
        await connectToDb();
        

        const user = await User.findOne({email})
        if(user) {
            return Response.json({ error : "This email is already being used." }, { status : 400 })
        }

        const salt = await bcrypt.genSalt(10)
        const hashed_pw = await bcrypt.hash(password, salt)

        const newUser = new User({ 
            first_name,
            last_name,
            email,
            password : hashed_pw,
            username
        }) 
        
        await newUser.save();
        return new Response(JSON.stringify(newUser), { status : 201 })

    }
    catch (error) {
        return new Response("Failed to create a new order. Check it out.", {
            status : 500
        })

    }
}