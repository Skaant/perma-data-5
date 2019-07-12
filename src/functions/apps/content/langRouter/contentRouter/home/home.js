const fs = require('fs')
const pug = require('pug')

module.exports = (req, res) => {
  const { lang } = req
  res.send(
    pug.renderFile('./apps/content/langRouter/contentRouter/home/home.pug', {
      id: 'home',
      lang: lang
    })
  )
}