import { DIALOG_MODAL_OPEN, DIALOG_MODAL_PAGE_CHANGE } from "../../_actions/dialog.actions";

export default (
  state = {},
  { 
    type,
    dialog,
    newPage
  }
) => {

  switch (type) {

    case DIALOG_MODAL_OPEN:

      if (!state[dialog.id]) {

        return Object.assign(
          {},
          state,
          {
            [dialog.id]: {
              page: dialog.page
                || 0
            }
          })
      }
      
      return state

    case DIALOG_MODAL_PAGE_CHANGE:

      return Object.assign(
        {},
        state,
        {
          [dialog.id]: Object.assign(
            {},
            dialog,
            {
              page: newPage
            }
          )
        }
      )
    
    default:
      
      return state
  }
}