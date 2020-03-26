const chai = require('chai')
const recursiveDirReader = require('../../_utils/recursiveDirReader/recursiveDirReader')

chai.should()

describe(
  '[pattern] pattern',
  () => {

    describe(
      'instances',
      () => {

        const patterns = recursiveDirReader(
          '.',
          // `^(?!_)\w*\` should be removed when all
          //  patterns would have been migrated to
          //  `Pattern` classes.
          /^(?!_)\w*\.pattern\.js/
        )

        patterns
          .forEach(({
            name,
            path
          }) => {

            describe(
              `* ${ name }`,
              () => {

                describe(
                  `path : ${ path }`,
                  () => {
        
                    it(
                      'should be contained in a parent + 1 `_patterns` folder',
                      () =>
    
                        path.split('/')
                          .reverse()[2]
                          .should.equal('_patterns')
                    )
        
                    it(
                      'should be contained in a parent folder with the same name',
                      () =>
    
                        path.split('/')
                          .reverse()[1]
                          .should.equal(name)
                    )
                  }
                )
              })
          })
      })
  })