const fs = require('fs')
const _pattern = require('../../../../_patterns/_pattern/_pattern.pattern')
const {
  PATTERN_TYPE_GLOBAL,
  PATTERN_TYPE_SERVER,
  PATTERN_TYPE_CLIENT
} = require('../../../../_patterns/_pattern/_enums/patternType/patternType.enum')
const recursiveDirReader = require('../../../../_utils/recursiveDirReader/recursiveDirReader')
const instanceFragment = require('./_fragments/instance/instance.fragment')
const summaryFragment = require('./_fragments/summary/summary.fragment')

module.exports = () =>

  new Promise((
    resolve,
    reject
  ) => {

    const {
      instances: {
        path,
        key
      }
    } = _pattern

    const patterns = recursiveDirReader(
      path,
      key
    )

    if (patterns
        && patterns.length > 0) {

      const mkdirAndDocument = () =>

        fs
          .mkdir(
            __dirname
              + '/_documents',
            err => {

              err && reject(err)

              const {
                instances,
                document,
                ...types
              } = patterns
                .reduce(
                  ({
                    instances,
                    document,
                    ...types
                  },
                  {
                    name,
                    path,
                    content
                  }) => {

                    const fragment = instanceFragment({
                      path,
                      ...content
                    })

                    const type = content.type
                    
                    return {
                      instances: {
                        ...instances,
                        [name]: fragment
                      },
                      document: document
                        + fragment,
                      ...types,
                      [type]: [
                        ...types[type],
                        name
                      ]
                    }
                  },
                  {
                    instances: {},
                    document: '',
                    [PATTERN_TYPE_GLOBAL]: [],
                    [PATTERN_TYPE_SERVER]: [],
                    [PATTERN_TYPE_CLIENT]: []
                  })
              
              Object.entries(instances)
                .forEach(([
                  key,
                  content
                ]) =>
                  
                  fs
                    .writeFile(
                      __dirname
                        + '/_documents/'
                        + key
                        + '.md',
                      content,
                      err =>

                        reject(err)
                    ))
              
              resolve(summaryFragment(types)
                + document)
            })

      fs
        .exists(
          __dirname
            + '/_documents',
          exists =>

            exists
              // Reboot `./documents/`
              ?  fs
                .readdir(
                  __dirname
                    + '/_documents',
                  (
                    err,
                    files
                  ) => {
                  
                    err && reject(err)
                      
                    Promise
                      .all(files
                        .map(file =>
                        
                          new Promise((
                            resolve,
                            reject
                          ) =>
                          
                            fs
                              .unlink(
                                __dirname
                                  + '/_documents/'
                                  + file,
                                err =>
                                
                                  err
                                    ? reject(err)
                                    
                                    : resolve()))))
                      .then(() =>

                        fs
                          .rmdir(
                            __dirname
                              + '/_documents',
                            err =>
                  
                              err
                                ? reject(err)
                                
                                : mkdirAndDocument()
                          
                            ))

                    })
              : mkdirAndDocument())
    }
  })