const functions = require('firebase-functions')

exports.content = functions.https.onRequest((request, response) => {
  response.send('Hello PERMA-DATA')
})

exports.api = functions.https.onRequest((request, response) => {
  response.send({ valid: true })
})
