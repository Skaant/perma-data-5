const decryptPassword = require('../../_utils/decryptPassword/decryptPassword')
const createUser = require('./createUser/createUser')

module.exports = (req, res, next) => {

  if (!req.body) {
    res.status(400)
      .send('You must provide an email & a password.')

  } else {

    const {
      email,
      password: encryptedPassword
    } = req.body

    if (email && encryptedPassword) {

      const user = {
        email,
        password: decryptPassword(encryptedPassword),
        token: Math
          .random().toString(36).substr(2)
      }

      createUser(user)
        .then(_id => {
          res.cookie(
            'auth-token',
            user.token,
            {
              maxAge: 432000000
            }
          )
          res.cookie(
            'auth-email',
            email,
            {
              maxAge: 432000000
            }
          )
          res.send({
            signUp: true
          })
        })
        .catch(err =>
          res
            .status(500)
            .send(err))
    } else {
      res
        .status(400)
        .send({
          message: 'Both email & password must be provided.'
        })
    }
  }
}