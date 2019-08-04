const express = require('express')
const infoRouter = require('./routes/info/info')

const app = express()

app.use('/info', infoRouter)

module.exports = app