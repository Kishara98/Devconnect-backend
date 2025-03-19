const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    skills: {
      type: Array,
      required: true,
    },
    gitHubLink: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('user', userSchema);

module.exports = User;
