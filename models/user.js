// Array de objetos (proyectos y cartas)

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    key: value,
    key2: value,
    key3: value
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;