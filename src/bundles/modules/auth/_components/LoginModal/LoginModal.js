import React from 'react'
import {
  AUTH_LOGIN_MODAL_CLOSE,
  AUTH_SWITCH_FORM_MODE,
  AUTH_UPDATE_FORM_FIELD
} from '../../_actions/auth.actions'
import {
  SIGN_IN,
  SIGN_UP,
  RECOVER
} from '../../_enums/mode/mode.enum'
import {
  FORM_ERROR_EMAIL,
  FORM_ERROR_PSEUDO,
  FORM_ERROR_PASSWORD,
  SERVER_ERROR_EMAIL,
  SERVER_ERROR_PSEUDO
} from '../../_enums/error/error.enum'
import handleFormValidation from './handleFormValidation/handleFormValidation'

const modeLabels = {
  [SIGN_IN]: 'Connectez-vous',
  [SIGN_UP]: 'Créez un compte',
  [RECOVER]: 'Mot de passe oublié ?'
}

const errorLabels = {
  [FORM_ERROR_EMAIL]: 'Adresse email non-valide',
  [FORM_ERROR_PSEUDO]: 'Le pseudo doit faire au moins 5 caractères',
  [FORM_ERROR_PASSWORD]: 'Le mot de passe doit faire au moins 8 caractères',
  [SERVER_ERROR_EMAIL]: 'L\'adresse mail a déjà été choisi par un autre utilisateur',
  [SERVER_ERROR_PSEUDO]: 'Le pseudo a déjà été choisi par un autre utilisateur'
}

export default ({
  mode,
  email,
  pseudo,
  password,
  userPending,
  errors,
  checkingLogin
}) => {

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
              <form className='row my-4'>
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
                              && mode !== RECOVER) {

                            validation()
                          }
                        }
                      }/>
                </div>
                {
                  mode === SIGN_UP
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
                  mode !== RECOVER
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
                                    && mode !== RECOVER) {

                                  validation()
                                }
                              } }/>
                      </div>
                    )
                }
              </form>
              {
                errors.length > 0
                  && (
                    <ul className='text-danger my-5 pl-4'>
                      {
                        errors.map(error =>
                          
                          (
                            <li>
                              { errorLabels[error] }</li>
                          ))
                      }
                    </ul>
                  )
              }
              <ul className='text-right list-unstyled'>
                {
                  mode !== SIGN_IN
                    && (
                      <li>
                        <a style={ {
                            textDecoration: 'underline'
                          } }
                            onClick={
                              () =>
                                switchMode(SIGN_IN)
                            }>
                          { modeLabels[SIGN_IN] }</a>
                      </li>
                    )
                }
                {
                  mode !== SIGN_UP
                    && (
                      <li>
                        <a style={ {
                            textDecoration: 'underline'
                          } }
                            onClick={
                              () =>
                                switchMode(SIGN_UP)
                            }>
                          { modeLabels[SIGN_UP] }</a>
                      </li>
                    )
                }
                {
                  mode !== RECOVER
                    && (
                      <li>
                        <a style={ {
                            textDecoration: 'underline'
                          } }
                            onClick={
                              () =>
                                switchMode(RECOVER)
                            }>
                          { modeLabels[RECOVER] }</a>
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
          <div className='modal-footer border-top-0 d-block'
              style={ {
                backgroundColor: '#7cb342'
              } }>
            {
              checkingLogin
                && (
                  <p className='text-white m-4'>
                    En attente du serveur ...</p>
                )
            }
            {
              userPending
                && (
                  <p className='text-white m-4'>
                    <span className='fas fa-check'></span>&nbsp;
                    Un mail de vérification vous a été envoyé.

                    Cliquez sur le lien contenu dans l'email pour finaliser votre inscription.</p>
                )
            }
            <div className='text-right'>
              <button type='button'
                  className={ 'btn btn-white' + (errors.length > 0 ? ' disabled' : '') }
                  onClick={
                    () =>
                    
                      errors.length === 0
                        && validation() }>
                Valider</button>
              <button type='button'
                  className='btn btn-outline-white'
                  onClick={ closeModal }>
                Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}