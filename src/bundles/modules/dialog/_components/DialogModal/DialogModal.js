import React from 'react'
import { DIALOG_MODAL_CLOSE } from '../../_actions/dialog.actions';
import Menu from './Menu/Menu';
import dialogTypeIconEnum from '../../../_enums/dialogTypeIcon/dialogTypeIcon.enum';
import dialogTypeLabelEnum from '../../../_enums/dialogTypeLabel/dialogTypeLabel.enum';
import Interactors from './Interactors/Interactors';

export default ({ dialog }) => {  

  const closeModal = () =>
    window.__STORE__
      .dispatch({
        type: DIALOG_MODAL_CLOSE
      })

  const page = dialog
    .pages[dialog.page]

  const interactors = page.interactors
    && page.interactors(dialog)

  // Triggers the method to be called on page opening
  if (page.open) {

    setTimeout(
      () =>

        page
          .open(dialog),
      1
    )
  }

  return (
    <div id='city-dialog-modal'
        className='modal fade right show'>
      <div className='modal-dialog modal-dialog-centered animated zoomInUp'
          role='document'>
        <div className='modal-content'>
          {
            // TO DEPRECIATE ?
            page.image
              || dialog.image
              && (
                <div className='modal-body px-0'>
                  <img src={ `/public/images/dialogs/${
                      page.image
                      || dialog.image }`}/>
                </div>
              )
          }
          <div className='modal-body px-5 pt-4'
              style={ {
                fontSize: '1.2rem'
              } }>
            <button type='button'
                className='close'
                onClick={ closeModal }>
              <span aria-hidden='true'>&times;</span>
            </button>
            <h5 className='modal-title h2 font-weight-light mt-2 my-4'>
              <span className={ `${
                    dialog.status === 'VALIDATED'
                      ? 'fa-3x ml-3 my-4'

                      : 'fa-lg mx-3'
                  } ${
                    dialogTypeIconEnum[dialog.type]
                  }  text-green-hover` }
                  title={ dialogTypeLabelEnum[dialog.type] }></span>
              {
                dialog.status === 'VALIDATED'
                  && (
                    <span className='fas fa-3x fa-check-circle text-green-hover'
                        title='Valide'></span>
                  )
              }
            </h5>
            <h1 className='font-weight-lighter mb-5'>
              { dialog.title }</h1>
            {
              page.content()
            }
          </div>
          {
            interactors
              && interactors.length > 0
              && (
                <Interactors dialogId={ dialog.id }
                    pageIndex={ dialog.page }
                    interactors={ interactors } />
              )
          }
          {
            page.menu
              && page.menu.length > 0
              && (
                <Menu dialogId={ dialog.id }
                    pageIndex={ dialog.page }
                    menu={ page.menu } />
              )
          }
        </div>
      </div>
    </div>
  )
}