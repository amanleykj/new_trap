import { Schema, model, models } from 'mongoose';

const OrderSchema = new Schema({
    creator : {
        type : Schema.Types.ObjectId,
        ref : 'User', 
    },
    
    combo : {
        type : String,
        required : [ true, "Combo choice required."]
    },
    
    sauce : {
        type : String,
        required : [ true, "Choose a sauce. It's required."],
        
    },
    
    side : {
        type : String,
        required : [ true, "Don't forget your side."]
    },
    
    drink : {
        type : String,
        required : [ true, "You might want a drink with that."]
    },

    notes : {
        type : String
    }
})

const Order = models.Order || model("Order", OrderSchema);

export default Order;