import { connectToDb } from "@utils/database";
import User from '@models/User';
import bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from "next/server";
import { useSession } from "next-auth/react";
// other recommendation is bcryptjs from bcryptjs


connectToDb();

export async function POST( request ) {
    
    try {
        const reqBody = await request.json()
        const { first_name, last_name, username, email, password } = reqBody
        const { data : session } = useSession();

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
            username,
            email, 
            password : hashed_pw
        })

        const savedUser = await newUser.save()
        console.log("New USER HERE: " + savedUser)

        const session = await User.findOne({
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
    catch (error) {
        console.log("LOOK AT THIS ERROR: " + error)
    }

}

// NEW TRY HERE BELOW
// COPIED FROM GOOGLE AUTH API CALL
// CONTINUE WORKING ON THIS

// const handler = NextAuth({

//     callbacks : {
//         async session({ session }) {
//             const sessionUser = await User.findOne({
//                 email : session.user.email
//             })
//             session.user.id = sessionUser._id.toString();
//             return session;
//         },
//         async signIn({ profile }) {
//             try {
//                 await connectToDb();
//                 // check if a user already exists in the first check
//                 const userExists = await User.findOne({
//                     email : profile.email
//                 })
//                 // if not, create a new user and save it to the database
//                 if(!userExists) {
//                     await User.create({
//                         name : profile.name,
//                         email : profile.email,
//                         username : profile.name.replace(" ", "").toLowerCase(),
//                         image : profile.picture,
//                         createdAt : "123_date_here_now-created",
//                         updatedAt : "123_date_here_now-updated"
//                     })
//                 }
//                 return true;
//             } 
//             catch (error) {
//                 console.log(error)
//                 console.log("Testing error place here here here")
//                 return false;
//             }
//         }
//     }
// })

// export { handler as GET, handler as POST };







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