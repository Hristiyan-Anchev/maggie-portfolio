const mongoose = require("mongoose");
const projectSchema = require("../schemas/ProjectSchema");

const Project = mongoose.model("Project",projectSchema);

module.exports = Project;