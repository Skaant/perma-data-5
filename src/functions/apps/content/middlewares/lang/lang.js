const langs = require('../../../../../../config.json').langs

module.exports = (req, res, next) => {
  const lang = req.path.split('/')[1]
  if (!langs.includes(lang)) {
    res.status(400).send('<html id="error" lang="en">kok</html>')
  } else {
    req.lang = lang
    next()
  }
}