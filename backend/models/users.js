const mongoose = require("mongoose");

const {Schema} =  mongoose;

const {serviceSchema} = require("./events");

const usersSchema = new Schema({});

const Users = mongoose.model("User", usersSchema);

module.exports = Users;