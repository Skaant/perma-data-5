const chai = require('chai')
const recursiveDirReader = require('../../_utils/recursiveDirReader/recursiveDirReader')

chai.should()

describe(
  '[pattern] pattern',
  () => {

    describe(
      'instances :',
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
            path,
            content: pattern
          }) => {

            describe(
              `${ name.toUpperCase() }`,
              () => {

                describe(
                  `* path :`,
                  () =>

                    describe(
                      path,
                      () => {
        
                        it(
                          'file name and parent folder should be equal',
                          () =>
        
                            path.split('/')
                              .reverse()[1]
                              .should.equal(name)
                        )
            
                        it(
                          'parent + 1 folder name should equal `_patterns`',
                          () =>
        
                            path.split('/')
                              .reverse()[2]
                              .should.equal('_patterns')
                        )

                      }))
              
                describe(
                  '* content :',
                  () => {

                    it(
                      'file name and pattern id should be equal',
                      () =>
                        
                        name
                          .should.equal(pattern.getId()))
                  })
              })
          })
      })
  })