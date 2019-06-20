const fs = require('fs')
const dirBuilder = require('./dirBuilder/dirBuilder')

dirBuilder('./src/readme/root')
  .then(text =>
    fs.writeFile('./README.md', text, err => {
      if (err) throw err
    }))