import React from 'react'
import CityDialogModal from '../../_components/City/CityDialogModal/CityDialogModal';


export default () => {

  const { currentDialog } = window.__STORE__
    .getState()
    .homeAuth
  
  window.ReactDOM
    .render(
      <CityDialogModal type={ currentDialog.type }
          key={ currentDialog.key }
          page={ currentDialog.page }/>,
      document.getElementById('city-dialog-modal__anchor'))
}