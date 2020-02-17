import React from 'react'
import { CITY_SERVER_ACTION_START } from '../../../../../../../../../_actions/city.actions'

export default {
  id: 'tuto1Quest',
  type: 'QUEST',
  title: 'Le grand départ',
  pages: [{
    content: () =>

      (
        <React.Fragment>
          <p>Pour travailler, il faut les bons outils.</p>
          <p>
            Dans&nbsp;
            <b className='text-epic'>PERMA-DATA</b>
            ,&nbsp;
            <b>chaque gamme d'outils est représentée par une tribu de</b>&nbsp;
            <b className='text-epic'>ZUMS</b>&nbsp;
            —&nbsp;ces êtres fantastiques qui sont allés au-delà des limites de l'univers et sont revenus.</p>
          <p>
            La tribu des&nbsp;
            <b className='text-epic'>KOLOS</b>
            , ceux qui voyagent dans la&nbsp;
            <b>graine intrépide</b>
            , ont des outils pour superviser et découvrir des améliorations pour toutes les autres tribus.
          </p>
          <p>
            Les&nbsp;
            <b className='text-epic'>KIMORIS</b>
            , que vous rencontrerez bientôt, sont experts dans l'art d'utiliser la fonction de recherche.
          </p>
          <p>
            Encore, les&nbsp;
            <b className='text-epic'>NOVS</b>
            , qui vous seront également bientôt révélés, permettent de trouver encore&nbsp;
            <b>plus d'informations sur les pages-plantes</b>&nbsp;
            que vous visitez !
          </p>
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
          <p>
            Mais regardez, voilà comment s'organise le voyage des&nbsp;
            <b className='font-epic'>KOLOS</b>
            :
          </p>
          <p>
            Lorsqu'une région est devenue trop "facile", certains, parmis les plus courageux des&nbsp;
            <b className='font-epic'>ZUMS</b>
            , décident de partir pour inoculer d'autres terres.
          </p>
          <p>
            Bien qu'ils ignorent tout de leur future destination, ils sont confiant.
          </p>
          <p>
            Ils savent qu'ils ne peuvent tomber que dans la&nbsp;
            <b className='font-epic'>FRAST</b>
            –&nbsp;la forêt-univers, le terrain d'expérimentation de la grande conscience collective.
          </p>
          <img src='public/images/dialogs/kolo-seed-intro.jpg'
              className='w-100 mb-2 mt-4'/>
          <p className='small text-muted text-right font-weight-light mb-5'>
            Des ZUMS devant des graines intrépides en fin de croissance, peu avant le grand départ.
          </p>
          <p>
            La tribu des&nbsp;
            <b className='font-epic'>KOLOS</b>&nbsp;
            attend patiemment que ses&nbsp;
            <b>graines intrépides</b>&nbsp;
            arrivent à maturité.
          </p>
          <p>
            Quand elles sont prêtes, ils n'hésitent pas à décrocher ces vaisseaux du tronc qui les a vu naître.
          </p>
          <p>
            <b>C'est le grand départ.</b>
          </p>
        </React.Fragment>
      )
    ,
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
            actionType: 'tuto1QuestRead'
          })
    },
    content: () =>

      (
        <React.Fragment>
          <p>
            Le moment est venu pour vous.
          </p>
          <p>
            Lancez-vous sans plus attendre dans l'aventure&nbsp;
            <b className='font-epic'>PERMA-DATA</b>&nbsp;
            et découvrez les&nbsp;
            <b>nombreuses fonctionnalités de l'application</b>&nbsp;
            à mesure que se développent vos tribus&nbsp;
            <b className='font-epic'>ZUMS</b>.
          </p>
          <p>
            Allez-y, que pousse cette civilisation du futur !
          </p>
        </React.Fragment>
      ),
    interactors: [
      {
        label: 'Décrocher la graine',
        click: () =>

          console.log('dispatch city actions')
      }
    ],
    menu: [
      'previous'
    ]
  }]
}