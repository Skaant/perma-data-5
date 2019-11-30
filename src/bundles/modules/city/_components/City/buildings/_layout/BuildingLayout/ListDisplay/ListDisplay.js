import React from 'react'
import { CITY_DIALOG_MODAL_OPEN } from '../../../../../../_actions/city.actions';

export default ({ list }) => (
  <ul className='list-group p-2'>
    {
      list
        .map(item => (
          <button key={ item.id }
              className={ `list-group-item font-weight-light text-left ${
                item.opened
                  ? ''
                  : 'btn-danger'
              }` }
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