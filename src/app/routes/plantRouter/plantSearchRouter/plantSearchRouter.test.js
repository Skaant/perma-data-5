const chai = require('chai')
const plantRouter = require('./plantSearchRouter')

const assert = chai.assert
chai.should()

describe('[router] plantSearchRouter', () => {

  it('should exports an express router', () =>
    plantRouter.name
      .should.equal('router'))

  it('should exports a single GET "/:searchValue" route', () =>
    assert
      .isTrue(
        plantRouter.stack && plantRouter.stack[0]
          && plantRouter.stack[0].route.path === '/:searchValue'
          && plantRouter.stack[0].route.methods.get === true))
})