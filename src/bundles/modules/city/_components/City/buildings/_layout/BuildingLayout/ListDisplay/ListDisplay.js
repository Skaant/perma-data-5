import React from 'react'
import { CITY_DIALOG_MODAL_OPEN } from '../../../../../../../homeAuth/_actions/homeAuth.actionsAuth.actions';

export default ({ list }) => (
  <ul className='list-group p-2'>
    {
      list
        .map(item => (
          <button key={ item.key }
              className={ `list-group-item font-weight-light text-left ${
                item.new
                  ? 'btn-danger'
                  : ''
              }` }
              onClick={
                () => {

                  if (item.type !== 'passive') {

                    window.__STORE__
                      .dispatch({
                        type: CITY_DIALOG_MODAL_OPEN,
                        dialogType: item.type,
                        key: item.dialogType
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