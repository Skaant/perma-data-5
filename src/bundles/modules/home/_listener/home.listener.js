import activateAuthButtons from "./activateAuthButtons/activateAuthButtons"
import renderHomeSearch from "./renderHomeSearch/renderHomeSearch"

// Compare logic
let previousAuth = null
let previousSearch = null

export default () => {

  const {
    auth: nextAuth,
    search: nextSearch
  } = window.__STORE__
    .getState()

  if (!previousAuth) {

    activateAuthButtons()

  }
  
  if (!previousSearch
    || previousSearch.value !== nextSearch.value) {

    renderHomeSearch()
  }
  
  previousAuth = nextAuth
  previousSearch = nextSearch
}