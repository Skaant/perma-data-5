import { DIALOG_MODAL_OPEN, DIALOG_PAGE_NEXT, DIALOG_PAGE_PREVIOUS, DIALOG_MODAL_CLOSE } from "../../_actions/dialog.actions";

export default (
  state = false,
  {
    type,
    dialog
  }
) => {

  switch (type) {

    case DIALOG_MODAL_OPEN:

      return dialog

    case DIALOG_PAGE_PREVIOUS:

      return Object.assign(
        {},
        state,
        {
          page: state
            .page - 1
        }
      )

    case DIALOG_PAGE_NEXT:

      return Object.assign(
        {},
        state,
        {
          page: state
            .page + 1
        }
      )

    case DIALOG_MODAL_CLOSE:

      return false

    default:

      return state
  }
}