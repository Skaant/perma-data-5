/** cityActions _chains index */
const cityActionsChains = require('../../../../')

module.exports = {
  type: 'switch',
  action: ({
    type
  }) =>

    new Promise(resolve =>

      resolve(cityActionsChains[type]))
}