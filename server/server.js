const app = require('./app/app')
const config = require('./server.config.json')

// Start the **server** application with
//  given port.
app.listen(config.port)