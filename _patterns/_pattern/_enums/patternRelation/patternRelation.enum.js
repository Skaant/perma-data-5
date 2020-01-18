module.exports = {
  /**
   * This pattern is abstracting the target.
   */
  PATTERN_RELATION_GENERALIZATION: 'PATTERN_RELATION_GENERALIZATION',
  /**
   * This pattern is extending the target.
   */
  PATTERN_RELATION_SPECIALIZATION: 'PATTERN_RELATION_SPECIALIZATION',
  /**
   * This pattern is the aggregation source [parent].
   * 
   * *Target can exist independently of the pattern.*
   */
  PATTERN_RELATION_AGGREGATION_SOURCE: 'PATTERN_RELATION_AGGREGATION_SOURCE',
  /**
   * This pattern is the composition source [parent].
   * 
   * *Target cannot exist independently of the pattern.*
   */
  PATTERN_RELATION_COMPOSITION_SOURCE: 'PATTERN_RELATION_COMPOSITION_SOURCE',
  /**
   * This pattern is the aggregation target [children].
   * 
   * *Pattern can exist independently of the pattern.*
   */
  PATTERN_RELATION_AGGREGATION_TARGET: 'PATTERN_RELATION_AGGREGATION_TARGET',
  /**
   * This pattern is the composition target [children].
   * 
   * *Pattern cannot exist independently of the pattern.*
   */
  PATTERN_RELATION_COMPOSITION_TARGET: 'PATTERN_RELATION_COMPOSITION_TARGET',
}