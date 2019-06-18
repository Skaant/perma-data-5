const fs = require('fs')

module.exports = path =>
  new Promise((resolve, reject) => {
    try {
      const buffer = fs.readFileSync(path + '/index.json')
      const data = JSON.parse(buffer.toString())
      if (typeof data !== 'object' || Array.isArray(data)) {
        reject(Error('format not object'))
      } else {
        const content = data.content
        if (!content) {
          reject(Error('content missing'))
        } else if (!Array.isArray(content)) {
          reject(Error('content not array'))
        }
        resolve(data)
      }
    } catch (err) {
      if (err.code === 'ENOENT') {
        reject(Error('no file'))
      } else if (err instanceof SyntaxError) {
        reject(Error('format not json'))
      }
    }
  })