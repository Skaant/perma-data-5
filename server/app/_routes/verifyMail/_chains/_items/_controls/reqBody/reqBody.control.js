const ControlChainItem = require('../../../../../../_patterns/_chains/_classes/ControlChainItem/ControlChainItem')
const {
  VERIFY_MAIL_MISSING_QUERY,
  VERIFY_MAIL_MISSING_QUERY_TOKEN
} = require('../../../../_enums/_errors/verifyMail.errors.enum')

module.exports = new ControlChainItem(
  ({
    req
  }) =>
  
    new Promise((
      resolve,
      reject
    ) => {
  
      const { query } = req
  
      if (!query) {
  
        reject(Error(`500 ${ VERIFY_MAIL_MISSING_QUERY } : the request does not provide body.`))
      }
  
      const { token } = query
  
      if (!token) {
  
        reject(Error(`400 ${ VERIFY_MAIL_MISSING_QUERY_TOKEN } : a verification token is expected.`))
      }
  
      resolve({ query })
    }
  )
)