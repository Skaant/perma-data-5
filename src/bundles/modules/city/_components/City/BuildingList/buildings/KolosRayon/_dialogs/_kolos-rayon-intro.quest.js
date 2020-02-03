import { CITY_SERVER_ACTION_START, CITY_SERVER_ACTION_SUCCESS } from "../../../../../../_actions/city.actions";
import { MAIN_ERROR_THROWN } from "../../../../../../../main/_actions/main.actions";

export default {
  id: 'kolos-seed-intro',
  type: 'quest',
  title: 'Le grand départ',
  image: 'kolo-seed-intro.jpg',
  pages: [{
    text: [
      'c\'est le grand départ :',
      null,
      'toutes les fleurs ont fané,',
      'mais les fruits ont mûri et',
      'les graines aussi',
      null,
      null,
      'les ZUMS de la tribu des KOLOS',
      's\'avancent pour prendre la place qui est leur :',
      null,
      'de cette flotte d\'innombrable de graines,',
      'ce sont eux les capitaines;',
      'pionniers, conquérants',
      'aux commandes de leurs vaisseaux à la destination incertaine'
    ],
    tuto: [
      'Apprenez-en plus sur les KOLOS et sur la FRAST en lisant le dialogue "Des bâtiments organiques".'
    ],
    mainMenu: [
      // Call to a "template" "close" button
      'close',
      {
        label: 'parler aux kolos',
        display: () =>

          // checking if the quest has kept in its prior state of `!opened`
          window.__STORE__
            .getState()
            .auth
            .user
            .buildings
              .find(building => 
                
                building.key === 'kolos-seed')
                  .quests[
                    'kolos-seed-intro']
                      .opened === false,
        click: e => {

          e.preventDefault()

          const action = 'open-kolos-seed-intro-quest'

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
      },
      {
        label: 'décrocher la graine',
        display: () =>

          // checking if the quest has received the `valid` status
          window.__STORE__
            .getState()
            .auth
            .user
            .buildings
              .find(building => 
                
                building.key === 'kolos-seed')
                  .quests[
                    'kolos-seed-intro']
                      .valid === true,
        click: e => {

          e.preventDefault()

          const action = 'close-kolos-seed-intro-quest'

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