const { Router } = require('express')

const router = Router()

router.get('/', require('./getRoute/getRoute'))

module.exports = router