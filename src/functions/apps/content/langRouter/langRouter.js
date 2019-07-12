const { Router } = require('express')
const contentRouter = require('./contentRouter/contentRouter')
const errorHandler = require('../errorHandler/errorHandler')
const langs = require('../../../../../config.json').langs

const router = Router()

langs.map(lang =>
  router.use(`/${ lang }`, contentRouter))

// should be delegated to lang middleware
router.use('/*', errorHandler({
  status: 404
}))

module.exports = router