import {
  SEARCH_FETCH_RESULTS_SUCCESS, SEARCH_FETCH_RESULTS_START
} from '../../_actions/search.actions'

export default (
  state = null,
  {
    type,
    result
  }
) => {

  switch(type) {

    case SEARCH_FETCH_RESULTS_START:
      return null

    case SEARCH_FETCH_RESULTS_SUCCESS:
      return result.plants

    default:
      return state
  }
}