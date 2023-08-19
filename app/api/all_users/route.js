import { connectToDb } from '@utils/database'
import User from '@components/User'


export const GET = async ( request, response, { params } ) => {
    try {
        await connectToDb();
        const users = await User.find({ creator : params.id }).populate('creator');
        return new Response(JSON.stringify(users), { status : 200 })

    }
    catch (error) {
        return new Response(`Failed to get the users loaded. Something went wrong. ${error}`, { status : 500 })

    }
}