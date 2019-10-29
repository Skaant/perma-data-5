import {
  SEARCH_FETCH_RESULTS_START,
  SEARCH_FETCH_RESULTS_SUCCESS,
  SEARCH_FETCH_RESULTS_ERROR
} from '../../_actions/search.actions'

export default (
  state = false,
  { type }
) => {

  switch (type) {

    case SEARCH_FETCH_RESULTS_START:
      return true

    case SEARCH_FETCH_RESULTS_SUCCESS:
    case SEARCH_FETCH_RESULTS_ERROR:
      return false
  }

  return state
}