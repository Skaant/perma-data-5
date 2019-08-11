/**
 * @exports jsonRejection
 */

/**
 * Send json error response, and can set status code
 * 
 * @param { Response } res Express response object
 * @param { any } err The error [object ?] content
 * @param { number } status Status code. Default = 500.
 */
const jsonRejection = (res, err, status = 500) => {
  console.error(err)
  res
    .status(status)
    .json(err)
}

module.exports = jsonRejection