import React from 'react'
import { CITY_DIALOG_MODAL_OPEN } from '../../../../../../_actions/city.actions';

export default ({
  title,
  list
}) => (
  <ul className='list-group'>
    <h4 className='card-title text-uppercase font-weight-light text-left pt-4 pb-3 px-4 list-group-item'>
      { title }
    </h4>
    {
      list
        .map(item => (
          <button key={ item.id }
              className={ `list-group-item font-weight-light text-left ${
                item.opened
                  ? ''
                  : 'btn-danger'
              }` }
              style={ {
                letterSpacing: '0.8px',
                fontSize: '14px'
              } }
              onClick={
                () => {

                  if (item.type !== 'passive') {

                    window.__STORE__
                      .dispatch({
                        type: CITY_DIALOG_MODAL_OPEN,
                        dialog: item,
                        history: window.__STORE__
                          .getState()
                          .city
                          .history
                      })
                  }
                }
              }>
            { item.title }
          </button>
        ))
    }
  </ul>
)