const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String },
  avatar: { type: String },
  email: { type: String, required: true },
  token: { type: String },
  provider: { type: String }
});

UserSchema.index({ id: 1, email: 1, username: 1 }, { unique: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;
