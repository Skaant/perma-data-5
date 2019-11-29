import {
  SEARCH_FETCH_RESULTS_SUCCESS
} from '../../_actions/search.actions'

export default (
  state = null,
  {
    type,
    result
  }
) => {

  switch(type) {

    case SEARCH_FETCH_RESULTS_SUCCESS:
      return result.plants

    default:
      return state
  }
}