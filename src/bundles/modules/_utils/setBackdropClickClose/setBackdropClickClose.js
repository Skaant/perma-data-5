// MDB-REACT ?
export default 
  (
    modalId,
    actionType
  ) =>

  setTimeout(
    () =>
      $(modalId)
        .on(
          'click',
          e => {

            if (e.target === $(modalId)[0]) {

              e.preventDefault()

              window.__STORE__
                .dispatch({
                  type: actionType
                })
            }
          }),
    1
  )