const fs = require('fs')
const readIndex = require('./readIndex/readIndex')
const browseContent = require('./browseContent/browseContent')

const dirBuilder = path =>
  new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        if (err.code === 'ENOENT') {
          reject(new Error('folder not found'))
        } else {
          reject(err) }
      } else {
        if (!files || files.length === 0) {
          reject(new Error('folder empty'))
        } else {
          readIndex(path)
            .then(content =>
              browseContent(content, path, dirBuilder)
                .then(text => resolve(text)))
        }
      }
    })
  })

module.exports = dirBuilder