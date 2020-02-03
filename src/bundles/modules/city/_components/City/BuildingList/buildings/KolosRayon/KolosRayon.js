import React from 'react'
import BuildingLayout from '../_layout/BuildingLayout/BuildingLayout'
import _kolosRayonIntroQuest from './_dialogs/_kolos-rayon-intro.quest';
import _kolosTrighbPresentationStory from './_dialogs/_kolos-trighb-presentation.story';
import _data from './_data/kolos-rayon.json.js'

export default ({
  id,
  quests,
  stories
}) => (
  <BuildingLayout id={ id }
      data={ _data }
      list={ [
        ...(
          (quests[
            'kolos-rayon-intro']
              .opened 
                === false
            || quests[
              'kolos-rayon-intro']
                .valid 
                  === true)
                  ? [
                      Object.assign(
                        {},
                        quests[
                          'kolos-rayon-intro'],
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