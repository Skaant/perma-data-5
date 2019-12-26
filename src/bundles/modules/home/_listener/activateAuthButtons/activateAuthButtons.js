import { AUTH_LOGIN_MODAL_OPEN } from "../../../auth/_actions/auth.actions"

export default () => {

  const store = window.__STORE__

  $('.home-btn-sign-in')
    .on(
      'click',
      () =>

        store
          .dispatch({
            type: AUTH_LOGIN_MODAL_OPEN,
            mode: 'sign-in'
          })
    )

    $('.home-btn-sign-up')
      .on(
        'click',
        () =>
  
          store
            .dispatch({
              type: AUTH_LOGIN_MODAL_OPEN,
              mode: 'sign-up'
            })
      )
}