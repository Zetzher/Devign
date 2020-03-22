// Array objetos con las keys de la informacion que tenga la carta

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema ({
    user: String,
    type: {
        String, value: ['A', 'B', 'C']
        },
    title: String,
    description: String
}, {
    timestamps: true
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;