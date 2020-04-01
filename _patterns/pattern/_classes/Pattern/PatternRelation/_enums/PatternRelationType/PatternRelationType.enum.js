const PatternRelationTypeEnum = {
  /**
   * This pattern is abstracting the target.
   */
  GENERALIZATION: 'GENERALIZATION',
  /**
   * This pattern is extending the target.
   */
  SPECIALIZATION: 'SPECIALIZATION',
  /**
   * This pattern is the composition source [parent].
   * 
   * *Target cannot exist independently of the pattern.*
   */
  COMPOSITION_SOURCE: 'COMPOSITION_SOURCE',
  /**
   * This pattern is :
   *  1. at the top, composition source [parent],
   *  2. at the bottom, abstracting the target [shared].
   * 
   * *Target cannot exist independently of the pattern.*
   */
  COMPOSITION_SPECIALIZATION_SOURCE: 'COMPOSITION_SPECIALIZATION_SOURCE',
  /**
   * This pattern is the composition target [children].
   * 
   * *Pattern cannot exist independently of the pattern.*
   */
  COMPOSITION_TARGET: 'COMPOSITION_TARGET',
  /**
   * This pattern is :
   *  1. at the bottom, composition target [children],
   *  2. at the top, extending the source [shared].
   * 
   * *Pattern cannot exist independently of the pattern.*
   */
  COMPOSITION_SPECIALIZATION_TARGET: 'COMPOSITION_SPECIALIZATION_TARGET',
  /**
   * This pattern is the aggregation source [parent].
   * 
   * *Target can exist independently of the pattern.*
   */
  AGGREGATION_SOURCE: 'AGGREGATION_SOURCE',
  /**
   * This pattern is the aggregation target [children].
   * 
   * *Pattern can exist independently of the pattern.*
   */
  AGGREGATION_TARGET: 'AGGREGATION_TARGET',
}

module.exports = PatternRelationTypeEnum