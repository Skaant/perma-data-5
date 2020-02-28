import { AUTH_LOGIN_MODAL_OPEN } from "../../../auth/_actions/auth.actions"

export default () => {

  const store = window.__STORE__

  $('.btn-sign-in')
    .on(
      'click',
      () =>

        store
          .dispatch({
            type: AUTH_LOGIN_MODAL_OPEN,
            mode: 'sign-in'
          })
    )

    $('.btn-sign-up')
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