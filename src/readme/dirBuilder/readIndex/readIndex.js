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
        } else if (content.length === 0) {
          reject(Error('content empty array'))
        } else {
          resolve(content)
        }
      }
    } catch (err) {
      if (err.code === 'ENOENT') {
        reject(Error('file not found'))
      } else if (err instanceof SyntaxError) {
        reject(Error('format not json'))
      } else {
        reject(err)
      }
    }
  })