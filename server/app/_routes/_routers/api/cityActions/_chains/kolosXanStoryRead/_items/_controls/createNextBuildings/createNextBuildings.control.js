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
        .stories['kolosXanStory']
          .status = 'READ'

      const secondStory = nextBuildings['kolos-rayon']
        .stories['seedOverFrastStory']

      // The other story has been read :
      //  The `intro2Quest` must be validated
      if (secondStory.status === 'READ') {

        nextBuildings['kolos-rayon']
          .quests['tuto2Quest']
            .status = 'VALIDATED'
      }

      resolve({ nextBuildings })
    }
  )
)