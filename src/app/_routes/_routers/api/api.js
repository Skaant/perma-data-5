const { Router } = require('express')

const router = Router()

router
  .get(
    '/plant-search',
    require('./plantSearch/plantSearch')
  )

router
  .put(
    '/action',
    require('./action/action')
  )

router
  .use(
    '/auth',
    require('./_routers/auth/auth')
  )

module.exports = router