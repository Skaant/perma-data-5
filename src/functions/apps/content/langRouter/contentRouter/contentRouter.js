const { Router } = require('express')
const home = require('./home/home')

// lang parameter should be delegated to middleware lang
module.exports = lang => {
  const router = Router()
  
  router.route('/').get(home)

  router.use('/*', (req, res) => 
    res.status(404).send(`<html id="error" lang="${ lang }">ok</html>`))

  return router
}