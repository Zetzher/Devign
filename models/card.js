// Array objetos con las keys de la informacion que tenga la carta

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema ({
    description: { type: String, unique: true, required: true },
    type: {
        String, value: ['A', 'B', 'C']
        },
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;