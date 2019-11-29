import {
  SEARCH_MODAL_OPEN,
  SEARCH_MODAL_CLOSE,
  SEARCH_FETCH_RESULTS_START
} from '../../_actions/search.actions'


export default (
  state = false,
  { type }
) => {

  switch (type) {

    case SEARCH_MODAL_OPEN:
    case SEARCH_FETCH_RESULTS_START:
      return true

    case SEARCH_MODAL_CLOSE:
      return false
    
      default:
        return state
  }
}