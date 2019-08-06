const express = require('express')

const app = express()

app.use('/info', require('./routes/infoRouter/infoRouter'))
app.use('/plant', require('./routes/plantRouter/plantRouter'))
app.use('/', require('./routes/rootRoute/rootRoute'))

module.exports = app