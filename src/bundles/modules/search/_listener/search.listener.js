import renderSearchModal from "./renderSearchModal/renderSearchModal";
import unmountSearchModal from "./unmountSearchModal/unmountSearchModal";
import renderSearchNavItem from "./renderSearchNavItem/renderSearchNavItem";

// Compare logic
let previous = null

/**
 * The `search` listener
 */
export default () => {

  const next = window.__STORE__
    .getState()
    .search

  if (previous
      && previous.loginModalDisplay !== next.loginModalDisplay) {
    
    if (next.modalDisplay === true) {

      renderSearchModal(true)

    } else {

      unmountSearchModal()
    }

    previous = next

  } else if (!previous
    || previous.value !== next.value) {
    
    renderSearchNavItem()
  
    previous = next

  } else if (previous
    && previous.loginModalDisplay
    && previous.value !== next.value) {

    renderSearchModal()
  
    previous = next
    
  } else if (previous
    && previous.loadStatus
    && !next.loadStatus) {
  
    renderSearchModal()
  
    previous = next
  }

  previous = next
}