const mongoose = require("./../db/db");

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

// Create a model
const User = mongoose.model('User', userSchema);

module.exports = User;


