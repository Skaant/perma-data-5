import { INITALIZER_BUNDLE_REGISTERED } from "../_actions/initializer.actions";

export default (
  state = {
    bundles: [],
    modules: []
  }, {
    type,
    ...action
  }
) => {

  const { 
    bundles,
    modules
   } = state

  switch (type) {

    case INITALIZER_BUNDLE_REGISTERED:

      const {
        id: _bundle,
        modules: _modules
      } = action

      return {
        bundles: [
          ...bundles,
          _bundle
        ],
        modules: [
          ...modules,
          ..._modules
        ]
      }

    default:

      return state
  }
}