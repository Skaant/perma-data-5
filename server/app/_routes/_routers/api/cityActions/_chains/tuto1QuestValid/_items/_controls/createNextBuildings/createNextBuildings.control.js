const ControlChainItem = require('../../../../../../../../../../app/_patterns/_chains/_classes/ControlChainItem/ControlChainItem')

module.exports = new ControlChainItem(
  __filename,
  ({
    user
  }) =>

    new Promise((
      resolve
    ) => {

      const nextBuildings = user
        .buildings

      nextBuildings['kolos-rayon']
        .quests = {
          tuto2Quest: {
            status: 'NEW'
          }
        }

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