
import ReactDOM from 'react-dom'
import initStore from './initStore/initStore';
import { combineReducers } from 'redux'
import searchReducer from '../search/_reducer/search.reducer'
import authReducer from '../auth/_reducer/auth.reducer'
import searchInit from '../search/search.init'
import authListener from '../auth/_listener/auth.listener'

export default pageId =>

  $(document)
    .ready(
      () => {

        window.ReactDOM = ReactDOM

        initStore(
          combineReducers({
            search: searchReducer,
            auth: authReducer
          })
        )

        searchInit()
        authListener()
      })