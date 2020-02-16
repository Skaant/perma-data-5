/**
 * Describes a [...] chain item
 * 
 * @property { string } id Used for better DEV tracking
 * @property { ChainItemTypeEnum } type Describes item type
 * @property { function } action
 */
class ChainItem {

  constructor (filename, type, action) {

    // TODO `id` should result in the transm of the caller's filename
    this.id = filename
    this.type = type
    this.action = action
  }
}

module.exports = ChainItem