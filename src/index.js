const app = require('./app/app')

const config = require('../config/config.json')

app.listen(config.port)