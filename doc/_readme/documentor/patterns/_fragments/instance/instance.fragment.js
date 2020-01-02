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
  description
    .map(line => 
      
      line)
    .join('\n\n')
}

**Instances :** \`${ instances.path } (...) ${ instances.key }\`

`