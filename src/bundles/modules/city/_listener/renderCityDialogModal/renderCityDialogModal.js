import React from 'react'
import CityDialogModal from '../../_components/CityDialogModal/CityDialogModal';


export default () => {

  const {
    currentDialog: dialog
  } = window.__STORE__
    .getState()
    .city
  
  window.ReactDOM
    .render(
      <CityDialogModal dialog={ dialog }/>,
        document.getElementById('city-dialog-modal__anchor'))
}