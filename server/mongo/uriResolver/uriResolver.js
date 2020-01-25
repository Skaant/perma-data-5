module.exports = (uri, username, password) =>

  uri
    .replace(
      '<username>',
      username
    )
    .replace(
      '<password>',
      password
    )