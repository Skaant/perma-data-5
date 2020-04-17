/**
 * Describes a [...] chain item
 * 
 * @property { ChainItemTypeEnum } type Describes item type
 * @property { function } action
 */
class ChainItem {

  constructor (type, action) {
    
    this.type = type
    this.action = action
  }
}

module.exports = ChainItem