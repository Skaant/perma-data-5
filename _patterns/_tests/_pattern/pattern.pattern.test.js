const chai = require('chai')
const recursiveDirReader = require('../../../_tests/_utils/recursiveDirReader/recursiveDirReader')

chai.should()

describe(
  '[_patterns/.pattern] instance format',
  () => {

    const patterns = recursiveDirReader(
      './_patterns',
      'pattern'
    )

    patterns
      .forEach(({
        name,
        path,
        data
      }) =>

        describe(
          path,
          () => {

            it(
              'should export an object',
              () =>
                
                (typeof data)
                  .should.equal('object')
            )

            describe(
              '`'
                + name
                + '` data',
              () => {

                it(
                  'the object should have an `type` property, equal to "server"',
                  () =>
                    
                    data.type
                      .should.equal('server')
                )

                it(
                  'the object should have an `id` property, equal to its file name',
                  () =>
                    
                    data.id
                      .should.equal(name)
                )
              }
            )
          }))
  })