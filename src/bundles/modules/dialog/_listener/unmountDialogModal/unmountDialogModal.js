/**
 * Removes auth-related React elements & their state using
 *  `ReactDOM.unmountComponentAtNode` :
 *  * `CityDialogModal`, at `#city-dialog-modal__anchor`,
 *  * `City`, at `#home-auth`.
 */
export default () =>

  window.ReactDOM
    .unmountComponentAtNode(document
      .getElementById('dialog__anchor'))