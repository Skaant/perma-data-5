import React from 'react'
import {
  AUTH_LOGIN_MODAL_CLOSE,
  AUTH_SWITCH_FORM_MODE,
  AUTH_UPDATE_FORM_FIELD
} from '../../_actions/auth.actions'
import handleFormValidation from './handleFormValidation/handleFormValidation'

export default ({
  mode,
  email,
  pseudo,
  password
}) => {

  const modeLabels = {
    'sign-in': 'Connectez-vous',
    'sign-up': 'Créez un compte',
    'recover-password': 'Mot de passe oublié ?'
  }

  const label = modeLabels[mode]

  const store = window.__STORE__

  const switchMode = mode =>

    store
      .dispatch({
        type: AUTH_SWITCH_FORM_MODE,
        mode
      })

  const handleFieldChange = (
    key,
    event
  ) =>

    store
      .dispatch({
        type: AUTH_UPDATE_FORM_FIELD,
        field: {
          key,
          value: event.target.value
        }
      })

  const validation = () =>

    handleFormValidation(
      mode,
      {
        email,
        pseudo,
        password
      }
    )

  const closeModal = () =>
    store
      .dispatch({
        type: AUTH_LOGIN_MODAL_CLOSE
      })

  return (
    <div id='login-modal'
        className='modal fade show'>
      <div className='modal-dialog'
          role='document'
          style={ {
            marginTop: '60px'
          } }>
        <div className='modal-content'>
          <div className='modal-header z-depth-2 p-4'>
            <div className='container p-0'>
              <h1 className='mt-5 mb-4'>
                { label }</h1>
              <form className='row px-4 my-4'>
                <style scoped>
                  {
                    `.navbar.navbar-dark form .md-form input.form-control:focus {
                        border-bottom: 2px white solid !important
                        box-shadow: none
                    }`
                  }
                </style>
                <div className='md-form col-12 my-2'>
                  <input type='email'
                      className='form-control'
                      placeholder='E-mail'
                      value={ email }
                      onChange={
                        event =>

                          handleFieldChange(
                            'email',
                            event
                          )
                      }
                      onKeyPress={
                        e => {

                          if (e.key === 'Enter'
                              && mode !== 'recover-password') {

                            validation()
                          }
                        }
                      }/>
                </div>
                {
                  mode === 'sign-up'
                    && (
                      <div className='md-form col-12 my-2'>
                        <input type='text'
                            className='form-control'
                            placeholder='Pseudo'
                            value={ pseudo }
                            onChange={
                              event =>

                                handleFieldChange(
                                  'pseudo',
                                  event
                                )
                            }/>
                      </div>
                    )
                }
                {
                  mode !== 'recover-password'
                    && (
                      <div className='md-form col-12 my-2'>
                        <input type='password'
                            className='form-control'
                            placeholder='Mot de passe'
                            value={ password }
                            onChange={
                              event =>

                                handleFieldChange(
                                  'password',
                                  event
                                )
                            }
                            onKeyPress={
                              e => {

                                if (e.key === 'Enter'
                                    && mode !== 'recover-password') {

                                  validation()
                                }
                              } }/>
                      </div>
                    )
                }
              </form>
              <ul className='text-right list-unstyled'>
                {
                  mode !== 'sign-in'
                    && (
                      <li>
                        <a style={ {
                            textDecoration: 'underline'
                          } }
                            onClick={
                              () =>
                                switchMode('sign-in')
                            }>
                          { modeLabels['sign-in'] }</a>
                      </li>
                    )
                }
                {
                  mode !== 'sign-up'
                    && (
                      <li>
                        <a style={ {
                            textDecoration: 'underline'
                          } }
                            onClick={
                              () =>
                                switchMode('sign-up')
                            }>
                          { modeLabels['sign-up'] }</a>
                      </li>
                    )
                }
                {
                  mode !== 'recover-password'
                    && (
                      <li>
                        <a style={ {
                            textDecoration: 'underline'
                          } }
                            onClick={
                              () =>
                                switchMode('recover-password')
                            }>
                          { modeLabels['recover-password'] }</a>
                      </li>
                    )
                }
              </ul>
            </div>
            <button type='button'
                className='close'
                onClick={ closeModal }>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-footer border-top-0'
              style={ {
                backgroundColor: '#7cb342'
              } }>
            <button type='button'
                className='btn btn-white'
                onClick={
                  () =>
                  
                    validation() }>
              Valider</button>
            <button type='button'
                className='btn btn-outline-white'
                onClick={ closeModal }>
              Fermer</button>
          </div>
        </div>
      </div>
    </div>
  )
}