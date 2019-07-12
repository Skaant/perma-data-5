const { Router } = require('express')
const home = require('./home/home')
const errorHandler = require('../../errorHandler/errorHandler')

const router = Router()
  
router.route('/').get(home)

router.use('/*', errorHandler({
  status: 404
}))

module.exports = router