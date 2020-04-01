const Pattern = require('../../../_patterns/pattern/_classes/Pattern/Pattern.class'),
  PatternRelation = Pattern.PatternRelation,
  PatternRelationTypeEnum = PatternRelation.PatternRelationTypeEnum
const stylesPagesPattern = require('./pages/pages.styles.pattern')

/**
 * Ultimately, all the `_styles` folders' content is meant to
 *  be packaged in a single CSS file for each page.
 * 
 * There is three types of files in a `_styles` folder :
 *  * **modules**, used to describe
 *    behaviour of specific kind of components,
 *  * **global**, the aggregation of *modules* shared across
 *    all the site's pages,
 *  * **pages**, the root file which will render the CSS for
 *    each page, aggregating the *global* file and some
 *    other specific *modules*.
 */
const stylesPattern = new Pattern(
  'styles',
  'A folder which contains `.scss` files.',
  new PatternRelation(
    stylesPagesPattern,
    PatternRelationTypeEnum.COMPOSITION_SOURCE,
    'pages'
  )
)

module.exports = stylesPattern