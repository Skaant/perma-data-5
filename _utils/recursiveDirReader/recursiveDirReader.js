const fs = require('fs')

const recursiveDirReader = (
  dirPath,
  key
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
        
          if (dirent.isDirectory()
              && dirent.name !== 'node_modules')

            return [
              ...files,
              ...recursiveDirReader(
                path,
                key
              )
            ]

          if (name
              .match(key))

            return [
              ...files,
              {
                name : name
                  .split(key)[0],
                path,
                content: require('../../'
                  + path)
              }
            ]

          return files
        },
        [])
}

module.exports = recursiveDirReader