import { CITY_DIALOG_MODAL_OPEN } from "../../_actions/city.actions";

export default (
  state = {
    type: null,
    key: null
  },
  {
    type,
    dialogType,
    key
  }
) => {

  switch (type) {

    /* case CITY_DIALOG_MODAL_OPEN:
      
      return {
        type: dialogType,
        key,
        page: globalState
          && globalState
            .homeAuth
          && global
            .homeAuth
            .dialogHistory
          && global
            .homeAuth
            .dialogHistory[
              dialogType]
          && global
            .homeAuth
            .dialogHistory[
              dialogType][
                key]
          && global
            .homeAuth
            .dialogHistory[
              dialogType][
                key][
                  page]
          || 0
      } */

    default:
      return state
  }
}