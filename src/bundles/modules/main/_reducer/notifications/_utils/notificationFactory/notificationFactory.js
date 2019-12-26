/**
 * Add an unique `id` on given notification.
 * 
 * @param { Object } notification - The notification to
 *  be augmented.
 */
export default notification => {

  const random = Math.round(Math.random() * 1000000)
    + '_'
    + Date.now()

  return Object.assign(
    {},
    notification,
    {
      id: notification.title
        + '_'
        + random
    }
  )
}