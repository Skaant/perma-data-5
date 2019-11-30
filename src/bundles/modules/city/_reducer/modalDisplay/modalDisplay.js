import { CITY_DIALOG_MODAL_OPEN, CITY_DIALOG_MODAL_CLOSE, CITY_SERVER_ACTION_SUCCESS } from "../../_actions/city.actions";

export default (
  state = false,
  { type }
) => {

  switch (type) {

    case CITY_DIALOG_MODAL_OPEN:
      return true

    case CITY_DIALOG_MODAL_CLOSE:
    case CITY_SERVER_ACTION_SUCCESS:
      return false
    
    default:
      return state
  }
}