module.exports = {
  /** `req.body` is missing */
  VERIFY_MAIL_MISSING_QUERY: 'VERIFY_MAIL_MISSING_QUERY',
  /** `req.body.token` is missing */
  VERIFY_MAIL_MISSING_QUERY_TOKEN: 'VERIFY_MAIL_MISSING_QUERY_TOKEN',
  /** db-returned `user` is `null`  */
  VERIFY_MAIL_USER_NOT_FOUND: 'VERIFY_MAIL_USER_NOT_FOUND',
  /** db-returned `user.verified` is not `false`  */
  VERIFY_MAIL_USER_ALREADY_VERIFIED: 'VERIFY_MAIL_USER_ALREADY_VERIFIED',
  /** `userModifiedCount` equals 0 */
  VERIFY_MAIL_ZERO_USER_UPDATED: 'VERIFY_MAIL_ZERO_USER_UPDATED'
}