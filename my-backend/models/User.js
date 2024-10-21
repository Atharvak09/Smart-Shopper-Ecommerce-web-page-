const mongoose = require('mongoose');

// Create a user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensure usernames are unique
    trim: true, // Remove whitespace
    minlength: 3, // Minimum username length
    maxlength: 30, // Maximum username length
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Minimum password length
  },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt timestamps
});

// Export the User model
module.exports = mongoose.model('User', userSchema);
