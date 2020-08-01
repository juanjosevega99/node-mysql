const express = require('express')
const router = express.Router()

const passport = require('passport')
// const { isLoggedIn } = require('../lib/auth')

router.get('/signup', (req, res) => {
  res.render('/auth/signup')
})

router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
}))

// router.get('/profile', isLoggedIn, (req, res) => {
//   res.render('profile')
// })

module.exports = router