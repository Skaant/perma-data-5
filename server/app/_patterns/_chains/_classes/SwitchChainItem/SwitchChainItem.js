const ChainItem = require('../ChainItem/ChainItem')
const ChainItemTypeEnum = require('../../_enums/ChainItemType/ChainItemType.enum')

class SwitchChainItem extends ChainItem {

  constructor (action) {

    super(
      ChainItemTypeEnum.SWITCH,
      action
    )
  }
}

module.exports = SwitchChainItem