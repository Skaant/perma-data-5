const {
  PATTERN_TYPE_GLOBAL,
  PATTERN_TYPE_SERVER,
  PATTERN_TYPE_CLIENT
} = require('../../../../../../_patterns/_pattern/_enums/patternType/patternType.enum')

module.exports = types => {

  const instanceToLineLink = name =>

    `   * [${ name }](#${ name })`
  
  return `
* **global**
${
  types[PATTERN_TYPE_GLOBAL]
    .map(instanceToLineLink)
    .join('\n')
}

* **server**
${
  types[PATTERN_TYPE_SERVER]
    .map(instanceToLineLink)
    .join('\n')
}

* **client**
${
  types[PATTERN_TYPE_CLIENT]
    .map(instanceToLineLink)
    .join('\n')
}`
}