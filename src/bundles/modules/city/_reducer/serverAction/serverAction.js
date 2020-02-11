import { CITY_SERVER_ACTION_START, CITY_SERVER_ACTION_SUCCESS, CITY_SERVER_ACTION_ERROR } from "../../_actions/city.actions"

export default (
  state = false,
  {
    type,
    actionType
  }
) => {

  switch (type) {

    case CITY_SERVER_ACTION_START:

      return {
        type: actionType
      }

    case CITY_SERVER_ACTION_SUCCESS:
    case CITY_SERVER_ACTION_ERROR:

      return false
    
    default:

      return state
  }
}