import React from 'react'
import { CITY_DIALOG_MODAL_OPEN } from '../../../../../../_actions/city.actions';

const dialogsTypeIcon = {
  quest: 'fas fa-flag',
  story: 'fab fa-readme'
}

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
              className={ `list-group-item font-weight-light text-left pr-3 ${
                // HIGHLIGHTS COLOR for !opened || valid
                (!item.opened
                  || item.valid)
                  ? 'btn-danger'
                  : ''
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
                        dialog: Object.assign(
                          {},
                          item,
                          {
                            // TODO should it be isolated ?
                            page: window.__STORE__
                              .getState()
                              .city
                              .history[
                                item.id]
                              ? window.__STORE__
                                .getState()
                                .city
                                .history[
                                  item.id]
                                    .page
                              : 0
                          }
                        )
                      })
                  }
                }
              }>
            <span className={ `${
              // pick the right icon for dialog type
              dialogsTypeIcon[
                item.type
              ]
            } float-right ml-2 rounded-circle ${
              // HIGHLIGHT COLORS for !opened || valid
                (!item.opened
                  || item.valid)
                ? 'bg-white text-danger'
                : 'bg-danger text-white'
            }` }
              style={ {
                padding: '10px 8px 8px 8px'
              } }
              title={ item.type }
              aria-hidden='true'></span>
            <p className='mb-0 mt-1'>
              { item.title }
            </p>
          </button>
        ))
    }
  </ul>
)