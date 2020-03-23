// Tendra un array de objetos
// Cada objeto tendra id de la carta y el del user

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: String,
    card: { type: Schema.Types.ObjectId, ref: 'Card' }
}, {
    timestamps: true
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
