import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    name : {
        type : String,
        required : [ true, "Your name is required."]
    },

    email : {
        type : String,
        unique : [ true, "This email already exists in our database."],
        required : [ true, "You need an email to register."]
    },
    
    username : {
        type : String,
        unique : [ true, "You need to create a username."],
        match : [/^(?=.{5,15}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, 
        "Username is invalid. It must be between 5 and 15 characters, and be unique." ]
    },

    image : {
        type : String
    }

})

const User = models.User || model("User", UserSchema);

export default User;












// code used from MERN stack with CD; may be applicable here; check for similarities
// ********************
// const mongoose = require('mongoose')

// const PlayerSchema = new mongoose.Schema({
//     playerName : {
//         type : String,
//         required : [ true, "You must include a player name."],
//         minLength : [ 2, "Player name must be at least two characters."]
//     },
    
//     prefPosition : {
//         type : String
//     },

//     gameOneStatus : {
//         type : String
//     },

//     gameTwoStatus : {
//         type : String
//     },

//     gameThreeStatus : {
//         type : String
//     }
    
// }, { timestamps : true })


// this is for a regular always-on, always-running backend server
// but, in Next.js, it's different because the route is only created and running for the time it's being called
// const Player = mongoose.model('Player', PlayerSchema)

// module.exports = Player