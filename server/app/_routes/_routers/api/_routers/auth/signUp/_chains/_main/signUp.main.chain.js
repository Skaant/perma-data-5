const reqBodyControl = require('../_items/_controls/reqBody/reqBody.control')
const createUserControl = require('../_items/_controls/createUser/createUser.control')
const saveUserDbcall = require('../_items/_dbcalls/saveUser/saveUser.dbcall')
const sendMailConfirmationMail = require('../_items/_mails/sendMailConfirmation/sendMailConfirmation.mail')

module.exports = [
  reqBodyControl,
  createUserControl,
  saveUserDbcall,
  sendMailConfirmationMail
]