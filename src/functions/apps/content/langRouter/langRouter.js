const { Router } = require('express')
const contentRouter = require('./contentRouter/contentRouter')
const langs = require('../../../../../config.json').langs

const router = Router()

langs.map(lang => router.use(`/${ lang }`, contentRouter(lang)))
// error on "/*"

module.exports = router