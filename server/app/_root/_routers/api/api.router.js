const { Router } = require('express')

const router = Router()

router
  .get(
    '/plant-search',
    require('./plantSearch/plantSearch.handler')
  )

router
  .put(
    '/actions',
    require('./actions/actions.handler')
  )

router
  .use(
    '/auth',
    require('./_routers/auth/auth.router')
  )

module.exports = router