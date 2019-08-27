const { Router } = require('express')

const router = Router()

router.put('/sign-in', require('./authSignInRoute/authSignInRoute'))

module.exports = router