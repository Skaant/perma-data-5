const chai = require('chai')
const infoRouter = require('./infoRouter')

const assert = chai.assert
chai.should()

describe('[router] infoRouter', () => {

  it('should exports an express router', () =>
    infoRouter.name.should.equal('router'))

  it('should exports a single GET "/" route', () =>
    assert
      .isTrue(
        infoRouter.stack && infoRouter.stack[0]
          && infoRouter.stack[0].route.path === '/'
          && infoRouter.stack[0].route.methods.get === true))
})