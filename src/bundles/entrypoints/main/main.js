import initStore from './initStore/initStore'
import {
  get as getStore
} from './store/store'

$(document)
  .ready(
    () => {

      initStore()

      console.log(
        getStore()
      )
    })