import {
  AUTH_LOGIN_MODAL_OPEN,
  AUTH_LOGIN_MODAL_CLOSE
} from '../../_actions/auth.actions'

export default (
  state = false,
  { type }
) => {

  switch (type) {

    case AUTH_LOGIN_MODAL_OPEN:
      return true

    case AUTH_LOGIN_MODAL_CLOSE:
      return false
    
      default:
        return state
  }
}