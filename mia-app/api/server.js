const discordAuthRoutes = require('./auth/authCompany/discordAuth');
const googleAuthRoutes = require('./auth/authCompany/googleAuth');
const githubAuthRoutes = require('./auth/authCompany/gitHubAuth');
const authRoutes = require('./auth/auth');
const passport = require('passport');
const express = require('express');
const path = require('path');
const cors = require('cors');
require('./auth/passport-setup');
require('dotenv').config();

const connectDB = require('./db');
connectDB();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
  origin: 'https://belance.netlify.app/',
  methods: ['*'],
  credentials: true,
  allowedHeaders: ['*'],
}));

app.use(passport.initialize());

app.use('/', googleAuthRoutes);
app.use('/', githubAuthRoutes);
app.use('/', discordAuthRoutes);

app.use('/api', authRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
