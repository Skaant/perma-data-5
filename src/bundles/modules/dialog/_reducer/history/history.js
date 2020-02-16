import { DIALOG_MODAL_OPEN, DIALOG_PAGE_NEXT, DIALOG_PAGE_PREVIOUS } from "../../_actions/dialog.actions";

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

    case DIALOG_PAGE_PREVIOUS:

      return Object.assign(
        {},
        state,
        {
          [dialog.id]: Object.assign(
            {},
            state[dialog.id],
            {
              page: state[dialog.id]
                .page
                  - 1
            }
          )
        }
      )

      case DIALOG_PAGE_NEXT:
  
        return Object.assign(
          {},
          state,
          {
            [dialog.id]: Object.assign(
              {},
              state[dialog.id],
              {
                page: state[dialog.id]
                  .page
                    + 1
              }
            )
          }
        )
    
    default:
      
      return state
  }
}