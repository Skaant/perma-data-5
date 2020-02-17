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
      && previous.searchModalDisplay !== next.searchModalDisplay) {
    
    if (next.searchModalDisplay === true) {

      renderSearchModal(true)

    } else {

      unmountSearchModal()
    }

    previous = next

  } else if (!previous
    || previous.value !== next.value) {
    
    renderSearchNavItem()

    if (previous
      && previous.loginModalDisplay) {
  
      renderSearchModal() 
    }
  
    previous = next

  }  else if (previous
    && previous.loadStatus
    && !next.loadStatus) {
  
    renderSearchModal()
  
    previous = next
  }

  previous = next
}