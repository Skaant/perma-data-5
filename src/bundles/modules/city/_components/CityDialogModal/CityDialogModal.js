import React from 'react'
import { CITY_DIALOG_MODAL_CLOSE } from '../../_actions/city.actions';

export default ({ dialog }) => {  

  const closeModal = () =>
    window.__STORE__
      .dispatch({
        type: CITY_DIALOG_MODAL_CLOSE
      })

  const historyPageIndex = window.__STORE__
    .getState()
    .city
    .history[
      dialog.id]
        .page

  const page = dialog.pages[
    historyPageIndex]

  return (
    <div id='city-dialog-modal'
        className='modal fade right show'>
      <div className='modal-dialog modal-dialog-centered animated zoomInUp'
          role='document'>
        <div className='modal-content'>
          <div className='modal-header bg-danger text-white'>
            <h5 className='modal-title'>
              {
                dialog.type === 'quest' && 'Quête : '
              }
              {
                dialog.type === 'dialog' && 'Dialogue : '
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
            page.text && (
              <div className='modal-body'>
                <div className='w-75 mx-auto'>
                  { 
                    page.text
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
            page.menu
              && page.menu.length > 0
              && (
                <div className='modal-footer'>
                  {
                    page.menu
                      .map(item => {

                        if (typeof item === 'string') {

                          switch (item) {

                            case 'close':

                              return (
                                <button key={ item }
                                    type='button'
                                    className='btn btn-outline-danger'
                                    onClick={
                                      () =>
                                        window.__STORE__
                                          .dispatch({
                                            type: CITY_DIALOG_MODAL_CLOSE
                                          })}>
                                  Fermer
                                </button>
                              )
                          }
                        } else {
                          
                          return (
                            <button key={ dialog.id
                              + '#'
                              + historyPageIndex
                              + ':'
                              + item.label }
                                type='button'
                                className='btn btn-danger'
                                onClick={ e =>
                                  item.click
                                    && item.click(e) }>
                              { item.label }
                            </button>
                          )
                        }
                      })
                  }
                </div>
              )
          }
        </div>
      </div>
    </div>
  )
}