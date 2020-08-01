const express = require('express')
const router = express.Router()

const passport = require('passport')
// const { isLoggedIn } = require('../lib/auth')

router.get('/signup', (req, res) => {
  res.render('auth/signup')
})

router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
}))

router.get('/signin', (req, res) => {
  res.render('auth/signin')
})

router.post('/signup', (req, res, next) => {
  passport.authenticate('local.signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
  })(req, res, next)
})

// router.get('/profile', isLoggedIn, (req, res) => {
//   res.render('profile')
// })

module.exports = router