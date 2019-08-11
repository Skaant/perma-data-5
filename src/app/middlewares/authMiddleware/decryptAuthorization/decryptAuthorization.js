const atob = require('atob')

module.exports = authorization => {
  const encrypted = authorization.slice(6)
  const decrypted = atob(encrypted)
  if (!decrypted.includes(':')) {
    res
      .status(403)
      .send('Send a valid authentication header string, or do not use one at all.')
  }
  const splitDecr = decrypted.split(':')
  const username = splitDecr[0]
  const password = splitDecr[1]
  return {
    username,
    password
  }
}