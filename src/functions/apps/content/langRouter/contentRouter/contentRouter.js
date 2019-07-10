const { Router } = require('express')

const router = Router()
  
router.route('/').get((req, res) => {
  const { lang } = req
  res.send(`<html id="home" lang="${ lang }">ok</html>`)
})

router.use('/*', (req, res) => {
  const { lang } = req
  res.status(404).send(`<html id="error" lang="${ lang }">ok</html>`)
})

module.exports = router