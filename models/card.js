// Array objetos con las keys de la informacion que tenga la carta

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema ({
    key: value,
    key2: value,
    key3: value
}, {
    timestamps: true
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;