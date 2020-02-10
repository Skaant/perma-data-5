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
    .pages[dialog
      .page]

  return (
    <div id='city-dialog-modal'
        className='modal fade right show'>
      <div className='modal-dialog modal-dialog-centered animated zoomInUp'
          role='document'>
        <div className='modal-content'>
          {
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
          <div className='modal-body px-5 pt-4 pb-5 shadow'
              style={ {
                fontSize: '1.2rem'
              } }>
            <button type='button'
                className='close'
                onClick={ closeModal }>
              <span aria-hidden='true'>&times;</span>
            </button>
            <h5 className='modal-title h2 font-weight-light text-green-hover mt-2 my-4'>
              <span className={ `fas fa-lg ${
                    dialogTypeIconEnum[dialog.type]
                  } mx-3` }
                  title={ dialogTypeLabelEnum[dialog.type] }></span>
            </h5>
            <h1 className='font-weight-lighter mb-5'>
              { dialog.title }</h1>
            {
              page.content()
            }
          </div>
          {
            page.interactors
              && page.interactors.length > 0
              && (
                <Interactors dialogId={ dialog.id }
                    pageIndex={ dialog.page }
                    interactors={ page.interactors } />
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