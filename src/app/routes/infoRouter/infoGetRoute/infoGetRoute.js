const infoGetHtml = require('./infoGetHtml/infoGetHtml')
const infoGetJson = require('./infoGetJson/infoGetJson')

module.exports = (req, res) => {
  if(req.headers['accept'].includes('text/html')) {
    infoGetHtml(req, res)
  } else {
    infoGetJson(req, res)
  }
}