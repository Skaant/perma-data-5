const { Router } = require('express')

// lang parameter should be delegated to middleware lang
module.exports = lang => {
  const router = Router()
  
  router.route('/').get((req, res) => {
    res.send(`<html id="home" lang="${ lang }">ok</html>`)
  })
  
  router.use('/*', (req, res) => 
    res.status(404).send(`<html id="error" lang="${ lang }">ok</html>`))

  return router
}