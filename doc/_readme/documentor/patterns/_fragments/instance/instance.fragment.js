const recursiveDirReader = require('../../../../../../_utils/recursiveDirReader/recursiveDirReader')

const descriptionRenderer = (
  description,
  type
) =>

  !description[type]
    ? ''

    : !Array
      .isArray(description[type])
      ? '**'
        + type
        + ':** '
        + description[type]

      : description[type]
        .map((
          section,
          index
        ) =>
         
          '**'
            + type
            + ' '
            + index
            + ':** '
            + section)
        .join('\n\n')

module.exports = ({
  type,
  id,
  name,
  description,
  instances
}) =>

  `
#### ${ id }

*${ name }*

**Type :** \`${ type }\`

${
  Array
    .isArray(description.summary)
      ? description.summary
        .join('\n\n')
      
      : description.summary
}

${
  descriptionRenderer(
    description,
    'occurence'
  )
}

${
  descriptionRenderer(
    description,
    'problem'
  )
}

${
  descriptionRenderer(
    description,
    'solution'
  )
}

${
  descriptionRenderer(
    description,
    'implementation'
  )
}

**Instances :** \`${ instances.path } (...) ${ instances.key }\`

${
  recursiveDirReader(
    instances.path,
    instances.key
  )
    .reverse()
    .map(instance =>
      
      `* ${ instance.path }`)
    .join('\n')
}
`