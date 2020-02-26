import activateAuthButtons from "./activateAuthButtons/activateAuthButtons"

// Compare logic
let previousAuth = null

export default () => {

  const {
    auth: nextAuth
  } = window.__STORE__
    .getState()

  if (!previousAuth) {

    activateAuthButtons()
  }
  
  previousAuth = nextAuth
}