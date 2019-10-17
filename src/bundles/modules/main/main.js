
import ReactDOM from 'react-dom'
import authManager from './authManager/authManager'
import initStore from './initStore/initStore';
import searchListener from '../search/_listener/search.listener';
import { combineReducers } from 'redux';
import searchReducer from '../search/_reducer/search.reducer';
import search from '../search/search';

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

          search()

          window.__STATE__ = {
            modules: {}
          }

          authManager(pageId)
        })