module.exports = html => {
  // TODO check DOCTYPE
  const firstTag = html.slice(0, 6)
  const lastTag = html.slice(
    html.length - 7,
    html.length
  )
  
  return firstTag === '<html>'
    && lastTag === '</html>'
}
