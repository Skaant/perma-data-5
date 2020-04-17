const ControlChainItem = require('../../../../../../../../../../_patterns/_chains/_classes/ControlChainItem/ControlChainItem')

module.exports = new ControlChainItem(
  ({
    emailUsersCount
  }) =>
  
    new Promise((
      resolve,
      reject
    ) => {
  
      if (emailUsersCount > 0) {
  
        reject(Error('400: `userEmailUnique`, Le mail fourni est déjà utilisé (alors qu\'il devrait être unique).'))
      }
  
      resolve({})
    }
  )
)