import renderComponent from "../_actions/renderComponent/renderComponent";
import setBackdropClickClose from "../../_utils/setBackdropClickClose/setBackdropClickClose";
import { 
  SEARCH_MODAL_CLOSE
} from "../_actions/search.actions";

export default () => {

    // Compare logic
    let previous = null

    const store = window.__STORE__

    store
      .subscribe(() => {

        const next = store
          .getState()
          .search

        renderComponent()

        if (previous
            && previous.modalDisplay !== next.modalDisplay) {
          
          if (next.modalDisplay === true) {

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
        }
        
        previous = next
      })
  }