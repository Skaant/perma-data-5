const ControlChainItem = require('../../../../../../_patterns/_chains/_classes/ControlChainItem/ControlChainItem')
const {
  VERIFY_MAIL_MISSING_BODY,
  VERIFY_MAIL_MISSING_BODY_TOKEN
} = require('../../../../_enums/_errors/verifyMail.errors.enum')

module.exports = new ControlChainItem(
  ({
    req
  }) =>
  
    new Promise((
      resolve,
      reject
    ) => {
  
      const { body } = req
  
      if (!body) {
  
        reject(Error(`500 ${ VERIFY_MAIL_MISSING_BODY } : the request does not provide body.`))
      }
  
      const { token } = body
  
      if (!token) {
  
        reject(Error(`400 ${ VERIFY_MAIL_MISSING_BODY_TOKEN } : a verification token is expected.`))
      }
  
      resolve({ body })
    }
  )
)