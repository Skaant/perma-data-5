const ChainItem = require('../ChainItem/ChainItem')
const ChainItemTypeEnum = require('../../_enums/ChainItemType/ChainItemType.enum')

class DbcallChainItem extends ChainItem {

  constructor (filename, action) {

    super(
      filename,
      ChainItemTypeEnum
        .DBCALL,
      action
    )
  }
}

module.exports = DbcallChainItem