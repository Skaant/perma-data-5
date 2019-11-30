import React from 'react'
import BuildingLayout from '../_layout/BuildingLayout/BuildingLayout'
import _kolosSeedIntroQuest from './_dialogs/_kolos-seed-intro.quest';
import _kolosTrighbPresentationDialog from './_dialogs/_kolos-trighb-presentation.dialog';

export default ({
  id,
  quests,
  dialogs,
  ...props
}) => (
  <BuildingLayout id={ id }
    list={ [
      ...(
        quests[
          'kolos-seed-intro']
            .opened 
              === true
                ? [
                    Object.assign(
                      {},
                      quests[
                        'kolos-seed-intro'],
                      _kolosSeedIntroQuest
                    )
                  ]
                : []
      ),
      ...(
        dialogs
          && dialogs[
            'kolos-trighb-presentation']
              ? [
                Object.assign(
                  {},
                  dialogs[
                    'kolos-trighb-presentation'],
                    _kolosTrighbPresentationDialog
                )
              ]
              : []
        ),
      ...(
        quests[
          'kolos-seed-intro']
            .opened 
              === false
                ? [
                  Object.assign(
                  {},
                  quests[
                    'kolos-seed-intro'],
                  _kolosSeedIntroQuest
                )
              ]
              : []
      )
    ] }/>
)