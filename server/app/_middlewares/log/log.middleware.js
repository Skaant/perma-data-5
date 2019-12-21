module.exports = () =>
  
  (req, res, next) => {

    console.log('RECEIVED GET '
      + req.originalUrl)

    next()
  }