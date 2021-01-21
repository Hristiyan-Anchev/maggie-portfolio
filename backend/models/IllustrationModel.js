const mongoose = require("mongoose");
const illustrationSchema = require("../schemas/IllustrationSchema");

const Illustration = mongoose.model("Illustration",illustrationSchema);

module.exports = Illustration;