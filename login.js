//********************
//Requirements
//********************
// const session = require('express-session');
const passport = require('passport');

//Import strategy modules:
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;

//Setup Authorization Variables:
const configAuth = require('./auth');

module.exports = (passport) => {
  //********************
  //Serialization
  //********************
  passport.serializeUser((user, done) => {
    done(null, user._json);  //Serialize the user's profile information
  });

  passport.deserializeUser((id, done) => {
    done(null, id);
  });

  //********************
  //Strategies
  //********************
  //**********
  //Google
  //**********
  passport.use(new GoogleStrategy({
      clientID: configAuth.googleAuth.clientID,
      clientSecret: configAuth.googleAuth.clientSecret,
      callbackURL: configAuth.googleAuth.callbackURL
    }, (token, refreshToken, profile, done) => done(null, profile)
  ));

  //**********
  //Facebook
  //**********
  passport.use(new FacebookStrategy({
      clientID: configAuth.facebookAuth.clientID,
      clientSecret: configAuth.facebookAuth.clientSecret,
      callbackURL: configAuth.facebookAuth.callbackURL
    }, (token, refreshToken, profile, done) => done(null, profile)
  ));

  //**********
  //Twitter
  //**********
  passport.use(new TwitterStrategy({
      consumerKey: configAuth.twitterAuth.consumerKey,
      consumerSecret: configAuth.twitterAuth.consumerSecret,
      callbackURL: configAuth.twitterAuth.callbackURL
    }, (token, refreshToken, profile, done) => done(null, profile)
  ));
};

