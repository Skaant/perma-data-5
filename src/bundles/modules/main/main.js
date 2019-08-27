import initStore from './initStore/initStore'
import {
  get as getStore
} from './store/store'

export default () =>
  $(document)
    .ready(
      () => {

        initStore()

        console.log(
          getStore()
        )
      })