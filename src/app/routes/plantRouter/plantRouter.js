const { Router } = require('express')

const router = Router()

router.use(
  '/search',
  require('./plantSearchRouter/plantSearchRouter')
)
router.get(
  '/:id',
  require('./plantIdGetRoute/plantIdGetRoute')
)

module.exports = router