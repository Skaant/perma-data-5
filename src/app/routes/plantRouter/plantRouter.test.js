const chai = require('chai')
const plantRouter = require('./plantRouter')

const assert = chai.assert
chai.should()

describe('[router] plantRouter', () => {

  it('should exports an express router', () =>
    plantRouter.name
      .should.equal('router'))

  it('should exports a single GET "/:id" route', () =>
    assert
      .isTrue(
        plantRouter.stack && plantRouter.stack[0]
          && plantRouter.stack[0].route.path === '/:id'
          && plantRouter.stack[0].route.methods.get === true))
})