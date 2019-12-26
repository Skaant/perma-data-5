/**
 * Hide and unmount the `NotificationModal` component.
 */
export default () => {

  $('#notification-modal')
    .modal('hide')

  window.ReactDOM
    .unmountComponentAtNode(document
      .getElementById('notification-modal_anchor'))
}