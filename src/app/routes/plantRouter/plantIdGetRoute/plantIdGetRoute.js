const plantIdGetHtml = require('./plantIdGetHtml/plantIdGetHtml')
const plantIdGetJson = require('./plantIdGetJson/plantIdGetJson')

module.exports = (req, res) => {
  if(req.headers['accept'].includes('text/html')) {
    plantIdGetHtml(req, res)
  } else {
    plantIdGetJson(req, res)
  }
}