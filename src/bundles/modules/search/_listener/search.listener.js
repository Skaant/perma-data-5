import renderSearchModal from "./renderSearchModal/renderSearchModal";
import unmountSearchModal from "./unmountSearchModal/unmountSearchModal";
import renderSearchNavItem from "./renderSearchNavItem/renderSearchNavItem";

// Compare logic
let previous = null

export default () => {

  const next = window.__STORE__
    .getState()
    .search

  if (previous
      && previous.modalDisplay !== next.modalDisplay) {
    
    if (next.modalDisplay === true) {

      renderSearchModal()

    } else {

      unmountSearchModal()
    }

    previous = next

  } else if (!previous
    || previous.value !== next.value) {
    
    renderSearchNavItem()
  
    previous = next

  } else if (previous
    && previous.loadStatus
    && !next.loadStatus) {
  
    renderSearchModal()
  
    previous = next
  }

  previous = next
}