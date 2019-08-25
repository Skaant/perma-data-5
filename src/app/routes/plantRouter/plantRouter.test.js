const chai = require('chai')
const plantRouter = require('./plantRouter')

const assert = chai.assert
chai.should()

describe('[router] plantRouter', () => {

  it('should exports an express router', () =>
    plantRouter.name
      .should.equal('router'))

  it(
    'should exports a GET "/:id" and'
      + 'a GET "/search/:searchValue routes',
    () => {
      assert
        .isTrue(
          plantRouter.stack && plantRouter.stack[0]
            && plantRouter.stack[0].route.path === '/search/:searchValue'
            && plantRouter.stack[0].route.methods.get === true)
      assert
        .isTrue(
          plantRouter.stack && plantRouter.stack[1]
            && plantRouter.stack[1].route.path === '/:id'
            && plantRouter.stack[1].route.methods.get === true)
    })
})