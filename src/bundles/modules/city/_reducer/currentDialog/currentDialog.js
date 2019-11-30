import { CITY_DIALOG_MODAL_OPEN } from "../../_actions/city.actions";

export default (
  state = null,
  {
    type,
    dialog,
    history
  }
) => {

  switch (type) {

    case CITY_DIALOG_MODAL_OPEN:
      return dialog

    default:
      return state
  }
}