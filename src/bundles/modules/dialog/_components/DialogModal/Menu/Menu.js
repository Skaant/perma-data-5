import React from 'react'
import { DIALOG_MODAL_PAGE_CHANGE, DIALOG_MODAL_CLOSE, DIALOG_PAGE_PREVIOUS, DIALOG_PAGE_NEXT } from '../../../_actions/dialog.actions';

export default ({
  type,
  dialogId,
  pageIndex,
  menu
}) => (
  <div className={ `modal-footer rounded-0 border-0 ${
    type === 'main'
      ? 'bg-white'
      : 'bg-danger'
  } type-${ type }` }>
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
                      className={ `btn ${
                        type === 'main'
                          ? 'btn-outline-green'
                          : 'btn-outline-white'
                      }` }
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
                      className={ `btn ${
                        type === 'main'
                          ? 'btn-outline-danger'
                          : 'btn-outline-white'
                      }` }
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
                        className={ `btn ${
                          type === 'main'
                            ? 'btn-danger'
                            : 'btn-white text-danger'
                        }` }
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
                  className={ `btn ${
                      type === 'main'
                        ? 'btn-green text-white'
                        : 'btn-white text-green'
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