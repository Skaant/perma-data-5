const authSignInJson = require('./authSignInJson/authSignInJson')

module.exports = (req, res) => {
  if(req.headers['content-type'].includes('application/json')) {
    authSignInJson(req, res)
  } else {
    res.status(404)
  }
}