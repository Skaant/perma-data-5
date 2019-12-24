import React from 'react'
import NotificationModal from '../../_components/NotificationModal/NotificationModal'
import { MAIN_NOTIFICATIONS_SHIFT } from '../../_actions/main.actions'
import setBackdropClickClose from '../../../_utils/setBackdropClickClose/setBackdropClickClose'

export default () => {

  const store = window.__STORE__
  const { 
    main
  } = store
    .getState()

  const notifications = main.notifications
  const notification = notifications[0]

  const handleClose = id => {

    const runtimeNotifications = store
      .getState()
      .main
      .notifications

    if (runtimeNotifications.length > 0
      && runtimeNotifications[0].id === id) {
    
      store
        .dispatch({
          type: MAIN_NOTIFICATIONS_SHIFT,
          id
        })
    }

    if (notification.callback) {
      
      if (notifications.length === 1) {

        notification.callback()

      } else {

        console.warn(
          'Notification behavior inhibited',
          notification
        )
      }
    }
  }
  
  window.ReactDOM
    .render(
      <NotificationModal
        notification={ notification }
        closeModal={ 
          () =>

            handleClose(notification.id) } />,
      $('#notification-modal_anchor')[0])

  $('#notification-modal')
    .modal('show')

  setBackdropClickClose(
    '#notification-modal',
    MAIN_NOTIFICATIONS_SHIFT,
    {
      id: notification.id
    }
  )

  if (notification.timeout) {

    setTimeout(
      // A control in `handleClose` avoid a double call.
      () =>
      
        handleClose(notification.id),
      notification.timeout
    )
  }
}