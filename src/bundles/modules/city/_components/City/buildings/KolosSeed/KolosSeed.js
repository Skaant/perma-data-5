import React from 'react'
import BuildingLayout from '../_layout/BuildingLayout/BuildingLayout'
import kolosSeedIntroQuest from './_dialogs/kolos-seed-intro.quest';
import organicBuildingsDialog from './_dialogs/organic-buildings.dialog';

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
            .new 
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
      Object.assign(
        {},
        dialogs[
          'organic-buildings'],
        organicBuildingsDialog
      ),
      ...(
        quests[
          'kolos-seed-intro']
            .new 
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