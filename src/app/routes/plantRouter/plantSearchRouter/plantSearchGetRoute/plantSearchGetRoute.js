// const plantSearchGetHtml = require('./plantSearchGetHtml/plantSearchGetHtml')
const plantSearchGetJson = require('./plantSearchGetJson/plantSearchGetJson')

module.exports = (req, res) => {
  /* if(req.headers['accept'].includes('text/html')) {
    plantSearchGetHtml(req, res)
  } else { */
    plantSearchGetJson(req, res)
  // }
}