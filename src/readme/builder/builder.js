const fs = require('fs')

module.exports = path =>
  new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        if (err.code === 'ENOENT') {
          reject(err)
        }
      }
      resolve(true)
    })
  })