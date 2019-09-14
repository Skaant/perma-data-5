const pug = require('pug')

const { Router } = require('express')

const router = Router()

router.get(
  '/home',
  require('./homeRoute/homeRoute')
)

module.exports = router