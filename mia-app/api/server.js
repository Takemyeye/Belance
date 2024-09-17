const express = require('express');
const cors = require('cors');
const passport = require('passport');
const path = require('path');
require('./auth/passport-setup');
const connectDB = require('./db');
const discordAuthRoutes = require('./auth/authCompany/discordAuth');
const googleAuthRoutes = require('./auth/authCompany/googleAuth');
const githubAuthRoutes = require('./auth/authCompany/gitHubAuth');
const authRoutes = require('./auth/auth');

connectDB();

const app = express();

app.use(cors({
  origin: 'https://belance.netlify.app/',
  methods: ['*'],
  credentials: true,
  allowedHeaders: ['*'],
}));

app.use(passport.initialize());

app.use('/auth', googleAuthRoutes);
app.use('/auth', githubAuthRoutes);
app.use('/auth', discordAuthRoutes);

app.use('/api', authRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

module.exports = app;
