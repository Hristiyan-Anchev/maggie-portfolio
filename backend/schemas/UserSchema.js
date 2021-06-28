const mongoose = require("mongoose");
const types = mongoose.Types;
const userSchema = new mongoose.Schema({
    username:String,
    password:String,

});


module.exports = userSchema;