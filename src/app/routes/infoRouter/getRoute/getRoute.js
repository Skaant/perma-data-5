const htmlHandler = require('./htmlHandler/htmlHandler')
const jsonHandler = require('./jsonHandler/jsonHandler')

module.exports = (req, res) => {
  if(req.headers['accept'].includes('text/html')) {
    htmlHandler(req, res)
  } else {
    jsonHandler(req, res)
  }
}