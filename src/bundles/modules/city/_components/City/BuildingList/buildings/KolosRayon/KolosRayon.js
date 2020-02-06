import React from 'react'
import BuildingLayout from '../_layout/BuildingLayout/BuildingLayout'

export default ({
  id,
  quests,
  stories
}) => (
  <BuildingLayout id={ id }
      data={ _data }
      list={ [
        ...(
          (
            quests['intro']
              .opened === false
            || quests['intro']
              .valid === true)
              ? [
                  Object.assign(
                    {},
                    quests['intro'],
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
          (quests[
            'kolos-rayon-intro']
              .opened 
                === true
            && quests[
              'kolos-rayon-intro']
                .valid 
                  === false)
                ? [
                    Object.assign(
                    {},
                    quests[
                      'kolos-rayon-intro'],
                    _kolosRayonIntroQuest
                  )
                ]
                : []
        )
      ] }/>
)