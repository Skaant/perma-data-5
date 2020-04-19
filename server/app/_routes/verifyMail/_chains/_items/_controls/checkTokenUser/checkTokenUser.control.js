const ControlChainItem = require('../../../../../../_patterns/_chains/_classes/ControlChainItem/ControlChainItem')
const {
  VERIFY_MAIL_USER_NOT_FOUND,
  VERIFY_MAIL_USER_ALREADY_VERIFIED
} = require('../../../../_enums/_errors/verifyMail.errors.enum')

module.exports = new ControlChainItem(
  ({
    user
  }) =>
  
    new Promise((
      resolve,
      reject
    ) => {
  
      if (!user) {
  
        reject(Error(`404 ${ VERIFY_MAIL_USER_NOT_FOUND } : Le jeton n'a retourné aucun utilisateur`))
      }
  
      if (user.verified) {
  
        reject(Error(`400 ${ VERIFY_MAIL_USER_ALREADY_VERIFIED } : L'adresse mail a déjà été vérifiée`))
      }
  
      resolve()
    }
  )
)