import {
  CITY_DIALOG_MODAL_OPEN,
  CITY_DIALOG_MODAL_PAGE_CHANGE
} from '../../_actions/homeAuth.actions'

export default (
  state = {},
  { 
    type,
    dialogType,
    key, // dialog key
    page
  }
) => {

  switch (type) {

    case CITY_DIALOG_MODAL_OPEN:

      if (!state[dialogType]) {

        return Object.assign(
          {},
          state,
          {
            [dialogType]: {
              [key]: {
                page: 0
              }
            }
          })
      } else if (!state[dialogType][key]) {

        return Object.assign(
          {},
          state,
          {
            [dialogType]: Object.assign(
              {},
              state[
                dialogType],
              {
                [key]: {
                  page: 0
                }
              }
            )
          }
        )
      } else {

        return state
      }

    case CITY_DIALOG_MODAL_PAGE_CHANGE:

      return Object.assign(
        {},
        state,
        {
          [dialogType]: Object.assign(
            {},
            state[
              dialogType],
            {
              [key]: {
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