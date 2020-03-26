import React from 'react'
import { CITY_SERVER_ACTION_START } from '../../../../../../../../../_actions/city.actions'

export default {
  id: 'kolosXan',
  type: 'STORY',
  title: 'Rencontre avec le KOLOS-XAN',
  pages: [{
    content: () =>

      (
        <React.Fragment>
          <p>Bonjour et bienvenue à bord de la <b>graine intrépide</b>, je suis le <b className='font-epic'>KOLOS-XAN</b> et je suis chargé du bon déroulement de cette mission de conquête spatiale.</p>
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
          <p>La <b className='font-epic'>FRAST</b> est immense, mais l'univers encore plus.</p>
          <p>C'est pour approcher la première du second, pour en réduire la différence, que nous avons quitté nos foyers.</p>
          <br/>
          <p>La <b className='font-epic'>FRAST</b> est bien là où nous allons.</p>
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
          <p>A l'endroit où nous tomberons, connu ou non de la civilisation, nous implanterons notre système.</p>
          <br/>
          <p>Comme le totem autour duquel se réunissent les membres de la communauté,</p>
          <p>Les autres tribus <b className='font-epic'>ZUMS</b> se développeront autour de notre <b className='font-epic'>RAYÖN</b>, avant de créer le leur.</p>
          <p>De là, notre population grandira et, un jour, nous repartirons pousser encore plus haut.</p>
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
          <p>Le <b className='font-epic'>KOLOS-RAYÖN</b> a cette fonction pour la communauté :</p>
          <p>Il permet de diriger et débloquer l'accès à de nouvelles tribus et de nouveaux bâtiments.</p>
          <br/>
          <p>Par exemple, dès l'aterrissage et l'écolosion, des <b className='font-epic'>ZUMS</b> choisiront de se spécialiser pour fonder les tribus primordiales :</p>
          <br/>
          <p>Les <b className='font-epic'>KIMORIS</b>, érudits-indexeurs, pour se connecter au réseau de données et trouver les plantes qui nous intéressent.</p>
          <p>Les <b className='font-epic'>NOVS</b>, aventuriers-explorateurs, pour augmenter la quantité de données affichées sur une plante.</p>
          <p>Enfin, les <b className='font-epic'>ARKEOS</b>, gardiens de la mémoire, pour retrouver les morceaux d'histoire et les termes employés.</p>
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
            actionType: 'kolosXanStoryRead'
          })
    },
    content: () =>

      (
        <React.Fragment>
          <p>Je vous dit le nécessaire,</p>
          <p>Mais nous reparlerons bientôt j'en suis sûr.</p>
          <br/>
          <p>Nous n'attendons plus que votre signal pour déployer notre technologie.</p>
        </React.Fragment>
      ),
    menu: [
      'previous'
    ]
  }]
}