/**
 * @exports error
 */

/**
 * Send json error response, and can set status code
 * 
 * @param { Response } res Express response object
 * @param { any } err The error [object ?] content
 * @param { number } status Status code. Default = 500.
 */
module.exports = (
  res,
  error,
  status = 500
) => {
  
  console.error('### Catched API error')
  console.error(error)
  res
    .status(
      error.status
        || status
    )
    .json({ error })
}