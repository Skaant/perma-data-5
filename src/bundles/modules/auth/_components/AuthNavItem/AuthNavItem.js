import React from 'react'
import {
  AUTH_LOGIN_MODAL_OPEN
} from '../../_actions/auth.actions'
import { MAIN_AUTH_USER_MODAL_OPEN } from '../../../mainAuth/_actions/mainAuth.actions'

export default ({
  checkingLogin,
  checkingToken,
  user
}) => {

  const store = window.__STORE__
  
  return (
    <React.Fragment>
      {
        !user
          && (checkingLogin === true
            || checkingToken === true)
          && (
            <span className='fas fa-user fa-lg text-green animated infinite flash disabled'
                title='Chargement des données utilisateur'></span>
          )
      }
      {
        !user
          && (checkingLogin !== true
            && checkingToken !== true)
          && (
            <span className="fas fa-user fa-lg text-green"
                title="S'authentifier"
                onClick={
                  () =>

                    store.dispatch({
                      type: AUTH_LOGIN_MODAL_OPEN
                    }) }></span>
          )
      }
      {
        user
          && (
            <span className="fas fa-user-check fa-lg text-green"
                title={ 'Menu utilisateur de : '
                  + user.pseudo }
                onClick={
                  () =>
                  
                    store.dispatch({
                      type: MAIN_AUTH_USER_MODAL_OPEN
                    }) }></span>
          )
      }
    </React.Fragment>
  )
}