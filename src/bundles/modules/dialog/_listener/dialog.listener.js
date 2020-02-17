import renderDialogModal from './renderDialogModal/renderDialogModal';
import setBackdropClickClose from '../../_utils/setBackdropClickClose/setBackdropClickClose';
import { DIALOG_MODAL_CLOSE } from '../_actions/dialog.actions'

let previous = null
let previousCity = null

const store = window.__STORE__

export default () => {

  const {
    dialog: next,
    city: nextCity
  } = store
    .getState()

  if ((!previous
      || !previous.modalDisplay
      || previous.currentDialog.page
        !== next.currentDialog.page)
    && next.modalDisplay
    && next.currentDialog) {

      renderDialogModal(next
        .currentDialog)

      $('#city-dialog-modal')
        .modal('show')

      setBackdropClickClose(
        '#city-dialog-modal',
        DIALOG_MODAL_CLOSE
      )
  }

  if (previous
    && previous.modalDisplay
    && !next.modalDisplay) {

      $('#city-dialog-modal')
        .modal('hide')
  }

  if (next.modalDisplay
    && previousCity.buildings
      !== nextCity.buildings) {

    renderDialogModal(next
      .currentDialog)
  }

  previous = next
  previousCity = nextCity
}