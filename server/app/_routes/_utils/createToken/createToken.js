module.exports = () =>

  Math.random().toString(36).substr(2)
    + '-' + Date.now()
    + '-' + Math.random().toString(36).substr(2)