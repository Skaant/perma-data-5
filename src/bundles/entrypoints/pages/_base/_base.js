
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import _initializerReducer from '../../_initializer/_reducer/_initializer.reducer'
import _initializer from '../../_initializer/_initializer'

/**
 * ***_base*** is the **starting script of all** [rendered] **pages**.
 * 
 *  It directly depends on the `_initializer` *pattern* to register
 *  the first *bundle* and the followings.
 * 
 *  1. Binds the `pageId` *param* to the `window.PAGE_ID` *property*,
 *  2. Binds the `ReactDOM` *node_module* to the `window.ReactDOM` *property*,
 *  3. `createStore` with `_initializer.reducer` on the `_initializer` *store's state property*,
 *  4. Binds the `_initializer.reducer` *param*'s 
 * 
 * @note that `_initializer/_initializer.js` is definitely not a module
 *  but a raw script executed at page load.
 */
export default (
  pageId,
  bundle
) => {

  window.PAGE_ID = pageId

  window.ReactDOM = ReactDOM

  window.__STORE__ = createStore(
    combineReducers({
      _initializer: _initializerReducer
    }))

  window.__REDUCERS__ = {
    _initializer: _initializerReducer
  }

  _initializer(bundle)
}