import { CITY_DIALOG_MODAL_OPEN, CITY_DIALOG_MODAL_PAGE_CHANGE } from "../../_actions/city.actions";

export default (
  state = {},
  { 
    type,
    dialog,
    page
  }
) => {

  switch (type) {

    case CITY_DIALOG_MODAL_OPEN:

      if (!state[dialog.id]) {

        return Object.assign(
          {},
          state,
          {
            [dialog.id]: {
              page: 0
            }
          })
      }
      
      return state

    case CITY_DIALOG_MODAL_PAGE_CHANGE:

      return Object.assign(
        {},
        state,
        {
          [dialog.id]: Object.assign(
            {},
            state,
            {
              [dialog.id]: {
                page
              }
            }
          )
        }
      )
    
      default:
        return state
  }
}