const express = require('express')
const rootRoute = require('./routes/rootRoute/rootRoute')
const infoRouter = require('./routes/infoRouter/infoRouter')

const app = express()

app.use('/info', infoRouter)
app.use('/', rootRoute)

module.exports = app