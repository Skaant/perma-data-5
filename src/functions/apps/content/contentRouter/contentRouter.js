const { Router } = require('express')

module.exports = lang => {
  const router = Router()
  
  router.route('/').get((req, res) => {
    res.send(`<html id="home" lang="${ lang }">ok</html>`)
  })

  return router
}