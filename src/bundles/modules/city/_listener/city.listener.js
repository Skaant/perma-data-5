import renderCity from './renderCity/renderCity'
import unmountCityElements from './unmountCity/unmountCity';
import { CITY_SERVER_ACTION_SUCCESS, CITY_SERVER_ACTION_ERROR } from '../_actions/city.actions';

let previous = null

const store = window.__STORE__

export default () => {

  const {
    city: next,
    auth
  } = store
    .getState()

  // TODO deep buildings check
  if (next
    && next.buildings) {

    const {
      buildings
     } = next

    renderCity({
      pseudo: auth
        .user
        .pseudo,
      buildings
    })
  }

  if ((!previous
      || !previous.serverAction)
    && next.serverAction) {

    $.post(
      '/api/city-actions',
      {
        type: next
          .serverAction
          .type
      }
    )

      .done(({ nextBuildings }) => {

        window.__STORE__
          .dispatch({
            type: CITY_SERVER_ACTION_SUCCESS,
            nextBuildings
          })
      })

      .fail(error =>
        
        window.__STORE__
          .dispatch({
            type: CITY_SERVER_ACTION_ERROR,
            error
          }))
  }

  previous = next
}