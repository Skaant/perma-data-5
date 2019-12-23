const { Router } = require('express')

const router = Router()

router
  .get(
    '/plant-search',
    require('./plantSearch/plantSearch')
  )

router
  .put(
    '/actions',
    require('./actions/actions')
  )

router
  .use(
    '/auth',
    require('./_routers/auth/auth')
  )

module.exports = router