import { DIALOG_MODAL_OPEN, DIALOG_MODAL_CLOSE } from "../../_actions/dialog.actions";

export default (
  state = false,
  { type }
) => {

  switch (type) {

    case DIALOG_MODAL_OPEN:
      return true

    case DIALOG_MODAL_CLOSE:
      return false
    
    default:
      return state
  }
}