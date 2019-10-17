import { createStore } from 'redux'

export default 
  reducer => {

    window.__STORE__ =
      createStore(reducer)
  }