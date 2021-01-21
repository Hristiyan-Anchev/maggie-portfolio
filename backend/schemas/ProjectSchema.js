const mongoose = require("mongoose");
const types = mongoose.Types;
const projectSchema = new mongoose.Schema({
    name:String,
    shortDescription:String,
    pictureURL:String,
    mainDescription:String,

});


module.exports = projectSchema;