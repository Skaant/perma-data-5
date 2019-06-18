const fs = require('fs')
const readIndex = require('./readIndex/readIndex')

module.exports = path =>
  new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        if (err.code === 'ENOENT') {
          reject(new Error('target folder not found'))
        } else {
          reject(err) }
      } else {
        if (!files || files.length === 0) {
          reject(new Error('empty folder'))
        } else {
          readIndex(path)
            .then(index =>
              resolve(true))
            .catch(err => reject(err))
        }
      }
    })
  })