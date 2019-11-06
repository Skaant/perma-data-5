import {
  SEARCH_FETCH_RESULTS_SUCCESS
} from '../../_actions/search.actions'

export default (
  state = null,
  {
    type,
    result
  }
) => 

  type === SEARCH_FETCH_RESULTS_SUCCESS ?
    result.plants
    : state