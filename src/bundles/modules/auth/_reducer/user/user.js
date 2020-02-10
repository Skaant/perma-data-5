import {
  AUTH_LOGIN_CHECK_SUCCESS,
  AUTH_DISCONNECT,
  AUTH_TOKEN_CHECK_SUCCESS
} from '../../_actions/auth.actions'
import { INITALIZER_BUNDLE_REGISTERED } from '../../../../entrypoints/_initializer/_actions/initializer.actions';

export default (
  state = false,
  {
    type,
    bundle,
    user
  }
) => {

  switch (type) {

    case AUTH_LOGIN_CHECK_SUCCESS:
    case AUTH_TOKEN_CHECK_SUCCESS:

      return user

    case INITALIZER_BUNDLE_REGISTERED:

      const {
        buildings,
        ...data
      } = state
        || {}

      return data

    case AUTH_DISCONNECT:

      return false
    
    default:

      return state
  }
}