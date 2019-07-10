const express = require('express')
const langMiddleware = require('./middlewares/lang/lang')
const langRouter = require('./langRouter/langRouter')

const app = express()

app.use(langMiddleware)

app.set("view engine", "pug")

app.use(langRouter)

module.exports = app