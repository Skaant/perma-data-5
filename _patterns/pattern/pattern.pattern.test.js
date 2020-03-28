const chai = require('chai')
const recursiveDirReader = require('../../_utils/recursiveDirReader/recursiveDirReader')

chai.should()

describe(
  '[pattern] pattern',
  () => {

    /**
     * @note A nice improvement would be to separate or
     *  specialize sub-pattern tests, especially paths & names.
     */
    describe(
      'instances :',
      () => {

        const patterns = recursiveDirReader(
          '.',
          /**
           * `^(?!_)\w*\` should be removed when all
           * patterns would have been migrated to
           * `Pattern` classes. */
          /^(?!_).*\.pattern\.js/
        )

        patterns
          .forEach(({
            name: _name,
            path,
            content: pattern
          }) => {

            /**
             * Shorten the name in order to keep only the 
             *  relevant part. */
            const name = _name.split('.pattern.js')[0]

            describe(
              `${ name.toUpperCase() }`,
              () => {

                describe(
                  `* path :`,
                  () =>

                    describe(
                      path,
                      () => {
        
                        /**
                         * There, shorten means : only the first segment.
                         */
                        it(
                          'shorten file name and parent folder should be equal',
                          () =>
        
                            path.split('/')
                              .reverse()[1]
                              .should.equal(name
                                .split('.')[0])
                        )
            
                        /**
                         * n + 1 ensure that sub-patterns also
                         *  match this condition. */
                        it(
                          'n + 1 parent folder name should equal `_patterns`',
                          () =>
        
                            path.split('/')
                              .reverse()
                              // exclude direct parent & file
                              .slice(2)
                              .should.include('_patterns')
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