import {
  AUTH_LOGIN_CHECK_SUCCESS,
  AUTH_DISCONNECT,
  AUTH_TOKEN_CHECK_SUCCESS
} from '../../_actions/auth.actions'
import { CITY_SERVER_ACTION_SUCCESS } from '../../../city/_actions/city.actions';

export default (
  state = false,
  {
    type,
    user,
    buildings
  }
) => {

  switch (type) {

    case AUTH_LOGIN_CHECK_SUCCESS:
    case AUTH_TOKEN_CHECK_SUCCESS:
      return user

    case CITY_SERVER_ACTION_SUCCESS:
      
      return Object.assign(
        {},
        state,
        {
          buildings: state.buildings
            .map(building =>

              buildings[building.key]
                || building)
        }
      )

    case AUTH_DISCONNECT:
      return false
    
    default:
      return state
  }
}