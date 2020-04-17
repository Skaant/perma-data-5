const nodemailer = require('nodemailer')
const mailerConfig = require('./mailer.config')
const mailerSecretConfig = require('./mailerSecret.config')


module.exports = () =>

  nodemailer.createTransport({
    ...mailerConfig,
    secure: true,
    auth: mailerSecretConfig
  })