const admin = require('firebase-admin')
const functions = require('firebase-functions')
const api = require('./apps/api/api')
const content = require('./apps/content/content')

admin.initializeApp()

exports.api = functions.https.onRequest(api)

exports.content = functions.https.onRequest(content)
