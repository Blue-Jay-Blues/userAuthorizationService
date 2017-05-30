const express = require('express');
const session = require('express-session')
const app = express();
const passport = require('passport');

//Setup Passport:
app.use(session({secret: 'mySecret'}));  //Note: Replace with actual secret in production
app.use(passport.initialize());
app.use(passport.session());  //Make sessions persistent

//Setup Routes:
require('./route')(app, passport);

//Start Server:
app.listen(8080, () => console.log('User Authentication Service listening on port 8080'));

