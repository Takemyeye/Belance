const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const DiscordStrategy = require('passport-discord').Strategy;
const passport = require('passport');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
  userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
},
async (accessToken, refreshToken, profile, done) => {
  try {
    const { sub: id, name, email, picture, verified_email, locale } = profile._json || {};
    const user = {
      id,
      username: name,
      email,
      avatar: picture,
      verified: verified_email,
      locale,
      provider: 'google',
      token: accessToken
    };
    done(null, user);
  } catch (err) {
    done(err);
  }
}));

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: '/auth/github/callback',
  scope: ['user:email'] 
},
async (accessToken, refreshToken, profile, done) => {
  try {
    const { id, username, emails, _json } = profile;

    const email = (Array.isArray(emails) && emails.length > 0) ? emails[0].value : null;
    
    if (!email) {
      console.error('Email не найден в профиле GitHub');
      return done(new Error('Email не найден в профиле GitHub'));
    }

    const user = {
      id,
      username,
      email,
      avatar: _json.avatar_url,
      provider: 'github',
      token: accessToken
    };
    done(null, user);
  } catch (err) {
    done(err);
  }
}));

passport.use(new DiscordStrategy({
  clientID: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_CLIENT_SECRET,
  callbackURL: '/auth/discord/callback',
  scope: ['identify', 'email', 'guilds']
},
async (accessToken, refreshToken, profile, done) => {
  try {
    const { id, username, email, avatar } = profile;

    const user = {
      id,
      username,
      email,
      avatar: `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`,
      provider: 'discord',
      token: accessToken
    };
    done(null, user);
  } catch (err) {
    done(err);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});
