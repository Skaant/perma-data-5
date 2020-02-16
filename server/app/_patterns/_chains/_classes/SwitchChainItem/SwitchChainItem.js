const ChainItem = require('../ChainItem/ChainItem')
const ChainItemTypeEnum = require('../../_enums/ChainItemType/ChainItemType.enum')

class SwitchChainItem extends ChainItem {

  constructor (filename, action) {

    super(
      filename,
      ChainItemTypeEnum
        .SWITCH,
      action
    )
  }
}

module.exports = SwitchChainItem