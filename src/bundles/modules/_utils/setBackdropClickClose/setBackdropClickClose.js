// MDB-REACT ?
export default 
  (
    modalId,
    actionType,
    dispatchProps
  ) => {

  $(modalId)
    .off('click')

  setTimeout(
    () =>
      $(modalId)
        .on(
          'click',
          e => {

            e.preventDefault()

            if (e.target === $(modalId)[0]) {

              $(modalId)
                .off('click')

              window.__STORE__
                .dispatch({
                  type: actionType,
                  ...dispatchProps
                })
            }
          }),
    1
  )
}