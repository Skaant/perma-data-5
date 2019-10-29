import { SEARCH_VALUE_CHANGE } from '../search.actions'

export default value =>

  window.__STORE__
    .dispatch({
      type: SEARCH_VALUE_CHANGE,
      value
    })