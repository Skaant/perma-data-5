const ChainItem = require('../ChainItem/ChainItem')
const ChainItemTypeEnum = require('../../_enums/ChainItemType/ChainItemType.enum')

class EmailChainItem extends ChainItem {

  constructor (action) {

    super(
      ChainItemTypeEnum.EMAIL,
      action
    )
  }
}

module.exports = EmailChainItem