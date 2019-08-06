const { Router } = require('express')

const router = Router()

router.get('/:id', require('./plantIdGetRoute/plantIdGetRoute'))

module.exports = router