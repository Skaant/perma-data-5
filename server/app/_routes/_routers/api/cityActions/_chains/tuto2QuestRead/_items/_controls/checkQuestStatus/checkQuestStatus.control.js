const ControlChainItem = require('../../../../../../../../../../app/_patterns/_chains/_classes/ControlChainItem/ControlChainItem')

module.exports = new ControlChainItem(
  __filename,
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
        && kolosRayon.quests['tuto2Quest']

      if (!quest) {

        reject(new Error('400: pas de quête `tuto2Quest`'))
      }

      if (quest.status !== 'NEW') {

        reject(new Error('400: `tuto2Quest` doit être au `status = \'NEW\'`'))
      }

      resolve({})
    }
  )
)