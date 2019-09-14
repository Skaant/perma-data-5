
import ReactDOM from 'react-dom'
import initSearch from './initSearch/initSearch'
import authManager from './authManager/authManager'

export default 
  pageId =>
    $(document)
      .ready(
        () => {

          window.__STATE__ = {
            modules: {}
          }
          window.ReactDOM = ReactDOM

          initSearch()
          authManager(pageId)
        })