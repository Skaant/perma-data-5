import React from 'react'
import { DIALOG_PAGE_NEXT } from '../../../../../../../../../../dialog/_actions/dialog.actions'

export default {
  id: 'tuto1Quest',
  type: 'QUEST',
  title: 'Le grand départ',
  pages: [{
    content: () =>

      (
        <React.Fragment>
          <p>Pour chercher, il faut les outils.</p>
          <p>
            Dans&nbsp;
            <b className='text-epic'>PERMA-DATA</b>
            , chaque gamme d'outils est représentée par une tribu de&nbsp;
            <b className='text-epic'>ZUMS</b>
            ,
            <br/>
            ces êtres fantastiques qui sont allés au-delà des limites de l'univers et sont revenus.</p>
          <p>
            Les&nbsp;
            <b className='text-epic'>KOLOS</b>
            , ceux qui voyagent à travers la&nbsp;
            <b className='text-epic'>KOLOS-SEED</b>
            , ont des outils pour superviser et découvrir des améliorations pour toutes les autres tribus.
          </p>
          <p>
            Les&nbsp;
            <b className='text-epic'>MIKORIS</b>
            , que vous rencontrerez bientôt, sont experts dans l'art d'utiliser la fonction de recherche.
          </p>
          <p>
            Encore, les&nbsp;
            <b className='text-epic'>NOVS</b>
            , qui vous seront également bientôt révélés, permettent de trouver encore d'avantage d'informations sur les plantes !
          </p>
          <p>
            Partez maintenant,&nbsp;
            <b>décrochez la graine !</b>
          </p>
        </React.Fragment>
      ),
    menu: [
      'close',
      {
        type: 'main',
        label: 'Décrocher la graine'
      }
    ]
  }]
}