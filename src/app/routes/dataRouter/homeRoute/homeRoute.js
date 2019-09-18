const provisioner = require('./provisioner/provisioner')
const pug = require('pug')
const jsonRejection = require('../../../../utils/handlers/jsonRejection/jsonRejection')

module.exports = 
  (req, res) => {
    if (!req.user) {
      jsonRejection(
        res,
        'You must be connected in order to retrieve user home data.',
        403)
    }
    provisioner(req.user._id)
      .then(buildings =>
        res
          .json({
            buildings
          }))
      .catch(err =>
        jsonRejection(res, err))}