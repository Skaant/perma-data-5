const fs = require('fs')

const recursiveDirReader = (
  dirPath,
  fileSearchKey
) => {
    
  const dirents = fs
    .readdirSync(
      dirPath,
      {
        withFileTypes: true
      }
    )

    return dirents
      .reduce(
        (
          files,
          dirent
        ) => {

          const name = dirent.name

          const path = dirPath
            + '/'
            + name
        
          if (dirent.isDirectory())

            return [
              ...files,
              ...recursiveDirReader(
                path,
                fileSearchKey
              )
            ]

          if (name
              .includes('.'
                + fileSearchKey
                + '.js'))

            return [
              ...files,
              {
                name : name
                  .split('.'
                    + fileSearchKey)[0],
                path,
                data: require('../../../' + path)
              }
            ]

          return files
        },
        [])
}

module.exports = recursiveDirReader