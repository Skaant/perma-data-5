const decryptAuthorization = require('./decryptAuthorization/decryptAuthorization')
const getUser = require('./getUser/getUser')

module.exports = (req, res, next) => {
  const authorization = req.headers.authorization
  if (authorization) {
    const { username, password } =
      decryptAuthorization(authorization)
    getUser(username, password)
      .then(user => {
        if (!user) {
          res
            .status(404)
            .send('User '
              + username
              + ' cannot be found, or password didn\'t match.')
        }
        req.user = user
        next()
      })
      .catch(err =>
        req
          .status(400)
          .send(err))
  } else {
    next()
  }
}