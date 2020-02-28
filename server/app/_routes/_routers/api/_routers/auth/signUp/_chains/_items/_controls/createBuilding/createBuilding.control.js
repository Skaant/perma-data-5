const ControlChainItem = require('../../../../../../../../../../_patterns/_chains/_classes/ControlChainItem/ControlChainItem')

module.exports = new ControlChainItem(
  __filename,
  () =>

    new Promise(resolve => {

      const buildings = {
        'kolos-rayon': {
          zums: 3,
          quests: {
            'tuto1Quest': {
              status: 'NEW'
            }
          }
        }
      }

      resolve({
        buildings
      })
    }
  )
)