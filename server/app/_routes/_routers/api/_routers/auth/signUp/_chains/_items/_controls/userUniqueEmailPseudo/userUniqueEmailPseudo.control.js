const ControlChainItem = require('../../../../../../../../../../_patterns/_chains/_classes/ControlChainItem/ControlChainItem')

module.exports = new ControlChainItem(
  ({
    body,
    users
  }) =>
  
    new Promise((
      resolve,
      reject
    ) => {
  
      if (users.length > 0) {

        if (users.find(_user => _user.email === body.email)) {
  
          reject(Error('400 `SERVER_ERROR_EMAIL` : L\'adresse email fournie est déjà utilisée (alors qu\'elle devrait être unique).'))
        }

        if (users.find(_user => _user.pseudo === body.pseudo)) {
  
          reject(Error('400 `SERVER_ERROR_PSEUDO` : Le pseudo fourni est déjà utilisé (alors qu\'il devrait être unique).'))
        }
      }
  
      resolve({})
    }
  )
)