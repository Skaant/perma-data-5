const config = require('../../../../../../config/config.json')
const package = require('../../../../../../package.json')

module.exports = 
  (req, res) =>
    res.send('<html>'
      + '<h2>Config</h2>'
      + Object.entries(config)
        .map(([k, v]) => 
          '<p>' + k 
            + ': ' + v
            + '</p>')
        .join('')
      + '<br/>'
      + '<h2>Package</h2>'
      + Object.entries(package)
        .map(([k, v]) =>
          '<p>' + k 
            + ': ' + v
            + '</p>')
        .join('') 
      + '</html>')
        