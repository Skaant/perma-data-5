const mock = require('mock-fs')

module.exports = {
  'test': {
    'index.json': mock.file({
      content: '["arrays", "are", "json", "too"]'
    })
  }
}