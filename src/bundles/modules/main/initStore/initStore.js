import { 
  createStore
} from 'redux'

import {
  set as setStore
} from '../store/store'

export default () =>
  setStore(
    createStore(
      (action, state) =>
        state,
      {
        _modules: {},
        error: false
      }
    )
  )