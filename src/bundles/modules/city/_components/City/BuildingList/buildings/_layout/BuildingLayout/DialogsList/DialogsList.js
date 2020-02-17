import React from 'react'
import { DIALOG_MODAL_OPEN } from '../../../../../../../../dialog/_actions/dialog.actions';
import dialogTypeLabelEnum from '../../../../../../../../_enums/dialogTypeLabel/dialogTypeLabel.enum';
import dialogTypeIconEnum from '../../../../../../../../_enums/dialogTypeIcon/dialogTypeIcon.enum';
import dialogStatusLabelEnum from '../../../../../../../../_enums/dialogStatusLabel/dialogStatusLabel.enum';
import dialogStatusIconEnum from '../../../../../../../../_enums/dialogStatusIcon/dialogStatusIcon.enum';

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
              ? 'btn-green text-white'
              
              : ''
          }` }
          title={ 
            dialogTypeLabelEnum[item.type]
              + (dialogStatusLabelEnum[item.status]
                ? ' ('
                  + dialogStatusLabelEnum[item.status]
                  + ')'
  
                : '') }
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
                            .dialog
                            .history[
                              item.id]
                                .page
                          : (item.status === 'VALIDATED'
                            ? (item.pages.length - 1)

                            : 0)
                      }
                    )
                  })
              }
            }
          }>
        {
          item.status !== 'CURRENT'
            && (
              <span className={ 
                    `fas ${
                      dialogStatusIconEnum[item.status]
                    } mr-1`
                  }
                  title={
                    dialogStatusLabelEnum[item.status][0]
                      .toUpperCase()
                      + dialogStatusLabelEnum[item.status]
                        .slice(1) }></span>
            )
        }
        <span className={ `${
          // pick the right icon for dialog type
          dialogTypeIconEnum[item.type]
        } ${
          // HIGHLIGHT COLORS for 'NEW' or 'VALIDATED'
          item.status === 'CURRENT'
            ? 'text-green'

            : 'text-white'
        }` }
            title={ dialogTypeLabelEnum[item.type] }
            aria-hidden='true'></span>
        <span className='mb-0 mt-1 ml-2'>
          { item.title }</span>
      </button>
    ))