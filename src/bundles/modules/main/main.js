
import initSearch from './initSearch/initSearch'
import authManager from './authManager/authManager'

export default () =>
  $(document)
    .ready(
      () => {

        initSearch()
        authManager()
      })