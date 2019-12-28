const { Router } = require('express')

const router = Router()

router.get(
  '/check-token',
  require('./checkToken/checkToken.handler')
)

router.put(
  '/sign-in',
  require('./signIn/signIn.handler')
)

router.put(
  '/sign-up',
  require('./signUp/signUp.handler')
)

router.put(
  '/recover-password',
  require('./recoverPassword/recoverPassword.handler')
)

module.exports = router