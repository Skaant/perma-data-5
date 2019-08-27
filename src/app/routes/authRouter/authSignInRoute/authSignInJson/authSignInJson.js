const decryptPassword = require('./decryptPassword/decryptPassword')
const getUser = require('./getUser/getUser')
const updateToken = require('./updateToken/updateToken')
var util = require('util')

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
      const password =
        decryptPassword(encryptedPassword)
      getUser(email)
        .then(user => {
          if (!user) {
            res
              .status(404)
              .send({
                message: 'User "'
                  + email
                  + '" cannot be found'
              })
          } else {
            if (user.password !== password) {
              res
                .status(403)
                .send({
                  message: 'Incorrect password for given user "'
                    + email
                    + '".'
                })
            } else {
              updateToken(user._id)
                .then(token => {
                  res.cookie(
                    'auth-token',
                    token,
                    {
                      maxAge: 432000000
                    }
                  )
                  res.send({
                    signIn: true
                  })
                })
            }
          }
        })
        .catch(err =>
          res
            .status(400)
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