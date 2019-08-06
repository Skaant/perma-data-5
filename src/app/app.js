const express = require('express')
const infoRouter = require('./routes/infoRouter/infoRouter')

const app = express()

app.use('/info', infoRouter)

module.exports = app