const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const authMiddleware = require('./middlewares/authMiddleware/authMiddleware')

const app = express()

app.use('/public', express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser())

app.use(authMiddleware)

app.use('/auth', require('./routes/authRouter/authRouter'))
app.use('/info', require('./routes/infoRouter/infoRouter'))
app.use('/plant', require('./routes/plantRouter/plantRouter'))
app.use('/', require('./routes/rootRoute/rootRoute'))

module.exports = app