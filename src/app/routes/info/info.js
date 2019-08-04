const { Router } = require('express')

const package = require('../../../../package.json')

const router = Router()

router.get('/', (req, res) =>
  res.json(package))

module.exports = router