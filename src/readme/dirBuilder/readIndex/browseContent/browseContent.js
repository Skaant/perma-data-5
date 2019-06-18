const dirBuilder = require('../../dirBuilder')

module.exports = (content, path) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(content)) {
      reject(Error('content not array'))

    } else if (content.length === 0) {
      reject(Error('content empty array'))

    } else {
      const itemPromises = content.map(item => {
        if (typeof item !== 'string') {
          reject(Error('item not string'))
        } else {
          if (item.includes('.md')) {
            // return fileReader(path + '/' + item)
          } else {
            return dirBuilder(path + '/' + item)
          }
        }
      })
      Promise.all(itemPromises)
        .then(() => resolve())
    }
  })
}