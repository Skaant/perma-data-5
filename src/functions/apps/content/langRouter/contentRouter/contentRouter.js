const { Router } = require('express')

module.exports = () => {
  const router = Router()
  
  router.route('/').get((req, res) => {
    res.send('<html id="home" lang="fr">ok</html>')
  })

  return router
}