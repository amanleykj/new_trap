import mongoose from "mongoose";

let isConnected = false;
// the above tracks the connection; this is currently coming back
// as 'not [being] a function'
export const connectToDb = async () => {
    mongoose.set('strictQuery', true);
    if(isConnected) {
        console.log("MongoDB is already connected. Don't fret.");
        return
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName : "trappas-trappets",
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        isConnected = true;
        console.log("MongoDB is now connected.")
    } 
    catch (error) {
        console.log(error);
    }
}
