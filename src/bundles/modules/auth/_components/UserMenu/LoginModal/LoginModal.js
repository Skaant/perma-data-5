import React from 'react'
import { AUTH_LOGIN_MODAL_CLOSE, AUTH_SWITCH_FORM_MODE, AUTH_UPDATE_FORM_FIELD } from '../../../_actions/auth.actions';

export default ({
  modalDisplay,
  mode,
  email,
  pseudo,
  password
}) => {

  const modeLabels = {
    'sign-in': 'Connexion',
    'sign-up': 'Créer un compte',
    'recover-password': 'Mot de passe oublié'
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
    value
  ) => 
    store
      .dispatch({
        type: AUTH_UPDATE_FORM_FIELD,
        field: {
          key,
          value
        }
      })

  const closeModal = () =>
    store
      .dispatch({
        type: AUTH_LOGIN_MODAL_CLOSE
      })

  return (
    <div id='login-modal'
        className='modal fade right show'>
      <div className='modal-dialog modal-side modal-top-right mr-4'
          role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title text-danger'>
              S'authentifier</h5>
            <button type='button'
                className='close'
                onClick={ closeModal }>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body bg-danger'>
            <div className='container pb-2'>
              <h3 className='row text-white mt-4 pl-2'>
                { label }</h3>
              <form className='row px-4 my-4'>
                <style scoped>
                  {
                    `.navbar.navbar-dark form .md-form input.form-control:focus {
                        border-bottom: 2px white solid !important;
                        box-shadow: none;
                    }`
                  }
                </style>
                <div className='md-form col-12 my-2'>
                  <input type='email'
                      className='form-control'
                      placeholder='E-mail'
                      value={ email }
                      onChange={
                        e =>
                          handleFieldChange(
                            'email',
                            e.target.value
                          ) }/>
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
                              e =>
                                handleFieldChange(
                                  'pseudo',
                                  e.target.value
                                ) }/>
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
                              e =>
                                handleFieldChange(
                                  'password',
                                  e.target.value
                                ) }/>
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
          </div>
          <div className='modal-footer'>
            <button type='button'
                className='btn btn-outline-danger'
                onClick={ closeModal }>
              Fermer</button>
            <button type='button'
                className='btn btn-danger'
                onClick={ () => console.log('temp') }>
              Valider</button>
          </div>
        </div>
      </div>
    </div>
  )
}