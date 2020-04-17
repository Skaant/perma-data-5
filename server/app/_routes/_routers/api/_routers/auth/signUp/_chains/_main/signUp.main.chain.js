const reqBodyControl = require('../_items/_controls/reqBody/reqBody.control')
const getEmailPseudoUsersDbcall = require('../_items/_dbcalls/getEmailPseudoUsers/getEmailPseudoUsers.dbcall')
const userUniqueEmailPseudoControl = require('../_items/_controls/userUniqueEmailPseudo/userUniqueEmailPseudo.control')
const createUserControl = require('../_items/_controls/createUser/createUser.control')
const saveUserDbcall = require('../_items/_dbcalls/saveUser/saveUser.dbcall')
const sendMailConfirmationMail = require('../_items/_mails/sendMailConfirmation/sendMailConfirmation.mail')

module.exports = [
  reqBodyControl,
  getEmailPseudoUsersDbcall,
  userUniqueEmailPseudoControl,
  createUserControl,
  saveUserDbcall,
  sendMailConfirmationMail
]