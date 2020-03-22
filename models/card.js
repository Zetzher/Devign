// Array objetos con las keys de la informacion que tenga la carta

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema ({
<<<<<<< HEAD
    message: { type: String, unique: true },
    type: String,
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
=======
    user: String,
    type: {
        String, value: ['A', 'B', 'C']
        },
    title: String,
    description: String
>>>>>>> develop
}, {
    timestamps: true
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;