import React from 'react'
import BuildingLayout from '../../_layout/BuildingLayout/BuildingLayout'

export default ({
  id,
  quests,
  stories,
  ...data
}) => (
  <BuildingLayout id={ id }
      data={ data }
      list={ [
        ...(
          (quests['tuto1Quest']
            && (quests['tuto1Quest']
              .opened === false
            || quests['tuto1Quest']
              .valid === true))
              ? [
                  Object.assign(
                    {},
                    quests['tuto1Quest'],
                    _kolosRayonIntroQuest
                  )
                ]
              
              : []
        ),
        ...(
          stories
            && stories[
              'kolos-trighb-presentation']
                ? [
                  Object.assign(
                    {},
                    stories[
                      'kolos-trighb-presentation'],
                      _kolosTrighbPresentationStory
                  )
                ]
                : []
          ),
        ...(
          (quests['tuto1Quest']
            && quests['tuto1Quest']
              .opened 
                === true
            && quests['tuto1Quest']
              .valid 
                === false)
              ? [
                  Object.assign(
                  {},
                  quests[
                    'tuto1Quest'],
                  _kolosRayonIntroQuest
                )
              ]
              : []
        )
      ] }/>
)