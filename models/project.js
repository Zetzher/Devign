// Tendra un array de objetos
// Cada objeto tendra id de la carta y el del user

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema ({
    key: String,
    key2: String,
    key3: String
}, {
    timestamps: true
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;