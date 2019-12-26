/**
 * Hide and unmount the `SearchModal` component.
 */
export default () => {

  $('#search-modal')
    .modal('hide')

  window.ReactDOM
    .unmountComponentAtNode(document
      .getElementById('search-modal_anchor'))
}