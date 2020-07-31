const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')

// initializations
const app = express()

// settings
app.set('port', process.env.PORT || 4000)
app.engine('.hbs', exphbs({
  defaultLayout: 'main'
}))

// middlewares
app.use(morgan('dev'))

// global variables

// routes
app.use(require('./routes'))

// public

// starting server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'))
})