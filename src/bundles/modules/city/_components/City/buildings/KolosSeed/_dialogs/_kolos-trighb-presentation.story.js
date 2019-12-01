import { CITY_SERVER_ACTION_START, CITY_SERVER_ACTION_SUCCESS } from "../../../../../_actions/city.actions";
import { MAIN_ERROR_THROWN } from "../../../../../../main/_actions/main.actions";

export default {
  id: 'kolos-trighb-presentation',
  type: 'story',
  title: 'Bienvenue à la tribu KOLOS',
  image: 'kolos-trighb-presentation.jpg',
  pages: [{
    text: [
      'l\'univers',
      'pas si infini',
      null,
      null,
      'depuis des éons et des éons',
      'les KOLOS sont à la tête de la flotte des ZUMS et,',
      'dans leur voyage contemplatif,',
      'se réjouissent de parfois trouver matière spatiale',
      null,
      null,
      'lancés au delà de la vitesse de la lumière',
      'ils tentent de rejoindre !..',
      null,
      'les bords de',
      'cet univers'
    ],
    altMenu: [
      'close',
      'next'
    ]
  }, {
    text: [
      'dans la société de super-singes que',
      'sont les ZUMS,',
      null,
      'l\'installation des KOLOS sur une planète,',
      'un asteroïde ou encore un nuage de gaz,',
      'mène à célébration et',
      'à l\'installation de toutes les autres tribus'
    ],
    altMenu: [
      'close',
      'previous',
      'next'
    ]
  }, {
    text: [
      'pouet'
    ],
    tuto: [
      'Pour rendre validable la quête "Le grand départ", cliquez sur "histoire lue".'
    ],
    altMenu: [
      'close',
      'previous',
      {
        label: 'histoire lue',
        display: () =>

          // checking if the quest has kept in its prior state of `!opened`
          window.__STORE__
            .getState()
            .auth
            .user
            .buildings
              .find(building => 
                
                building.key === 'kolos-seed')
                  .stories[
                    'kolos-trighb-presentation']
                      .opened === false,
        click: e => {

          e.preventDefault()

          const action = 'open-kolos-trighb-presentation-story'

          window.__STORE__
            .dispatch({
              type: CITY_SERVER_ACTION_START,
              action
            })
          
          $.ajax(
            '/api/actions',
            {
              method: 'PUT',
              data: { action }
            }
          )
            .done(
              ({
                buildings
              } = {
                buildings: {}
              }) =>
                window.__STORE__
                  .dispatch({
                    type: CITY_SERVER_ACTION_SUCCESS,
                    action,
                    buildings
                  }))

            .fail(
              ({
                responseJSON: {
                  error
                }
              }) =>
                window.__STORE__
                  .dispatch({
                    type: MAIN_ERROR_THROWN,
                    error
                  })
            )
        }
      }
    ]
  }]
}