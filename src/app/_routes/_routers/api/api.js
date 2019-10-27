const { Router } = require('express')

const router = Router()

router.get(
  '/plant-search',
  require('./plantSearch/plantSearch')
)

module.exports = router