const mongoose = require("mongoose");

const {Schema} =  mongoose;

const {eventSchema} = require("./events");

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    occupation:{
        type: String,
        required: true
    },

   /* events: {
        type: [eventSchema],
    },*/

}, {timestamps:true}

);



const Users = mongoose.model("users", userSchema);


module.exports = Users; 