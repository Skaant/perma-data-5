import renderNotificationModal from "./renderNotificationModal/renderNotificationModal"
import unmountNotificationModal from "./unmountNotificationModal/unmountNotificationModal"

// Compare logic
let previous = null

export default () => {

  const next = window.__STORE__
    .getState()
    .main

  if ((!previous
      && next.error)
    || (previous
      && previous.error.message !== next.error.message)) {
    
    previous = next

    alert(next.error.message)
  }

  if ((!previous
      && next.notifications.length > 0)
    || (previous
      && next.notifications[0]
      && (previous.notifications.length !== next.notifications.length
        || previous.notifications[0] !== next.notifications[0]))) {
    
    previous = next

    renderNotificationModal()

  } else if (previous
    && previous.notifications.length === 1
    && next.notifications.length === 0) {
      
    previous = next

    unmountNotificationModal()

  } else {

    // Update the compare logic
    previous = next
  }
}