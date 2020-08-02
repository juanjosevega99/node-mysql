const express = require('express')
const router = express.Router()

const passport = require('passport')
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth')

router.get('/signup', isNotLoggedIn, (req, res) => {
  res.render('auth/signup')
})

router.post('/signup', isNotLoggedIn, passport.authenticate('local.signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
}))

router.get('/signin', isNotLoggedIn, (req, res) => {
  res.render('auth/signin')
})

router.post('/signup', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local.signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
  })(req, res, next)
})

router.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile')
})

router.get('/logout', isNotLoggedIn, (req, res) => {
  req.logOut();
  res.redirect('/signin');
});

module.exports = router