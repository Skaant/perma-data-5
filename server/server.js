const app = require('./app/app')
const { port } = require('./server.config')

// Start the **server** application with
//  given port.
app.listen(port)