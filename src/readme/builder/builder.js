const fs = require('fs')

module.exports = path =>
  new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      console.log(files)
      if (err) {
        if (err.code === 'ENOENT') {
          reject(new Error('target folder not found'))
        }
        reject(err)
      }
      if (!files || files.length === 0 || !files.includes('index.json')) {
        reject(new Error('no index.json file'))
      }
      resolve(true)
    })
  })