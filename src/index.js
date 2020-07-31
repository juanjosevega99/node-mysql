const express = require('express')
const morgan = require('morgan')

// initializations
const app = express()

// settings
app.set('port', process.env.PORT || 4000)

// middlewares
app.use(morgan('dev'))

// global variables

// route

// public

// starting server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'))
})