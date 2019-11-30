const { Router } = require('express')

const router = Router()

router.get(
  '/check-token',
  require('./checkToken/checkToken')
)

router.put(
  '/sign-in',
  require('./signIn/signIn')
)

router.put(
  '/sign-up',
  require('./signUp/signUp')
)

router.put(
  '/recover-password',
  require('./recoverPassword/recoverPassword')
)

module.exports = router