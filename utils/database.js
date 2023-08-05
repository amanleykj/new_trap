import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log("MongoDB is already connected. Don't fret.");
        return
    }
    
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName : "share_prompt",
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        isConnected(true);
        console.log("MongoDB is now connected.")
    } 
    catch (error) {
        console.log(error);
    }
}
