import { DIALOG_MODAL_OPEN, DIALOG_MODAL_PAGE_CHANGE } from "../../_actions/dialog.actions";

export default (
  state = null,
  {
    type,
    dialog,
    newPage
  }
) => {

  switch (type) {

    case DIALOG_MODAL_OPEN:

      return dialog

    case DIALOG_MODAL_PAGE_CHANGE:

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