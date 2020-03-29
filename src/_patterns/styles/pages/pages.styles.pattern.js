const Pattern = require('../../../../_patterns/pattern/_classes/Pattern/Pattern.class'),
  PatternRelation = Pattern.PatternRelation,
  PatternRelationTypeEnum = PatternRelation.PatternRelationTypeEnum
const stylesPattern = require('../styles.pattern')
const stylesGlobalPattern = require('../global/global.styles.pattern')
const stylesModulesPattern = require('../modules/modules.styles.pattern')

/**
 */
const stylesPagesPattern = new Pattern(
  'pages.styles',
  'A folder which contains `.scss` files.',
  [
    new PatternRelation(
      stylesPattern,
      PatternRelationTypeEnum.COMPOSITION_TARGET
    ),
    new PatternRelation(
      stylesGlobalPattern,
      PatternRelationTypeEnum.COMPOSITION_SOURCE,
      'global'
    ),
    new PatternRelation(
      stylesModulesPattern,
      PatternRelationTypeEnum.COMPOSITION_SOURCE,
      'modules'
    )
  ]
)

module.exports = stylesPagesPattern