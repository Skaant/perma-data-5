import renderComponent from "./renderComponent/renderComponent";
import setBackdropClickClose from "../../_utils/setBackdropClickClose/setBackdropClickClose";
import { 
  SEARCH_MODAL_CLOSE
} from "../_actions/search.actions"

// Compare logic
let previous = null

export default () => {

  const next = window.__STORE__
    .getState()
    .search

  if (previous
      && previous.modalDisplay !== next.modalDisplay) {
    
    if (next.modalDisplay === true) {

      renderComponent()

      $('#search-modal')
        .modal('show')

      setBackdropClickClose(
        '#search-modal',
        SEARCH_MODAL_CLOSE
      )

    } else {

      $('#search-modal')
        .modal('hide')
    }

  } else if (!previous
    || previous.value !== next.value
    || previous.loadStatus !== next.loadStatus
    || previous.searchResults !== next.searchResults) {
    
    renderComponent()
  }
  
  previous = next
}