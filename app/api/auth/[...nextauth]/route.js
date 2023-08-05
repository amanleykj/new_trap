import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import { connectToDb } from "@utils/database";
import { connect } from "mongoose";
import User from '@models/User'

const handler = NextAuth({

    providers : [
        GoogleProvider({
            clientId : process.env.GOOGLE_ID,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET,
        })
    ],

    async session({ session }) {
        const sessionUser = await User.findOne({
            email : session.user.email
        })

        session.user.id = sessionUser._id.toString();

        return session;
    },

    async signIn({ profile }) {
        try {
            await connectToDb();

            // check if a user already exists in the first check
            const userExists = await User.findOne({
                email : profile.email
            })

            // if not, create a new user and save it to the database
            if(!userExists) {
                await User.create({
                    first_name : profile.first_name,
                    last_name : profile.last_name,
                    email : profile.email,
                    username : profile.username.replace(" ", "").toLowerCase(),
                    image : profile.picture
                })
            }
            return true;
        } 
        catch (error) {
            console.log(errror)
            return false;
        }

    }
})

export { handler as GET, handler as POST };