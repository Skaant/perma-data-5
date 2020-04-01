const PatternRelationTypeEnum = require('./_enums/PatternRelationType/PatternRelationType.enum')
const Pattern = require('../Pattern.class')

class PatternRelation {

  /**
   * 
   * @param {string} type - The type, as enumerated in
   *  `PatternRelationType.enum`, of relation
   * @param {Pattern} pattern - The relation-targeted pattern
   * @param {?string} alias - The target pattern name
   *  considered in the source scope
   */
  constructor(
    pattern,
    type,
    alias
  ) {

    this._type = type
    this._pattern = pattern
    this._alias = alias
  }
}

module.exports = PatternRelation
module.exports.PatternRelationTypeEnum = PatternRelationTypeEnum