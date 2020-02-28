import React from 'react'
import DialogModal from '../../_components/DialogModal/DialogModal';
import dialogsTypePathEnum from '../../../city/_enums/dialogsTypePath/dialogsTypePath.enum';

export default ({
  buildingId,
  // DIALOG #1 : Static dialog definition
  ...dialog
}) => {

  const {
    city,
    dialog: dialogState
  } = window.__STORE__
    .getState()

  // DIALOG #2 : Dynamic dialog properties
  const _dialog = city
    .buildings
    [buildingId]
    [dialogsTypePathEnum[dialog.type]]
    [dialog.id]
  
  window.ReactDOM
    .render(
      <DialogModal dialog={
            Object.assign(
              {},
              dialog,
              _dialog,
              // DIALOG #3 : Compute page index
              {
                page: 
                  dialogState
                    .history[dialog.id]
                  ? dialogState
                    .history[dialog.id]
                      .page

                  : 0
              }
            )
      } />,
      document.getElementById('dialog-modal__anchor'))
}