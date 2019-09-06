import {
  login
} from '../../../modules'

window.__MODULES__['login'] = () => {

  login()

  $('#login-button')
    .click(() =>
      $('#login-modal')
        .modal('show'))
  
  $('#login-modal')
    .modal('show')
}