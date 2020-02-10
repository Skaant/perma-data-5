import React from 'react'
import { DIALOG_MODAL_OPEN } from '../../../../../../../../dialog/_actions/dialog.actions';

const dialogsTypeIcon = {
  QUEST: 'fas fa-glass-martini',
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
    // TODO : rename `item` to `dialog`
    .map(item => (
      <button key={ item.id }
          className={ `list-group-item font-weight-light text-left pr-3 py-3 rounded-0 ${
            // HIGHLIGHTS COLOR for !opened || valid
            item.status !== 'CURRENT'
              ? 'light-green darken-1 text-white'
              
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
                    type: DIALOG_MODAL_OPEN,
                    dialog: Object.assign(
                      {},
                      item,
                      {
                        // TODO should it be isolated ?
                        page: window.__STORE__
                          .getState()
                          .dialog
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
        {
          item.status === 'NEW'
            && (
              <span className='fas fa-exclamation-circle mr-1'></span>
            )
        }
        {
          item.status === 'VALIDATED'
            && (
              <span className='fas fa-check-circle mr-1'></span>
            )
        }
        <span className={ `${
          // pick the right icon for dialog type
          dialogsTypeIcon[
            item.type
          ]
        } ${
          // HIGHLIGHT COLORS for 'NEW' or 'VALIDATED'
          item.status === 'CURRENT'
            ? 'text-green'

            : 'text-white'
        }` }
          title={ item.type }
          aria-hidden='true'></span>
        <span className='mb-0 mt-1 ml-2'>
          { item.title }</span>
      </button>
    ))