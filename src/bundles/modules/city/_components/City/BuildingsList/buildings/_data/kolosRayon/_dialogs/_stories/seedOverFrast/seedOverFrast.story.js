import React from 'react'
import { CITY_SERVER_ACTION_START } from '../../../../../../../../../_actions/city.actions'

export default {
  id: 'seedOverFrast',
  type: 'STORY',
  title: 'Voyage au-dessus de la FRAST',
  pages: [{
    content: () =>

      (
        <React.Fragment>
          <p>Les <b className='font-epic'>ZUMS</b> sont partis de <b className='font-epic'>TERRA</b>,</p>
          <p>La planète bleue qui orbitait il y a longtemps autour du <b className='font-epic'>SOLN</b> des origines.</p>
          <br/>
          <p>C'était la crise pour eux :</p>
          <p>Leur soif de remplir et de comprendre risquait d'engloutir le berceau de leur existence.</p>
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
          <p>Alors que les choses semblaient désespérée, une invention changea le cours de leur histoire.</p>
          <br/>
          <p>C'était le <b className='font-epic'>HOL-ONG</b> :</p>
          <p>Le réseau de conscience collective avec lequel chaque être –animal, végétal, minéral; pouvait désormais intéragir.</p>
          <p>On vit alors des fleurs s'entretenir avec les herbivores qui allaient les manger,</p>
          <p>Aussi bien que des <b className='font-epic'>ZUMS</b> communiquer avec <b className='font-epic'>TERRA</b> elle-même.</p>
          <br/>
          <p>C'est en se connectant ainsi aux besoins de ce petit tout que la planète commenca sa mutation.</p>
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
          <p>La surface de <b className='font-epic'>TERRA</b>, les océans compris, se couvrit d'une forêt gigantesque.</p>
          <p>Les arbres dépassaient de l'atomosphère,</p>
          <p>Leurs racines touchaient au noyau de la planète.</p>
          <br/>
          <p>La croûte se fractura, les débris s'envolèrent couverts d'une végétation ultra-dense.</p>
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
          <p>Bientôt il n'y eut plus de <b className='font-epic'>TERRA</b> ...</p>
          <br/>
          <p>Il y eut la <b className='font-epic'>FRAST</b>.</p>
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
          <p>Cette poussière verdoyante s'étendit et finit par recouvrir toutes les planètes autour du <b className='font-epic'>SOLN</b>.</p>
          <br/>
          <p>Chacune d'elles suivit un processus différent, mais la finalité fut la même :</p>
          <p>Elles disparurent, et il n'en résultât que la <b className='font-epic'>FRAST</b>.</p>
        </React.Fragment>
      ),
    menu: [
      'next',
      'previous'
    ]
  },
  {
    open: dialog => {

      dialog.status === 'NEW'
        && window.__STORE__
          .dispatch({
            type: CITY_SERVER_ACTION_START,
            actionType: 'seedOverFrastStoryRead'
          })
    },
    content: () =>

      (
        <React.Fragment>
          <p>Puis, la <b className='font-epic'>FRAST</b> entoura le <b className='font-epic'>SOLN</b>.</p>
          <br/>
          <p>Grâce à sa colossale puissance, les graines de la <b className='font-epic'>FRAST</b> furent dispersées à travers la galaxie.</p>
          <p>A un moment, la forêt galatique devint la forêt univers.</p>
        </React.Fragment>
      ),
    menu: [
      'previous'
    ]
  },
  {
    content: () =>

      (
        <React.Fragment>
          <p>C'est aux frontières de la <b className='font-epic'>FRAST</b> que voyage maintenant la <b>graine intrépide</b> des <b className='font-epic'>KOLOS</b>.</p>
          <br/>
          <p>Et c'est pour répendre la conscience jusqu'aux frontières de l'infini que les <b className='font-epic'>ZUMS</b> et toute la vie continuent d'avancer vers l'inerte et l'inconnu.</p>
          <br/>
          <p>Pour répendre une conscience aux désirs de totalité,</p>
          <p>Une conscience nommée <b className='font-epic'>HOL-ONG</b>.</p>
        </React.Fragment>
      ),
    menu: [
      'next',
      'previous'
    ]
  }]
}