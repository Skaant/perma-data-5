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

        reject(new Error('400: no `kolos-rayon`'))
      }

      const story = kolosRayon.stories
        && kolosRayon.stories['seedOverFrastStory']

      if (!story) {

        reject(new Error('400: no `seedOverFrastStory`'))
      }

      if (story.status !== 'NEW') {

        reject(new Error('400: `seedOverFrastStory` must be `status = \'NEW\'`'))
      }

      resolve({})
    }
  )
)