const reqBodyControl = require('../_items/_controls/reqBody/reqBody.control')
const getEmailUsersDbcall = require('../_items/_dbcalls/getEmailUsers/getEmailUsers.dbcall')
const userEmailUniqueControl = require('../_items/_controls/userEmailUnique/userEmailUnique.control')
const createUserControl = require('../_items/_controls/createUser/createUser.control')
const saveUserDbcall = require('../_items/_dbcalls/saveUser/saveUser.dbcall')
const sendMailConfirmationMail = require('../_items/_mails/sendMailConfirmation/sendMailConfirmation.mail')

module.exports = [
  reqBodyControl,
  getEmailUsersDbcall,
  userEmailUniqueControl,
  createUserControl,
  saveUserDbcall,
  sendMailConfirmationMail
]