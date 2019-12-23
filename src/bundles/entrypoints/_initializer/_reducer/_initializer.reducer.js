import { INITALIZER_BUNDLE_REGISTERED } from "../_actions/initializer.actions";

export default (
  state = {
    bundlesId: [],
    modulesId: []
  }, {
    type,
    ...action
  }
) => {

  const { 
    bundlesId,
    modulesId
   } = state

  switch (type) {

    case INITALIZER_BUNDLE_REGISTERED:

      const {
        bundleId: _bundleId,
        modulesId: _modulesId
      } = action

      return {
        bundlesId: [
          ...bundlesId,
          _bundleId
        ],
        modulesId: [
          ...modulesId,
          ..._modulesId
        ]
      }

    default:

      return state
  }
}