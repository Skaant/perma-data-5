import React from 'react'
import { DIALOG_MODAL_OPEN } from '../../../../../../../../dialog/_actions/dialog.actions';
import dialogTypeLabelEnum from '../../../../../../../../_enums/dialogTypeLabel/dialogTypeLabel.enum';
import dialogTypeIconEnum from '../../../../../../../../_enums/dialogTypeIcon/dialogTypeIcon.enum';
import dialogStatusLabelEnum from '../../../../../../../../_enums/dialogStatusLabel/dialogStatusLabel.enum';
import dialogStatusIconEnum from '../../../../../../../../_enums/dialogStatusIcon/dialogStatusIcon.enum';

export default ({
  buildingId,
  list
}) =>

  list
    /** ORDERING #1 : computing start page & display score */
    .map(item => {

      let score = 0

      switch (
        `${ item.type }_${ item.status }`) {
        
        case 'QUEST_READ' :

          score = 1
          break
      
        case 'STORY_READ' :

          score = 2
          break
    
        case 'STORY_NEW' :

          score = 4
          break

        case 'QUEST_NEW' :

          score = 5
          break

        case 'QUEST_VALIDATED' :

          score = 10
          break
      }

      return {
        ...item,
        score,
        page: item.status !== 'NEW'
          ? (item.pages.length - 1)

          : 0
      }
    })
    /** ORDERING #2 : comparing scores */
    .sort((
      { 
        score: aScore
      }, {
        score: bScore
      }) =>

        bScore - aScore
    )
    // TODO : rename `item` to `dialog`
    .map(item => (
      <button key={ item.id }
          className={ `list-group-item font-weight-light text-left pr-3 py-3 rounded-0 ${
            // HIGHLIGHTS COLOR for !opened || valid
            item.status !== 'READ'
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
            () =>

              window.__STORE__
                .dispatch({
                  type: DIALOG_MODAL_OPEN,
                  dialog: {
                    buildingId,
                    ...item,
                  }
                })
          }>
        {
          item.status !== 'READ'
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
          item.status === 'READ'
            ? 'text-green'

            : 'text-white'
        } mr-2` }
            title={ dialogTypeLabelEnum[item.type] }
            aria-hidden='true'></span>
        <span className='mb-0 mt-1'>
          { item.title }</span>
      </button>
    ))