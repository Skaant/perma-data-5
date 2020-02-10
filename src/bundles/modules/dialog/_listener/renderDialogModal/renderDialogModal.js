import React from 'react'
import DialogModal from '../../_components/DialogModal/DialogModal';

export default () => {

  const {
    currentDialog: dialog
  } = window.__STORE__
    .getState()
    .city
  
  window.ReactDOM
    .render(
      <DialogModal dialog={ dialog }/>,
      document.getElementById('dialog-modal__anchor'))
}