import { MAIN_AUTH_USER_MODAL_OPEN, MAIN_AUTH_USER_MODAL_CLOSE } from "../../_actions/mainAuth.actions"
import { AUTH_DISCONNECT } from "../../../auth/_actions/auth.actions"


export default (
  state = false,
  { type }
) => {

  switch (type) {

    case MAIN_AUTH_USER_MODAL_OPEN:
      return true

    case MAIN_AUTH_USER_MODAL_CLOSE:
    // Automatically close on disconnection 
    case AUTH_DISCONNECT:
      return false
    
      default:
        return state
  }
}