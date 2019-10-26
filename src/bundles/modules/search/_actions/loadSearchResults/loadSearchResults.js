import { 
  SEARCH_FETCH_RESULTS_START,
  SEARCH_FETCH_RESULTS_SUCCESS,
  SEARCH_FETCH_RESULTS_ERROR
} from '../search.actions'

export default () => {

  const store = window.__STORE__

  const state = store.getState()
  const value = state.search.value

  store
    .dispatch({ 
      type: SEARCH_FETCH_RESULTS_START })

  $.getJSON('/plant/search/' + value)

    .then(searchResults => {

      store
        .dispatch({
          type: SEARCH_FETCH_RESULTS_SUCCESS,
          searchResults
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