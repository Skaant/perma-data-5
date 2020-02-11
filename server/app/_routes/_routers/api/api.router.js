const { Router } = require('express')

const router = Router()

router
  .get(
    '/plant-search',
    require('./plantSearch/plantSearch.handler')
  )

router
  .put(
    '/city-actions',
    require('./cityActions/cityActions.handler')
  )

router
  .use(
    '/auth',
    require('./_routers/auth/auth.router')
  )

module.exports = router