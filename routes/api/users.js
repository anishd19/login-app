const mongoose = require('mongoose');
const router = require('express').Router();
const passport = require('passport');
const User = mongoose.model('User');

//Register
router.post('/users', function(req, res, next){
  let user = new User();

  let {
    username,
    email,
    password,
    firstname,
    lastname,
    gender,
    country
  } = req.body.user;

  user.username = username;
  user.email = email;
  user.setPassword(password);
  user.firstname = firstname;
  user.lastname = lastname;
  user.gender = gender;
  user.country = country;

  user.save().then(function(){
    return res.json({user: user.toAuthJSON()});
  }).catch(next);
});

//Login
router.post('/users/login', function(req, res, next){
  if(!req.body.user.email){
    return res.status(422).json({errors: {email: "can't be blank"}});
  }

  if(!req.body.user.password){
    return res.status(422).json({errors: {password: "can't be blank"}});
  }

  passport.authenticate('local', {session: false}, function(err, user, info){
    if(err){ return next(err); }

    if(user){
      user.token = user.generateJWT();
      return res.json({user: user.toAuthJSON()});
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
});

module.exports = router;
