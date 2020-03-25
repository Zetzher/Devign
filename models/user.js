const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  imgPath: { type: String, default: '/images/profile-default.png' },
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
  cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }]
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
