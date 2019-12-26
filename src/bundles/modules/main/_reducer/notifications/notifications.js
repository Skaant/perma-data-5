import {
  MAIN_NOTIFICATIONS_NEW,
  MAIN_NOTIFICATIONS_SHIFT,
  MAIN_NOTIFICATIONS_REPLACE
} from '../../_actions/main.actions'
import replaceNotification from './replaceNotification/replaceNotification'

/**
 * Store the *notifications-to-be-displayed* queue.
 */
export default (
  state = [],
  { 
    type,
    /**
     * `id` is used to check target notification presence
     *  in `state`, on `MAIN_NOTIFICATIONS_SHIFT` and
     *  `MAIN_NOTIFICATIONS_REPLACE`.
     */
    id,
    /**
     * New notifications to be added in queue,
     *  on `MAIN_NOTIFICATIONS_NEW`.
     */
    notifications,
    /**
     * Replacing notification, on `MAIN_NOTIFICATIONS_REPLACE`.
     */
    notification
  }
) => {

  switch (type) {

    case MAIN_NOTIFICATIONS_NEW:

      return [
        ...state,
        ...notifications
      ]

    case MAIN_NOTIFICATIONS_REPLACE:

      return replaceNotification(
        state,
        id,
        notification
      )

    case MAIN_NOTIFICATIONS_SHIFT:

      if (state[0].id === id) {

        return state
          .slice(1)
      }

      return state      
    
    default:

      return state
  }
}