const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY;

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email, provider: user.provider }, SECRET_KEY);
};

const handleAuthCallback = async (req, res) => {
  const user = req.user;
  try {
    let existingUser = await User.findOne({ 
      id: user.id, 
      email: user.email, 
      username: user.username 
    });

    if (!existingUser) {
      const token = generateToken(user);

      const newUser = new User({
        id: user.id,
        username: user.username,
        avatar: user.avatar,
        email: user.email,
        provider: user.provider,
        token: token
      });

      try {
        await newUser.save();
        res.redirect(`http://localhost:3000?token=${token}`);
      } catch (saveErr) {
        if (saveErr.code === 11000) {
          return res.status(400).send('Пользователь с такими данными уже существует.');
        }
        throw saveErr;
      }
    } else {
      const token = generateToken(existingUser);
      res.redirect(`http://localhost:3000?token=${token}`);
    }
  } catch (err) {
    console.error('Ошибка при работе с пользователями:', err);
    res.status(500).send('Ошибка сервера');
  }
};

// Google Authentication
router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/auth/google/callback', passport.authenticate('google', { session: false }), handleAuthCallback);

// GitHub Authentication
router.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

router.get('/auth/github/callback', passport.authenticate('github', { session: false }), handleAuthCallback);

// Discord Authentication
router.get('/auth/discord', passport.authenticate('discord', { scope: ['identify', 'email'] }));

router.get('/auth/discord/callback', passport.authenticate('discord', { session: false }), handleAuthCallback);

// Get Current User
router.get('/api/current_user', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Токен не предоставлен' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const user = await User.findOne({ id: decoded.id, email: decoded.email, username: decoded.username, token: token });
    if (!user) {
      return res.status(404).json({ error: 'Пользователь не найден или токен неверный' });
    }

    res.json(user);
  } catch (err) {
    return res.status(401).json({ error: 'Неверный или истекший токен' });
  }
});

module.exports = router;
