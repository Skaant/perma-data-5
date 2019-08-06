const { Router } = require('express')

const router = Router()

router.get('/', require('./infoGetRoute/infoGetRoute'))

module.exports = router