const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  workoutHistory: {type: Array},
  weightHistory: {type: Array}
});

const User = mongoose.model("User", userSchema);

module.exports = User;