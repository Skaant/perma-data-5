const package = require('../../../../package.json')

module.exports = (req, res) =>
  res.send('<html>'
    + '<h1>PERMA-DATA</h1>'
    + '<p>'
    + package.description
    + '</p>'
    + '</html>')