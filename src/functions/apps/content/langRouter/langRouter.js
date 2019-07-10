const { Router } = require('express')
const contentRouter = require('./contentRouter/contentRouter')
const langs = require('../../../../../config.json').langs

const router = Router()

langs.map(lang =>
  router.use(`/${ lang }`, contentRouter))

// should be delegated to lang middleware
router.use('/*', (req, res) =>
  res.status(404).send('<html id="error" lang="en">ok</html>'))

module.exports = router