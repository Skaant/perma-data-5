import renderCity from './renderCity/renderCity'
import unmountCityElements from './unmountCity/unmountCity';

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

  previous = next
}