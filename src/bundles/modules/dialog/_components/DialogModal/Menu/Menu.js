import React from 'react'
import { DIALOG_MODAL_CLOSE, DIALOG_PAGE_PREVIOUS, DIALOG_PAGE_NEXT } from '../../../_actions/dialog.actions';

export default ({
  dialogId,
  pageIndex,
  menu
}) => (
  <div className='modal-footer rounded-0 border-0 bg-white justify-content-start'>
    {
      menu
        .filter(item =>
          
          !item.display
            || item.display()
        )
        .map(item => {

          if (typeof item === 'string') {

            switch (item) {

              case 'close':

                return (
                  <button key={ dialogId
                      + '#'
                      + pageIndex
                      + '::'
                      + item }
                      type='button'
                      className='btn btn-outline-green mr-2'
                      onClick={
                        () =>
                          window.__STORE__
                            .dispatch({
                              type: DIALOG_MODAL_CLOSE
                            })}>
                    Fermer
                  </button>
                )

              case 'previous':

                return (
                  <button key={  dialogId
                    + '#'
                    + pageIndex
                    + '::'
                    + item  }
                      type='button'
                      className='btn btn-outline-green mr-2 btn-lg'
                      onClick={
                        () =>
                          window.__STORE__
                            .dispatch({
                              type: DIALOG_PAGE_PREVIOUS,
                              dialog: {
                                id: dialogId
                              }
                            })}>
                    Précédent
                  </button>
                )

                case 'next':
  
                  return (
                    <button key={  dialogId
                      + '#'
                      + pageIndex
                      + '::'
                      + item  }
                        type='button'
                        className='btn btn-green btn-lg mr-2'
                        onClick={
                          () =>
                            window.__STORE__
                              .dispatch({
                                type: DIALOG_PAGE_NEXT,
                                dialog: {
                                  id: dialogId
                                }
                              })}>
                      Suivant
                    </button>
                  )
            }
          } else {
            
            return (
              <button key={ dialogId
                    + '#'
                    + pageIndex
                    + ':'
                    + item.label }
                  type='button'
                  className={ `btn bt-lg mr-2 ${
                      item.outline
                        ? 'btn-outline-green'
                        : 'btn-green'
                    }` }
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