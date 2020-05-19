const ControlChainItem = require('../../../../../../../../../../app/_patterns/_chains/_classes/ControlChainItem/ControlChainItem')

module.exports = new ControlChainItem(
  ({
    user
  }) =>

    new Promise((
      resolve
    ) => {

      const nextBuildings = user
        .buildings

      nextBuildings['kolos-rayon']
        .quests['tuto2Quest']
          .status = 'READ'

      nextBuildings['kolos-rayon']
        .stories = {
          seedOverFrastStory: {
            status: 'NEW'
          },
          kolosXanStory: {
            status: 'NEW'
          }
        }

      resolve({ nextBuildings })
    }
  )
)