/**
 * Hide and unmount the `UserModal` component.
 */
export default () => {

  $('#user-modal')
    .modal('hide')

  window.ReactDOM
    .unmountComponentAtNode(document
      .getElementById('user-modal_anchor'))
}