const ControlChainItem = require('../../../../../../_patterns/_chains/_classes/ControlChainItem/ControlChainItem')
const {
  VERIFY_MAIL_ZERO_USER_UPDATED
} = require('../../../../_enums/_errors/verifyMail.errors.enum')

module.exports = new ControlChainItem(
  ({
    userModifiedCount
  }) =>
  
    new Promise((
      resolve,
      reject
    ) => {
  
      if (userModifiedCount === 0) {
  
        reject(Error(`500 ${ VERIFY_MAIL_ZERO_USER_UPDATED } : L'utilisateur n'a pas pu être mis à jour`))
      }
  
      resolve()
    }
  )
)