const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const User = require('../models/User');

// Register route
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  User.findOne({ email }).then(user => {
    if (user) {
      return res.status(400).json({ error: 'Email already exists' });
    } else {
      const newUser = new User({
        name,
        email,
        password
      });

      // Save user to database
      newUser.save().then(user => {
        res.json(user);
      }).catch(err => console.log(err));
    }
  });
});

// Login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ error: 'Email not found' });
    }

    // Check password
    if (password === user.password) {
      // Create JWT payload
      const payload = {
        id: user.id,
        name: user.name
      };

      // Sign token
      jwt.sign(
        payload,
        keys.secretOrKey,
        { expiresIn: 3600 },
        (err, token) => {
          res.json({
            success: true,
            token: 'Bearer ' + token
          });
        }
      );
    } else {
      return res.status(400).json({ error: 'Password incorrect' });
    }
  });
});

module.exports = router;