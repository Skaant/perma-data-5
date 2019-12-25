import renderUserModal from "./renderUserModal/renderUserModal"
import unmountUserModal from "./unmountUserModal/unmountUserModal"

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

  } else if (previous
    && previous.userModalDisplay
    && !next.userModalDisplay) {

    unmountUserModal()
  }

  previous = next
}