const SwitchChainItem = require('../../../../../../../../../../app/_patterns/_chains/_classes/SwitchChainItem/SwitchChainItem')
/** cityActions _chains index */
const cityActionsChains = require('../../../../')

module.exports = new SwitchChainItem(
  ({
    type
  }) =>

    new Promise(resolve =>

      resolve(cityActionsChains[type]))
)