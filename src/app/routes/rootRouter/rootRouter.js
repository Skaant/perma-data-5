const { Router } = require('express')

const router = Router()

router.get(
  '/',
  require('./rootRoute/rootRoute')
)

module.exports = router