const fileReader = require('./fileReader/fileReader')

module.exports = (content, path, dirBuilder) =>
  new Promise((resolve, reject) => {
    const itemPromises = content.map(item => {
      if (typeof item !== 'string') {
        throw Error('item not string : ' + path + ' = ' + typeof item)
      } else {
        if (item.includes('.md')) {
          return fileReader(path + '/' + item)
        } else {
          return dirBuilder(path + '/' + item)
        }
      }
    })
    Promise.all(itemPromises)
      .then(texts =>
        resolve(texts.join('\n\n')))
      .catch(err =>
        reject(err))
  })