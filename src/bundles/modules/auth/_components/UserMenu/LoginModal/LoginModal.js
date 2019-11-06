import React, {
  useState
} from 'react'
import { AUTH_LOGIN_MODAL_CLOSE } from '../../../_actions/auth.actions';

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
              <form className='row px-4'>
                <style scoped>
                  {
                    `.navbar.navbar-dark form .md-form input.form-control:focus {
                        border-bottom: 2px white solid !important;
                        box-shadow: none;
                    }`
                  }
                </style>
                <div className='md-form col-12 mb-2'>
                  <input type='email'
                      className='form-control'
                      placeholder='E-mail'
                      value={ email }
                      onChange={ () => console.log('temp') }/>
                </div>
                <div className='md-form col-12 mt-2'>
                  <input type='password'
                      className='form-control'
                      placeholder='Mot de passe'
                      value={ password }
                      onChange={ () => console.log('temp') }/>
                </div>
              </form>
              <ul className='text-right list-unstyled'>
                <li>
                  <a style={ {
                      textDecoration: 'underline'
                    } }
                      onClick={ () => console.log('temp') }>
                    { modeLabels['sign-up'] }</a>
                </li>
                <li>
                  <a style={ {
                      textDecoration: 'underline'
                    } }
                      onClick={ () => console.log('temp') }>
                    { modeLabels['recover-password'] }</a>
                </li>
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