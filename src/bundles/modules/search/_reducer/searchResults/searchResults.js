import { SEARCH_FETCH_RESULTS_SUCCESS } from '../../_actions/search.actions'

export default (
  state = null,
  {
    type,
    searchResults
  }
) => 

  type === SEARCH_FETCH_RESULTS_SUCCESS ?
    searchResults
    : state