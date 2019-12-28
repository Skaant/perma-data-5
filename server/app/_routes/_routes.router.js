const { Router } = require('express')

const router = Router()

router.use(
  '/api',
  require('./_routers/api/api.router'))

router.get(
  '/plant/:id',
  require('./plantId/plantId.handler'))

router.get(
  '/',
  require('./home/home.handler'))

module.exports = router