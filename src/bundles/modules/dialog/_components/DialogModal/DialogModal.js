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
          <div className='modal-header bg-danger text-white'>
            <h5 className='modal-title'>
              {
                dialog.type === 'QUEST'
                  && (
                    <span className='fas fa-glass-martini'></span>
                  )
              }
              {
                dialog.type === 'story'
                  && (
                    <span className='fab fa-readme'></span>
                  )
              }
              { dialog.title }</h5>
            <button type='button'
                className='close'
                onClick={ closeModal }>
              <span className='text-white'
                  aria-hidden='true'>&times;</span>
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
          {
            page.content()
          }
          {
            page.tuto && (
              <div className='modal-body bg-danger text-white pt-4'>
                <h6 className='text-uppercase small mt-2'>
                  tutoriel :</h6>
                <div className='w-75 mx-auto pt-3'>
                  { 
                    page.tuto
                      .map((line, index) =>
                        line
                          ? (
                            <p key={ dialog.id
                              + '#'
                              + index }>
                              { line }
                            </p>
                          )
                          : (
                            <br key={ dialog.id
                              + '#'
                              + index }/>
                          ))
                  }
                </div>
              </div>
            )
          }
          {
            page.mainMenu
              && page.mainMenu.length > 0
              && (
                <Menu type='main'
                    dialogId={ dialog.id }
                    pageIndex={ dialog.page }
                    menu={ page.mainMenu }/>
              )
          }
          {
            page.altMenu
              && page.altMenu.length > 0
              && (
                <Menu type='alt'
                    dialogId={ dialog.id }
                    pageIndex={ dialog.page }
                    menu={ page.altMenu }/>
              )
          }
        </div>
      </div>
    </div>
  )
}