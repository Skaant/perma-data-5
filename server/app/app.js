const express = require('express')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const authMiddleware = require('./_middlewares/auth/auth.middleware')
const logMiddleware = require('./_middlewares/log/log.middleware')

const app = express()

app.use(favicon(__dirname + '/../../public/images/favicon.png'))

app.use('/public', express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser())

app.use(logMiddleware())
app.use(authMiddleware())

// ROUTES TREE

app.use(
  '/api',
  require('./_routes/_routers/api/api.router'))

app.get(
  '/plant/:id',
  require('./_routes/plantIdHandler/plantId.handler'))

app.get(
  '/',
  require('./_routes/homeHandler/home.handler'))


module.exports = app