import { MAIN_LOAD_BUNDLE_SUCCESS } from "../../_actions/main.actions";

export default (
  state = [],
  { 
    type,
    key
  }
) => {

  console.log(type)

  switch (type) {

    case MAIN_LOAD_BUNDLE_SUCCESS:
      return [
        ...state,
        key
      ]
    
    default:
      return state
  }
}