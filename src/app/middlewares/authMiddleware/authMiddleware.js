const decryptAuthorization = require('./decryptAuthorization/decryptAuthorization')

module.exports = (req, res, next) => {
  const authorization = req.headers.authorization
  if (authorization) {
    const decrypted = decryptAuthorization(authorization)
    req.user = decrypted
  }
  next()
}