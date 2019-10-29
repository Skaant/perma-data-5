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

app.use('/api', require('./_routes/_routers/api/api'))
app.get('/plant/:id', require('./_routes/plantId/plantId'))

app.use('/auth', require('./routes/authRouter/authRouter'))
app.use('/info', require('./routes/infoRouter/infoRouter'))
app.use('/data', require('./routes/dataRouter/dataRouter'))
app.use('/', require('./routes/rootRouter/rootRouter'))

module.exports = app