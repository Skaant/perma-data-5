const ControlChainItem = require('../../../../../../../../../../app/_patterns/_chains/_classes/ControlChainItem/ControlChainItem')

module.exports = new ControlChainItem(
  ({
    user
  }) =>

    new Promise((
      resolve,
      reject
    ) => {

      const kolosRayon = user
        .buildings['kolos-rayon']

      if (!kolosRayon) {

        reject(new Error('400: Pas de `kolos-rayon`'))
      }

      const quest = kolosRayon.quests
        && kolosRayon.quests['tuto1Quest']

      if (!quest) {

        reject(new Error('400: pas de quête `tuto1Quest`'))
      }

      if (quest.status !== 'VALIDATED') {

        reject(new Error('400: `tuto1Quest` doit être au `status = \'VALIDATED\'`'))
      }

      resolve({})
    }
  )
)