import { CITY_DIALOG_MODAL_OPEN, CITY_DIALOG_MODAL_PAGE_CHANGE } from "../../_actions/city.actions";

export default (
  state = null,
  {
    type,
    dialog,
    newPage
  }
) => {

  switch (type) {

    case CITY_DIALOG_MODAL_OPEN:

      return dialog

    case CITY_DIALOG_MODAL_PAGE_CHANGE:

      return Object.assign(
        {},
        state,
        {
          page: newPage
        }
      )

    default:
      return state
  }
}