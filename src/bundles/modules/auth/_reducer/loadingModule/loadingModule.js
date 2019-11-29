import {
  AUTH_LOAD_BUNDLE_START,
  AUTH_LOAD_BUNDLE_SUCCESS,
  AUTH_LOAD_BUNDLE_ERROR
} from '../../_actions/auth.actions'

export default (
  state = false,
  { type }
) => {

  switch (type) {

    case AUTH_LOAD_BUNDLE_START:
      return true

    case AUTH_LOAD_BUNDLE_SUCCESS:
    case AUTH_LOAD_BUNDLE_ERROR:
      return false
    
    default:
      return state
  }
}