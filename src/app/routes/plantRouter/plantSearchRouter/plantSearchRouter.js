const { Router } = require('express')

const router = Router()

router
  .get(
    '/:searchValue',
    require(
      './plantSearchGetRoute/plantSearchGetRoute'
    )
  )

module.exports = router