const fs = require('fs')

module.exports = path =>
  new Promise((resolve, reject) => {
    try {
      const buffer = fs.readFileSync(path + '/index.json')
      const data = JSON.parse(buffer.toString())
      if (typeof data !== 'object' || Array.isArray(data)) {
        reject(Error('index not an object'))
      } else {
        resolve(data)
      }
    } catch (err) {
      if (err.code === 'ENOENT') {
        reject(Error('index file not found'))
      } else if (err instanceof SyntaxError) {
        reject(Error('cannot parse index to json'))
      }
    }
  })