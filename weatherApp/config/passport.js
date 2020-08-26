const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");

const opts = {};
const keys = require("../config/keys");

// SecretOrKey - a string containing the secret or public key used to verify the token's signature
opts.secretOrKey = keys.secretOrKey;

// JwtFromRequest - a required function which accepts a request as only parameter + returns JWT as a string or null.
// Reads JWT from http Authorization header using the scheme 'bearer':
// JWT is parsed from the request by this user-supplied callback (jwtFromRequest)
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

// Jwt_payload is sent by the login endpoint
// It is an object literal containing the decoded JWT payload
module.exports = passport => {
  passport.use(
    // Opts - an object literal with options to control how the token is extracted from the request (or verified).
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
