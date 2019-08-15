const config = require('../../../../../../config/config.json')
const package = require('../../../../../../package.json')

module.exports = 
  (req, res) =>
    res
      .send(pug
        .renderFile(
          './src/app/views/pages/info/info.pug',
          {
            titles: {
              page: 'Informations',
              config: 'Run configuration',
              package: 'Stack configuration'
            }
          }))
        