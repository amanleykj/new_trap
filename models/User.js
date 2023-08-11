import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    first_name : {
        type : String,
        required : [ true, "Your first name is required."]
    },

    last_name : {
        type : String,
        required : [ true, "Your last name is also required."]
    },

    email : {
        type : String,
        required : [ true, "You need an email to register."],
        unique : [ true, "This email already exists in our database."]
    },

    password : {
        type : String,
        required : [ true, "You need a password."],
        min : [ 6, "This password must be at least six characters long."]
    },
    
    username : {
        type : String,
        required : [ true, "You need a username."],
        unique : [ true, "You need to create a username."],
        match : [/^(?=.{5,16}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, 
        "Username is invalid. It must be between 5 and 16 characters, and be unique." ]
    },

    image : {
        type : String
    },

    isVerified : {
        type : Boolean,
        default :  false
    },

    forgotPasswordToken : String,
    forgotPasswordTokenExpiry : Date,
    verifyToken : String,
    verifyTokenExpiry : Date

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