import { connectToDb } from "@utils/database";
import User from '@models/User';
import { NextApiRequest, NextApiResponse } from "next";
// this may not be the right import above; check again if needed
import bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from "next/server";
// other recommendation is bcryptjs from bcryptjs
import jwt from 'jsonwebtoken'


connectToDb();

export async function POST( request ) {
    try {
        const reqBody = await request.json()
        const { email, password } = reqBody;
        console.log(reqBody)

        // check if the user exists
        const user = await User.findOne({ email })
        if(!user) {
            return NextResponse.json({ error : "User does not exist with that email address."}, 
            { status : 400 })
        }
        const validPassword = await bcrypt.compare( password, user.password )
        if(!validPassword) {
            return NextResponse.json({ error : "Invalid password. Try again."}, 
            { status : 400 })
        }
        // create token data is next
        const tokenData = {
            id : user._id,
            username : user.username,
            email : user.email
        }
        // create token
        const token = jwt.sign(
            tokenData, process.env.TOKEN_SECRET, 
            {expiresIn : "1d"}, 
            SameSite = None
            )
        // took away the await above, as well as the ! after the TOKEN_SECRET; problem?
        const response = NextResponse.json({
            message : "Login successful",
            success : true
        })

        response.cookies.set("token", token, { 
            httpOnly : true })

        return response

    }
    catch (error) {
        return NextResponse.json({ error : error.message }, { status : 500 })
    }
}