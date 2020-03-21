// Array de objetos (proyectos y cartas)

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    key: String,
    key2: String,
    key3: String
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;