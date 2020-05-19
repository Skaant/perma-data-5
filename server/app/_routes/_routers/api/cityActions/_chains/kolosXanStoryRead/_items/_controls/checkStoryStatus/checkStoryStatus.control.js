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

        reject(new Error('400: no `kolos-rayon`'))
      }

      const story = kolosRayon.stories
        && kolosRayon.stories['kolosXanStory']

      if (!story) {

        reject(new Error('400: no `kolosXanStory`'))
      }

      if (story.status !== 'NEW') {

        reject(new Error('400: `kolosXanStory` must be `status = \'NEW\'`'))
      }

      resolve({})
    }
  )
)