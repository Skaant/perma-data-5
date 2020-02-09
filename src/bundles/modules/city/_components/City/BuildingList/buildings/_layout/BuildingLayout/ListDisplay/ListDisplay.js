import React from 'react'
import { CITY_DIALOG_MODAL_OPEN } from '../../../../../../../_actions/city.actions';

const dialogsTypeIcon = {
  QUEST: 'fas fa-flag',
  STORY: 'fab fa-readme'
}

export default ({ list }) =>

  list
    /** ORDERING #1 : setting scores */
    .map(item => {

      let score = 0

      switch (
        `${ item.type }${ item.status }`) {
        
        case 'QUEST_CURRENT' :

          score = 1
      
        case 'DIALOG_CURRENT' :

          score - 2
    
        case 'DIALOG_NEW' :

          score - 4

        case 'QUEST_NEW' :

          score - 5

        case 'QUEST_VALIDATED' :

          score - 10
      }

      return {
        ...item,
        score
      }
    })
    /** ORDERING #2 : comparing scores */
    .sort((
      { 
        score: aScore
      }, {
        score: bScore
      }) => {

      bScore - aScore
    })
    .map(item => (
      <button key={ item.id }
          className={ `list-group-item font-weight-light text-left pr-3 ${
            // HIGHLIGHTS COLOR for !opened || valid
            item.status !== 'CURRENT'
              ? 'btn-danger'
              
              : ''
          }` }
          style={ {
            letterSpacing: '0.8px',
            fontSize: '14px'
          } }
          onClick={
            () => {

              // ► TO REWORK
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
            item.status === 'CURRENT'
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