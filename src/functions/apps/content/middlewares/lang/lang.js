const pug = require('pug')
const langs = require('../../../../../../config.json').langs

module.exports = (req, res, next) => {
  const lang = req.path.split('/')[1]
  if (!langs.includes(lang)) {
    res.status(400).send(
      pug.renderFile('./apps/content/errorHandler/error/error.pug', {
        id: 'error',
        lang: 'en'
      })
    )
  } else {
    req.lang = lang
    next()
  }
}