/**
 * Removes the `LoginModal` React elements & their state using
 *  `ReactDOM.unmountComponentAtNode` at `#login-modal__anchor`.
 */
export default () => {

  $('#login-modal')
    .modal('hide')

  window.ReactDOM
    .unmountComponentAtNode(document
      .getElementById('login-modal_anchor'))
}