

// Compare logic
let previous = null

export default () => {

  const next = window.__STORE__
    .getState()
    .main

  if ((!previous
      && next.error)
    || (previous
      && previous.error.message !== next.error.message)) {
    
    previous = next

    return alert(next.error.message)
  }

  // Update the compare logic
  previous = next
}