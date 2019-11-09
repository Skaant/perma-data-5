import { 
  SEARCH_FETCH_RESULTS_START,
  SEARCH_FETCH_RESULTS_SUCCESS,
  SEARCH_FETCH_RESULTS_ERROR
} from '../../../_actions/search.actions'

export default () => {

  const store = window.__STORE__

  const state = store.getState()
  const value = state.search.value

  store
    .dispatch({ 
      type: SEARCH_FETCH_RESULTS_START })

  $.getJSON(
    '/api/plant-search',
    {
      searchValue: value
    })

    .then(result => {

      store
        .dispatch({
          type: SEARCH_FETCH_RESULTS_SUCCESS,
          result
        })

      $('#search-modal')
        .modal('show')
    })
    .catch(error =>
      
      store
        .dispatch({
          type: SEARCH_FETCH_RESULTS_ERROR,
          error
        }))
}