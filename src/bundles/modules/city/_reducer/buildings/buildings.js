import { INITALIZER_BUNDLE_REGISTERED } from '../../../../entrypoints/_initializer/_actions/initializer.actions'
import { AUTH_DISCONNECT } from '../../../auth/_actions/auth.actions'
import { CITY_SERVER_ACTION_SUCCESS } from '../../../city/_actions/city.actions'

export default (
  state = false,
  {
    type,
    buildings
  }
) => {

  switch (type) {

    case CITY_SERVER_ACTION_SUCCESS:

      return {
        state,
        ...buildings
      }

    case INITALIZER_BUNDLE_REGISTERED:
      
      return buildings

    case AUTH_DISCONNECT:
      
      return false
    
    default:

      return state
  }
}