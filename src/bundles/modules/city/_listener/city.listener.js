import renderCity from './renderCity/renderCity'
import renderCityDialogModal from './renderCityDialogModal/renderCityDialogModal';
import setBackdropClickClose from '../../_utils/setBackdropClickClose/setBackdropClickClose';
import { CITY_DIALOG_MODAL_CLOSE } from '../_actions/city.actions';
import unmountCityElements from './unmountCityElements/unmountCityElements';

let previous = null
let previousAuth = null

const store = window.__STORE__

export default () => {

  const next = store
    .getState()
    .city

  // TODO move to the `mainAuth.listener`
  const nextAuth = store
    .getState()
    .auth

  if ((!previousAuth
      || !previousAuth.user)
      && nextAuth.user) {

    $('#home-base')
      .addClass('d-none')
  }

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

  if (previousAuth
      && previousAuth.user
      && !nextAuth.user) {

    $('#home-base')
      .removeClass('d-none')

    unmountCityElements()
  }

  if ((!previous
      || !previous.modalDisplay
      || previous.currentDialog.page
        !== next.currentDialog.page)
    && next.modalDisplay
    && next.currentDialog) {

      renderCityDialogModal(next
        .currentDialog)

      $('#city-dialog-modal')
        .modal('show')

      setBackdropClickClose(
        '#city-dialog-modal',
        CITY_DIALOG_MODAL_CLOSE
      )
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