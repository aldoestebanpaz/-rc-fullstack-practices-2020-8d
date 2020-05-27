const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  token: [ String ]
}, { versionKey: false });

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
