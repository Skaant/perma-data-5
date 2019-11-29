import React from 'react'
import BuildingLayout from '../_layout/BuildingLayout/BuildingLayout'
import kolosSeedIntroQuest from './_dialogs/_kolos-seed-intro.quest';
import organicBuildingsDialog from './_dialogs/_organic-buildings.dialog';

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
                      kolosSeedIntroQuest
                    )
                  ]
                : []
      ),
      ...(
        dialogs
          && dialogs[
            'organic-buildings']
              ? [
                Object.assign(
                  {},
                  dialogs[
                    'organic-buildings'],
                  organicBuildingsDialog
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
                  kolosSeedIntroQuest
                )
              ]
              : []
      )
    ] }/>
)