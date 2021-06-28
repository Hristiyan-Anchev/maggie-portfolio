const mongoose = require("mongoose");
const userSchema = require("../schemas/UserSchema");

const SiteUser = mongoose.model("SiteUser",userSchema);

module.exports = SiteUser;
