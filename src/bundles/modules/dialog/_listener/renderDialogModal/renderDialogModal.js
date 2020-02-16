import React from 'react'
import DialogModal from '../../_components/DialogModal/DialogModal';

export default dialog => {
  
  window.ReactDOM
    .render(
      <DialogModal dialog={ dialog }/>,
      document.getElementById('dialog-modal__anchor'))
}