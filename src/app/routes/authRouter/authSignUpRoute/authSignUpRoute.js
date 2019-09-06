const authSignUpJson = require('./authSignUpJson/authSignUpJson')

module.exports = (req, res) => {
  if(req.headers['content-type'].includes('application/json')) {
    authSignUpJson(req, res)
  } else {
    res.status(404)
  }
}