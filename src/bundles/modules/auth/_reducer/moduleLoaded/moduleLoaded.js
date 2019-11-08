import {
  AUTH_LOAD_BUNDLE_SUCCESS
} from '../../_actions/auth.actions'

export default (
  state = false,
  { type }
) => {

  switch (type) {

    case AUTH_LOAD_BUNDLE_SUCCESS:
      return true

    default:
      return state
  }
}