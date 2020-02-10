import { INITALIZER_BUNDLE_REGISTERED } from '../../../../entrypoints/_initializer/_actions/initializer.actions'
import { AUTH_DISCONNECT } from '../../../auth/_actions/auth.actions'

export default (
  state = false,
  {
    type,
    buildings
  }
) => {

  switch (type) {

    case INITALIZER_BUNDLE_REGISTERED:
      
      return buildings

    case AUTH_DISCONNECT:
      
      return false
    
    default:

      return state
  }
}