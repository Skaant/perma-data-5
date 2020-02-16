import { INITALIZER_BUNDLE_REGISTERED } from '../../../../entrypoints/_initializer/_actions/initializer.actions'
import { AUTH_DISCONNECT } from '../../../auth/_actions/auth.actions'
import { CITY_SERVER_ACTION_SUCCESS } from '../../../city/_actions/city.actions'

export default (
  state = false,
  {
    type,
    bundleId,
    buildings = {},
    nextBuildings
  }
) => {

  switch (type) {

    case CITY_SERVER_ACTION_SUCCESS:

      return {
        ...state,
        ...nextBuildings
      }

    case INITALIZER_BUNDLE_REGISTERED:

      if (bundleId
        .includes('-auth')) {
      
        return buildings
      }

      return state

    case AUTH_DISCONNECT:
      
      return false
    
    default:

      return state
  }
}