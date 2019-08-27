import ReactDOM from 'react-dom'
import React from 'react'
import LoginModal from '../../components/LoginModal/LoginModal'

/**
 * Initializes the login module
 */
export default () => {

  ReactDOM
    .render(
      <LoginModal
          closeModal={
            () =>
              $('#login-modal')
                .modal('hide')
          }/>,
      $('#login-modal__anchor')[0]
    )

    $('#login-modal__button')
      .click(() =>
        $('#login-modal')
          .modal('show'))
}