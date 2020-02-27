import React from 'react'
import { CITY_SERVER_ACTION_START } from '../../../../../../../../../_actions/city.actions'
import seedOverFrastStory from '../../_stories/seedOverFrast/seedOverFrast.story'
import kolosXan from '../../_stories/kolosXan/kolosXan.story'

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
          <p>En plus d'être une application fonctionnelle, <b className='font-epic'>PERMA-DATA</b> est dôté d'un univers créatif très riche, avec une histoire fantasmée sur des millions de milliards d'années.</p>
          <p>Parallèllement à l'acquisition de nouveaux outils, tout au long de votre progression, des fragments de ce récit vous seront révélés.</p>
          <br/>
          <p>Voyez, dès lors que vous aurez fini de prendre connaissance de cette quête :</p>
          <p>Sur la <b>graine intrépide</b>, deux nouvelles histoires seront disponibles !</p>
        </React.Fragment>
      ),
    menu: [
      'next',
      'previous'
    ]
  }, 
  {
    content: () =>

      (
        <React.Fragment>
          <p>D'abord, avec <i>"{ seedOverFrastStory.title }"</i>, vous survolerez l'immense forêt de données de <b className='font-epic'>PERMA-DATA</b>.</p>
          <p>C'est comme un amas organique d'informations qu'est conçu l'application et sa base de connaissances.</p>
          <br/>
          <p>Ensuite, dans <i>"{ kolosXanStory.title }"</i>, vous entrerez en contact avec le dirigeant de la tribu des <b className='font-epic'>KOLOS</b>.</p>
          <p>Premiers de tous, les <b className='font-epic'>KOLOS</b> vous aideront à développer les autres tribus ...</p>
          <p>C'est à dire obtenir de nouvelles fonctionnalités.</p>
          <br/>
          <p>Oui vraiment, ces deux éléments sont très important pour comprendre les tenants et les aboutissants de l'application.</p>
        </React.Fragment>
      ),
    menu: [
      'next',
      'previous'
    ]
  },
  {
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