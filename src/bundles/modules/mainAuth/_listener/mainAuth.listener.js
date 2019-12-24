import renderUserModal from "./renderUserModal/renderUserModal"

// Compare logic
let previous = null

export default () => {

  const next = window.__STORE__
    .getState()
    .mainAuth

  if ((!previous
      && next.userModalDisplay)
    || (previous
      && !previous.userModalDisplay
      && next.userModalDisplay)) {

    renderUserModal()
  }
}