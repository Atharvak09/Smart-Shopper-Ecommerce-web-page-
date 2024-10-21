const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator'); // For validation
const User = require('../models/User');

const router = express.Router();

// Register a new user (Sign up)
router.post(
  '/signup',
  [
    check('username').not().isEmpty().withMessage('Username is required'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],
  async (req, res) => {
    const { username, password } = req.body;
    
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Check if user exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();

      return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error during signup:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
);

// Login user
router.post(
  '/login',
  [
    check('username').not().isEmpty().withMessage('Username is required'),
    check('password').not().isEmpty().withMessage('Password is required'),
  ],
  async (req, res) => {
    const { username, password } = req.body;

    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      if (!process.env.JWT_SECRET) {
        return res.status(500).json({ message: 'JWT secret missing in server configuration' });
      }

      // Generate the JWT token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return res.json({ token });
    } catch (error) {
      console.error('Error during login:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
);

module.exports = router;
