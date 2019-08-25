const provisioner = require('./provisioner/provisioner')
const pug = require('pug')
const htmlRejection = require('../../../../../utils/handlers/htmlRejection/htmlRejection')

module.exports = 
  (req, res) => {
    const { id } = req.params
    provisioner(id)
      .then(({ data, sources }) => {
        const plantName =
          data['name,fr'][0].value
        res
          .send(pug
            .renderFile(
              './src/app/views/pages/plantId/plantId.pug', 
              {
                titles: {
                  page: plantName,
                  data: 'Données',
                  sources: 'Sources'
                },
                plant: {
                  id,
                  data,
                  sources
                }
              }))
            })
      .catch(err =>
        htmlRejection(res, err))}