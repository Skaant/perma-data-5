import React from 'react'
import { CITY_SERVER_ACTION_START } from '../../../../../../../../../_actions/city.actions'

export default {
  id: 'tuto2Quest',
  type: 'QUEST',
  title: 'Juste avant l\'atterissage',
  pages: [{
    content: () =>

      (
        <React.Fragment>
          <p>Ca y est, elle est partie !</p>
          <p>La <b>graine intrépide</b> a pris le chemin de l'inconnu.</p>
          <br/>
          <p>Quand trouvera-t'elle son point de chute ?</p>
        </React.Fragment>
      ),
    menu: [
      'next'
    ]
  }, 
  {
    content: () =>

      (
        <React.Fragment>
          <p><b className='font-epic'>PERMA-DATA</b> est un univers très riche, avec une histoire qui s'étend sur des milliards d'années.</p>
          <p>Parallèllement à l'acquisition de nouvelles fonctionnalités, des fragments de ce récit vous seront délivrés.</p>
          <p>Voyez : sur la <b>graine intrépide</b>, déjà, deux nouveaux dialogues sont disponibles.</p>
          <br/>
          <p>Avant d'attérir <b>et pour pouvoir faire éclore votre</b> <b className='font-epic'>MÉTA-CITÉ</b>, vous devrez consulter ces deux éléments.</p>
          <br/>
          <p>Une fois la <b>graine</b> éclose, ces histoires seront toujours consultables dans les archives.</p>
        </React.Fragment>
      )
    ,
    interactors: dialog =>
    
      dialog.status === 'VALIDATED'
        ? [
          {
            label: 'Faire éclore la graine',
            click: () =>

              console.log('dispatch city actions')
          }
        ]
        
        : [],
    menu: [
      'previous'
    ]
  }]
}