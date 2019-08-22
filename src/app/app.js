const express = require('express')
const path = require('path')
const authMiddleware = require('./middlewares/authMiddleware/authMiddleware')

const app = express()

app.use('/public', express.static('public'))

app.use(authMiddleware)
app.use('/info', require('./routes/infoRouter/infoRouter'))
app.use('/plant', require('./routes/plantRouter/plantRouter'))
app.use('/', require('./routes/rootRoute/rootRoute'))

module.exports = app