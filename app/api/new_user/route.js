import { connectToDb } from "@utils/database";
import User from '@models/User';
import { NextApiRequest, NextApiResponse } from "next";
// this may not be the right import above; check again if needed
import bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from "next/server";
// other recommendation is bcryptjs from bcryptjs


connectToDb();

export async function POST( request ) {
    try {
        const reqBody = await request.json()
        const { first_name, last_name, email, password, username } = reqBody

        console.log(reqBody);

        // check if user already exists
        const user = await User.findOne({ email })

        if(user) {
            return NextResponse.json({ error : "User already exists."}, { status : 400 })
        }

        // hash password now
        const salt = await bcrypt.genSalt(10)
        const hashed_pw = await bcrypt.hash(password, salt)

        const newUser = new User({
            first_name, 
            last_name, 
            email, 
            password : hashed_pw,
            username
        })

        const savedUser = await newUser.save()
        console.log(savedUser)

        const sessionUser = await User.findOne({
        email : session.user.email
        })
        session.user.id = sessionUser._id.toString();

        return NextResponse.json({
            message : "User created successfully.",
            success : true,
            savedUser,
            session
        })

    }

    catch {


    }



}







// ****************
// STLYE FROM BEFORE; PROBABLY WORKS FINE BUT I WANT TO TRY SOMETHING NEW FOR THIS USER POST ROUTE
// ****************
// export const POST = async ( request, response ) => {
    
//     const { first_name, last_name, email, password, username } = await request.json();

//     try {
//         await connectToDb();
        

//         const user = await User.findOne({email})
//         if(user) {
//             return Response.json({ error : "This email is already being used." }, { status : 400 })
//         }

//         const salt = await bcrypt.genSalt(10)
//         const hashed_pw = await bcrypt.hash(password, salt)

//         const newUser = new User({ 
//             first_name,
//             last_name,
//             email,
//             password : hashed_pw,
//             username
//         }) 
        
//         await newUser.save();
//         return new Response(JSON.stringify(newUser), { status : 201 })

//     }
//     catch (error) {
//         return new Response("Failed to create a new order. Check it out.", {
//             status : 500
//         })

//     }
// }