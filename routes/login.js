const express = require('express');
const path = require('path');
const User = require('./../models/User');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user) {
      // Check if the provided password matches the stored password
      if (user.password === password) {
        req.session.user = { username, password };
        const route = req.session.url ? req.session.url : "/home"
        res.redirect(route);
      } else {
        res.render('login', { error: 'Invalid password' });
      }
    } else {
      res.render('login', { error: 'User not found' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
