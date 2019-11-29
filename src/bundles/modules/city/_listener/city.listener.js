import renderCity from './renderCity/renderCity'
import renderCityDialogModal from './renderCityDialogModal/renderCityDialogModal';

  let previous = null
  let previousAuth = null

  const store = window.__STORE__

export default () => {

  const next = store
    .getState()
    .city

  const nextAuth = store
    .getState()
    .auth

  // TODO deep buildings check
  if (nextAuth
      && nextAuth.user
      && nextAuth.user.buildings) {

    const {
      pseudo,
      buildings
     } = nextAuth.user

    renderCity({
      pseudo,
      buildings
    })
  } 

  if ((!previousAuth
      || !previousAuth.user)
      && nextAuth.user) {

    $('#summary')
      .addClass('d-none')
  }

  if (previousAuth
      && previousAuth.user
      && !nextAuth.user) {

    $('#summary')
      .removeClass('d-none')
  }

  if ((!previous
      || !previous.modalDisplay)
    && next.modalDisplay
    && next.currentDialog) {

      renderCityDialogModal(next
        .currentDialog)

      $('#city-dialog-modal')
        .modal('show')
  }

  if (previous
    && previous.modalDisplay
    && !next.modalDisplay) {

      $('#city-dialog-modal')
        .modal('hide')
  }

  previous = next
  previousAuth = nextAuth
}