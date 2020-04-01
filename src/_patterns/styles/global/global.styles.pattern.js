const Pattern = require('../../../../_patterns/pattern/_classes/Pattern/Pattern.class'),
  PatternRelation = Pattern.PatternRelation,
  PatternRelationTypeEnum = PatternRelation.PatternRelationTypeEnum
const stylesPagesPattern = require('../pages/pages.styles.pattern')
const stylesModulesPattern = require('../modules/modules.styles.pattern')

/**
 */
const stylesGlobalPattern = new Pattern(
  'global.styles',
  'A folder which contains `.scss` files.',
  [
    new PatternRelation(
      stylesPagesPattern,
      PatternRelationTypeEnum.COMPOSITION_TARGET
    ),
    new PatternRelation(
      stylesModulesPattern,
      PatternRelationTypeEnum.COMPOSITION_SOURCE,
      'modules'
    )
  ]
)

module.exports = stylesGlobalPattern