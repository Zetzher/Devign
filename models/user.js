// Array de objetos (proyectos y cartas)

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        String, required: true, unique: true
        },
    email: {
        String, required: true, unique: true
        },
    password: {
        String, required: true, unique: true
        },
    image: {
        String, default: '/public/images/logo-devign-green-50px.png'
        },
    projects: Array,
    cards: Array
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;