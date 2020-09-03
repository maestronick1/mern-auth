require('dotenv').config();
//
//a passport strategy for authenticating with a JSON web token
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const mongoose = require('mongoose');
const passport = require('passport');
const { userInfo } = require('os');
//const USER = mongoose.model('User')
const options = {}
    options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
    options.secretOrKey = process.env.JWT_SECRET

module.exports = (passport)=>{
    passport.use(new JwtStrategy(options, (jwt_payload, done)=>{
        userInfo.findById(jwt_payload.id)
        .then(user=> {
            if(user ){
                //if user is found then we will return the user
                return done (null, user)
            }else{
            return done(null, false)
            }
        })
        .catch(error => console.log(error))
    }))
}