
import ReactDOM from 'react-dom'
import authManager from './authManager/authManager'
import initStore from './initStore/initStore';
import { combineReducers } from 'redux';
import searchReducer from '../search/_reducer/search.reducer';
import initSearch from '../search/search.init';

export default 
  pageId =>
    $(document)
      .ready(
        () => {

          window.ReactDOM = ReactDOM

          initStore(
            combineReducers({

              search: searchReducer
            })
          )

          initSearch()

          window.__STATE__ = {
            modules: {}
          }

          authManager(pageId)
        })