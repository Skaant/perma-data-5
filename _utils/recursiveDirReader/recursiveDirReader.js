const fs = require('fs')

/**
 * Explores the whole hierarchy of directories,
 *  starting in the `rootPath` location,
 *  and returns an array containing descriptive
 *  objects of files & directories matching
 *  the `matchingRegExp` regular expression.
 * 
 * @note The descriptive object contains the
 *  following properties :
 *  * `name`, the file name split from the first `'.'` occurence,
 *  * `path`, the full path (from the rootPath location),
 *  *  and, **for JS files only**, `content` (an object, a class or
 *  a class instance).
 * 
 * @param {string} rootPath - The search root location
 * @param {RegExp} matchingRegExp - The key to be matched
 *  in element name.
 * 
 * @return {Array<{name:string, path:string, content?: any}>} An
 *  array of descriptive items
 */
const recursiveDirReader = (
  rootPath,
  matchingRegExp
) => {
    
  const dirents = fs
    .readdirSync(
      rootPath,
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

          const path = rootPath
            + '/'
            + name

          if (name.match(matchingRegExp)) {

            return [
              ...files,
              {
                name : name.split('.')[0],
                path,
                content: !dirent.isDirectory()
                  && name.match(/\.js/)
                  && require('../../' + path)
              }
            ]
          }
        
          if (dirent.isDirectory()
              && dirent.name !== 'node_modules')

            return [
              ...files,
              ...recursiveDirReader(
                path,
                matchingRegExp
              )
            ]

          return files
        },
        [])
}

module.exports = recursiveDirReader