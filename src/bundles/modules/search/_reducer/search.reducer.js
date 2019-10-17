export default 
  (state = {
    value:
      $('#search-input')
        .val()
  },
  action) => {

    switch (action.type) {

      case 'SEARCH_VALUE_CHANGE': {
        return Object.assign(
          {},
          state,
          {
            value: action.value
          })
      }

      default: {
        
        return state
      }
    }
  }