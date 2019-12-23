import { INITALIZER_BUNDLE_REGISTERED } from "../_actions/initializer.actions";

export default (
  state = {
    bundleIds: [],
    moduleIds: []
  }, {
    type,
    ...action
  }
) => {

  const { 
    bundleIds,
    moduleIds
   } = state

  switch (type) {

    case INITALIZER_BUNDLE_REGISTERED:

      const {
        bundleId: _bundleId,
        modulesIds: _modulesIds
      } = action

      return {
        bundleIds: bundleIds
          .slice()
          .push(_bundleId),
        modulesIds: moduleIds
          .slice()
          .concat(_modulesIds)
      }

    default:

      return state
  }
}