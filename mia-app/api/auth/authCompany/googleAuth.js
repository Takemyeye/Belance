const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
require('dotenv').config();

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY;

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, SECRET_KEY);
};

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/auth/google/callback', passport.authenticate('google', { session: false }), async (req, res) => {
  const user = req.user;
  
  const existingUser = await User.findOne({ id: user.id, email: user.email });

  if (!existingUser) {
    const token = generateToken(user);

    const newUser = new User({
      id: user.id,
      username: user.username,
      avatar: user.avatar,
      email: user.email,
      verified: user.verified,
      locale: user.locale,
      token: token
    });

    await newUser.save();
    res.redirect(`http://localhost:8080?token=${token}`);
  } else {
    res.redirect(`http://localhost:8080?token=${existingUser.token}`);
  }
});

router.get('/api/current_user', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Токен не предоставлен' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const user = await User.findOne({ id: decoded.id, token: token });
    if (!user) {
      return res.status(404).json({ error: 'Пользователь не найден или токен неверный' });
    }

    res.json(user);
  } catch (err) {
    return res.status(401).json({ error: 'Неверный или истекший токен' });
  }
});

module.exports = router;
