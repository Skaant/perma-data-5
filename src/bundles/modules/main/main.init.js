
import ReactDOM from 'react-dom'
import initStore from './initStore/initStore';

import { combineReducers } from 'redux'
import searchReducer from '../search/_reducer/search.reducer'
import authReducer from '../auth/_reducer/auth.reducer'

import searchInit from '../search/search.init'
import authListener from '../auth/_listener/auth.listener'
import mainReducer from './_reducer/main.reducer';
import mainListener from './_listener/main.listener';

export default pageId =>

  $(document)
    .ready(
      () => {
        
        window.ReactDOM = ReactDOM

        window.__MODULES__ = {}

        initStore(
          combineReducers({
            main: mainReducer,
            search: searchReducer,
            auth: authReducer
          })
        )

        // TO REFACTOR
        searchInit()

        mainListener()
        authListener(pageId)
      })