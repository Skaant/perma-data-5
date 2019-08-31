const { Router } = require('express')

const router = Router()

router.put('/sign-in', require('./authSignInRoute/authSignInRoute'))
router.put('/sign-out', require('./authSignUpRoute/authSignUpRoute'))

module.exports = router