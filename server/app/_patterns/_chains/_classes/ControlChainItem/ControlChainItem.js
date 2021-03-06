const ChainItem = require('../ChainItem/ChainItem')
const ChainItemTypeEnum = require('../../_enums/ChainItemType/ChainItemType.enum')

class ControlChainItem extends ChainItem {

  constructor (action) {

    super(
      ChainItemTypeEnum.CONTROL,
      action
    )
  }
}

module.exports = ControlChainItem