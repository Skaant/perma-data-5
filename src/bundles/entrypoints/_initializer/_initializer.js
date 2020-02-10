import { combineReducers } from 'redux'
import { INITALIZER_BUNDLE_REGISTERED } from './_actions/initializer.actions'

/**
 * ***_initializer*** get a bundle id and its list of *modules*, for each of them :
 *  * it adds **new reducers**, which increments the \__STORE\__'s state tree,
 *  * it add **new listeners** to react to \__STORE\__'s state transitions.
 * 
 * @param {string} bundleId - The bundle id, *for the sake of **dispatch**.
 * @param {array} modules - The module list, **also dispatched**.
 * 
 * @emit `INITALIZER_BUNDLE_REGISTERED`
 */
export default ({
  id: bundleId,
  init,
  modules
}) => {

  const store = window.__STORE__

  modules
    .forEach(({
      id: moduleId,
      reducer,
      listener
    }) => {
      
      window.__REDUCERS__[moduleId] = reducer

      store.subscribe(listener)
    })

  store.replaceReducer(
    combineReducers(
      window.__REDUCERS__))

  store.dispatch({
    type: INITALIZER_BUNDLE_REGISTERED,
    id: bundleId,
    modules: modules
      .map(({ id }) => id),
    ...(
      init
        ? init()
        
        : {})
  })
}