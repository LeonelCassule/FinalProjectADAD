const mongoose = require("mongoose");

const {Schema} =  mongoose;

const eventSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
}, {timestamps:true});

const Events = mongoose.model("Events", eventSchema);


module.exports = {
    Events,
    eventSchema,
}; 