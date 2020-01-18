const chai = require('chai')
const _pattern = require('./_chain.pattern')
const recursiveDirReader = require('../../../../_utils/recursiveDirReader/recursiveDirReader')

chai.should()

describe.only(
  '_chain',
  () => {

    describe(
      'instances',
      () => {

        const {
          instances: {
            path,
            key
          }
        } = _pattern

        const chains = recursiveDirReader(
          path,
          key
        )

        console.log(path, key, chains)

        chains
          .forEach(({
            name,
            path,
            content
          }) =>

            describe(
              '* ' 
                + name,
              () => {

                describe(
                  'path',
                  () => {

                    const expectedPath = new RegExp('_chains/'
                      + name
                      + '/'
                      + name
                      + '.chain.js')

                    it(
                      'should be formed with `'
                        + expectedPath
                        + '`',
                      () =>
                      
                        path
                          .should.match(expectedPath))
                  })

                /* describe(
                  'content',
                  () => {

                    it(
                      'should expose a [pattern] object, ...',
                      () =>
                        
                        (typeof content)
                          .should.equal('object')
                    )

                    describe(
                      '- pattern',
                      () => {

                        const {
                          type,
                          id,
                          instances
                        } = content

                        it(
                          'should have a `type` property, equal to `'
                            + type
                            + '`',
                          () =>
                            
                            Object.values(patternTypeEnum)
                              .should.include(type)
                        )

                        it(
                          'should have an `id` property, equal to its isolated file name : `'
                            + name
                            + '`',
                          () =>
                            
                            id
                              .should.equal(name)
                        )
    
                        it(
                          'should have an `instances` property, exposing a [pattern instances] object, ...',
                          () => {
                            
                            instances
                              .should.be.an('object')
                          }
                        )

                        describe(
                          '- pattern instances',
                          () => {

                            const {
                              path,
                              key
                            } = instances

                            it(
                              'should have a `path: string` property',
                              () =>
      
                                path
                                  .should.be.a('string')
                            )

                            it(
                              'should have a `key: RegExp` property',
                              () =>
      
                                key
                                  .should.be.a('RegExp')
                            )
                          }
                        )
                      })
                  }
                ) */
              }))
      })
  })