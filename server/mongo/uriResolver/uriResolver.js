module.exports = (uri, username, password) => {
  const usernameString = '<username>'
  const usernameIndex = uri
    .indexOf(usernameString)
  const passwordString = '<password>'
  const replaceStringLength = (usernameString
      + ':' 
      + passwordString)
    .length

  return uri.slice(0, usernameIndex)
    + username
    + ':'
    + password
    + uri.slice(usernameIndex
      + replaceStringLength)
}