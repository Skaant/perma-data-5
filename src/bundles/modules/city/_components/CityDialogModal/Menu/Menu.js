import React from 'react'
import { CITY_DIALOG_MODAL_PAGE_CHANGE, CITY_DIALOG_MODAL_CLOSE } from '../../../_actions/city.actions';

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
                          ? 'btn-outline-danger'
                          : 'btn-outline-white'
                      }` }
                      onClick={
                        () =>
                          window.__STORE__
                            .dispatch({
                              type: CITY_DIALOG_MODAL_CLOSE
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
                              type: CITY_DIALOG_MODAL_PAGE_CHANGE,
                              dialog: {
                                id: dialogId
                              },
                              newPage: pageIndex - 1
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
                                type: CITY_DIALOG_MODAL_PAGE_CHANGE,
                                dialog: {
                                  id: dialogId
                                },
                                newPage: pageIndex + 1
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
                        ? 'btn-danger text-white'
                        : 'btn-white text-danger'
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