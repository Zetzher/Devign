// Tendra un array de objetos
// Cada objeto tendra id de la carta y el del user

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema ({
    key: value,
    key2: value,
    key3: value
}, {
    timestamps: true
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;