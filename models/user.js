const mongoose = require('mongoose');
const Schema = mongoose.Schema;

<<<<<<< HEAD
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
  cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }]
=======
const userSchema = new Schema ({
    // name: {
    //     String, required: true, unique: true
    //     },
    // email: {
    //     String, required: true, unique: true
    //     },
    // password: {
    //     String, required: true, unique: true
    //     },
    // image: {
    //     String, default: '/public/images/logo-devign-green-50px.png'
    //     },
    // projects: Array,
    // cards: Array
}, {
    timestamps: true
>>>>>>> develop
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;