const app = require('./app/app')
const { port } = require('./server.config')
const mongo = require('./mongo/mongo')

// Start the **server** application with
//  given port.
const server = app.listen(port)

process.on(
  'SIGINT',
  () => {

    mongo(true)
    
    server.close()
  });