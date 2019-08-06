const config = require('../../../../../../config/config.json')
const package = require('../../../../../../package.json')

module.exports = 
  (req, res) =>
    res.send('<html>'
      + '<h1>Config</h1>'
      + Object.entries(config)
        .map(([k, v]) => 
          '<p>' + k 
            + ': ' + v
            + '</p>')
        .join('')
      + '<br/>'
      + '<h1>Package</h1>'
      + Object.entries(package)
        .map(([k, v]) =>
          '<p>' + k 
            + ': ' + v
            + '</p>')
        .join('') 
      + '</html>')
        