const fs = require('fs')

module.exports = path => 
  new Promise((resolve, reject) => {
    try {
      const buffer = fs.readFileSync(path)
      resolve(buffer.toString())
    } catch (err) {
      if (err.code === 'ENOENT') {
        reject(Error('file not found'))
      } else {
        reject(err)
      }
    }
  })