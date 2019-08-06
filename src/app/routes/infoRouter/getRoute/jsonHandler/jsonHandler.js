const config = require('../../../../../../config/config.json')
const package = require('../../../../../../package.json')

module.exports =
  (req, res) =>
    res.json({
      config,
      package
    })