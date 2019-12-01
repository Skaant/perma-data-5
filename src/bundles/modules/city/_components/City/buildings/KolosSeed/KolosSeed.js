import React from 'react'
import BuildingLayout from '../_layout/BuildingLayout/BuildingLayout'
import _kolosSeedIntroQuest from './_dialogs/_kolos-seed-intro.quest';
import _kolosTrighbPresentationStory from './_dialogs/_kolos-trighb-presentation.story';

export default ({
  id,
  quests,
  stories,
  ...props
}) => (
  <BuildingLayout id={ id }
    list={ [
      ...(
        (quests[
          'kolos-seed-intro']
            .opened 
              === false
          || quests[
            'kolos-seed-intro']
              .valid 
                === true)
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
          'kolos-seed-intro']
            .opened 
              === true
          && quests[
            'kolos-seed-intro']
              .valid 
                === false)
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