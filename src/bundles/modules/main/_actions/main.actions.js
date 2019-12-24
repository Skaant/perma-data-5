export const MAIN_ERROR_THROWN = 'MAIN_ERROR_THROWN'
export const MAIN_ERROR_DISMISS = 'MAIN_ERROR_DISMISS'

/**
 * One or more notifications must be added to the
 * notifications queue list.
 * 
 * @param { Array } notifications - An array of new
 *  notifications to queue.
 * 
 * @dispatched when new notifications arising.
 * 
 * @triggers the `NotificationModal`to be rendered and shown. 
 * */
export const MAIN_NOTIFICATIONS_NEW = 'MAIN_NOTIFICATIONS_NEW'

/**
 * The first notification (currently supposed to be
 *  displayed) must be removed from the queue.
 * 
 * @dispatched when the current notification is
 *  dismissed (manually or on timer).
 * 
 * @triggers the `NotificationModal` to be :
 *  * updated and shown,
 *  * unmounted and hidden.
 */
export const MAIN_NOTIFICATIONS_SHIFT = 'MAIN_NOTIFICATIONS_SHIFT'