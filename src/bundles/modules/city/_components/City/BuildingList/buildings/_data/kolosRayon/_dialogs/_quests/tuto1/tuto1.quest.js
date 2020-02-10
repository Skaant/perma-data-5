import React from 'react'

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
            <b>plus d'informations sur les pages plantes</b>&nbsp;
            que vous visitez !
          </p>
        </React.Fragment>
      ),
    menu: [
      'next'
    ]
  }, 
  {
    open: () =>

      console.log('dispatch server action'),
    content: () =>

      (
        <React.Fragment>
          <p></p>
          <p>
            Partez maintenant,&nbsp;
            <b>décrochez la graine !</b>
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