/**
 * @exports errorPage
 */

/**
 * Send html error response, and can set status code
 * 
 * @param { Response } res Express response object
 * @param { any } err The error [object ?] content
 * @param { number } status Status code. Default = 500.
 */
module.exports = (
  res,
  err,
  status = 500
) => {
  console.error(err)
  res
    .status(status)
    .send('<html>'
      + '<h1>Error</h1>'
      + '<p>'
        + err.message
      + '</p>'
      + JSON.stringify(err.stack)
      + '</html>')
}