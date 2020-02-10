import renderCity from './renderCity/renderCity'
import unmountCityElements from './unmountCity/unmountCity';

let previous = null
let previousAuth = null

const store = window.__STORE__

export default () => {

  const next = store
    .getState()
    .city

  // TODO move to the `mainAuth.listener`
  const nextAuth = store
    .getState()
    .auth

  if ((!previousAuth
      || !previousAuth.user)
      && nextAuth.user) {

    $('#home-base')
      .addClass('d-none')
  }

  // TODO deep buildings check
  if (nextAuth
      && nextAuth.user
      && nextAuth.user.buildings) {

    const {
      pseudo,
      buildings
     } = nextAuth.user

    renderCity({
      pseudo,
      buildings
    })
  }

  if (previousAuth
      && previousAuth.user
      && !nextAuth.user) {

    $('#home-base')
      .removeClass('d-none')

    unmountCityElements()
  }

  previous = next
  previousAuth = nextAuth
}