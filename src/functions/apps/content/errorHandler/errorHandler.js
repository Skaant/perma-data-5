const fs = require('fs')
const pug = require('pug')

module.exports = error =>
  (req, res) => {
    const { lang } = req
    res.status(error.status)
      .send(
        pug.renderFile('./apps/content/errorHandler/error/error.pug', {
          id: 'error',
          lang: lang
        })
      )
  }