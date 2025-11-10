const mongoose = require("mongoose");

const {Schema} =  mongoose;

const eventSchema = new Schema({

    TituloPortugal:{
        type: String,
        required: true
},
    TituloOriginal:{
        type: String,
        required: true
},

    Licenciador:{
        type: String,
        required: true
},

    NumeroRegisto:{
        type: String,
        required: true
},
    DataAutenticacao:{
        type: String,
        required: true
},

Tipo:{
    type: String,
    require: true
},
 
    Classificacao:{
        type: String,
        required: true
},

    Distribuidor:{
        type: String,
        required: true
},
/*

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
    */
}, {timestamps:true});

const Events = mongoose.model("events", eventSchema);


module.exports = {
    Events,
    eventSchema,
}; 