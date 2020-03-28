const Pattern = require('../../../../../_patterns/pattern/_classes/Pattern/Pattern.class'),
  PatternRelation = Pattern.PatternRelation,
  PatternRelationTypeEnum = PatternRelation.PatternRelationTypeEnum
const stylesGlobalPattern = require('../global/global.styles.pattern')
const stylesPagesPattern = require('../pages/pages.styles.pattern')

/**
 * A `styles.module` is either :
 *  * A component of the `styles.global` file,
 *  * A component of one (or more) of
 *    the `styles.page` file(s).
 * 
 * This relation is enforced by a folder hierarchy :
 *  The `_modules` folder must be a direct descendant of
 *  either the `_global` or a `_pages/<page id>` folder.
 */
const stylesModulesPattern = new Pattern(
  'modules.styles',
  'A folder which contains `.scss` files.',
  [
    new PatternRelation(
      PatternRelationTypeEnum.COMPOSITION_TARGET,
      stylesGlobalPattern
    ),
    new PatternRelation(
      PatternRelationTypeEnum.COMPOSITION_TARGET,
      stylesPagesPattern
    )
  ]
)

module.exports = stylesModulesPattern