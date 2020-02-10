import React from 'react'
import { DIALOG_MODAL_CLOSE } from '../../_actions/dialog.actions';
import Menu from './Menu/Menu';

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
          <div className='modal-header border-0'>
            <h5 className='modal-title h2 font-weight-light text-green mt-2'>
              {
                dialog.type === 'QUEST'
                  && (
                    <span className='fas fa-glass-martini mx-3'
                        title='Quête'></span>
                  )
              }
              {
                dialog.type === 'story'
                  && (
                    <span className='fab fa-readme mx-3'
                        title='Histoire'></span>
                  )
              }
            </h5>
            <button type='button'
                className='close'
                onClick={ closeModal }>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
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
          <div className='modal-body p-5'
              style={ {
                fontSize: '1.2rem'
              } }>
            <h1 className='font-weight-lighter mb-5'>
              { dialog.title }</h1>
            {
              page.content()
            }
          </div>
          {
            page.menu
              && page.menu.length > 0
              && (
                <Menu type='main'
                    dialogId={ dialog.id }
                    pageIndex={ dialog.page }
                    menu={ page.menu }/>
              )
          }
        </div>
      </div>
    </div>
  )
}