import renderAuthButtons from "./renderAuthButtons/renderAuthButtons"

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

    renderAuthButtons()
  }
  
  previousAuth = nextAuth
  previousSearch = nextSearch
}