const atob = require('atob')

module.exports =
  password => {
    return atob(password)
}