const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
  cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }]
});

userSchema.set('timestamps', true);

const User = mongoose.model('User', userSchema);

module.exports = User;