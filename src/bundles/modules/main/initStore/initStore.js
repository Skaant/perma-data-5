import { 
  createStore
} from 'redux'

export default () => {
  window.__STORE__ =
    createStore(
      (action, state) =>
        state,
      {
        error: false
      }
    )

  window.__MODULES__ = {}
  
  window.__ACTIONS__ = {}
}