const express = require('express')
// const middlewares = require('./middlewares/middlewares')
const langRouter = require('./langRouter/langRouter')

// const app = middlewares(express())
const app = express()

app.set("view engine", "pug")

app.use(langRouter)

module.exports = app