import { SEARCH_VALUE_CHANGE } from '../../_actions/search.actions'

export default (
  state = 
    $('#search-input')
      .val(),
  {
    type,
    value
  }
) =>

  type === SEARCH_VALUE_CHANGE ?
    value
    : state