
import ReactDOM from 'react-dom'
import _initializer from '../../_initializer/_initializer'
import initializerReducer from '../../_initializer/_reducer/initializer.reducer'
import { combineReducers, createStore } from 'redux'

/**
 * The *active* base of all rendered pages (for now) :
 *  * Register `window.ReactDOM`
 *  * Register `window.__STORE__`
 */
export default (
  pageId,
  bundle
) => {

  window.PAGE_ID = pageId

  window.ReactDOM = ReactDOM

  window.__STORE__ = createStore(
    combineReducers({
      initialize: initializerReducer
    }))

  window.__REDUCERS__ = {
    initialize: {
      id: 'initializer',
      reducer: initializerReducer,
      listener: null
    }
  }

  _initializer(bundle)
}