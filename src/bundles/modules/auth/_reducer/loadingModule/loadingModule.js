import {
  AUTH_LOAD_MODULE_START,
  AUTH_LOAD_MODULE_SUCCESS,
  AUTH_LOAD_MODULE_ERROR
} from '../../_actions/auth.actions'

export default (
  state = false,
  { type }
) => {

  switch (type) {

    case AUTH_LOAD_MODULE_START:
      return true

    case AUTH_LOAD_MODULE_SUCCESS:
    case AUTH_LOAD_MODULE_ERROR:
      return false
    
    default:
      return state
  }
}