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

            e.preventDefault()

            if (e.target === $(modalId)[0]) {

              window.__STORE__
                .dispatch({
                  type: actionType
                })
            }
          }),
    1
  )