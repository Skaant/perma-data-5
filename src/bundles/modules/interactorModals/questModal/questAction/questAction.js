export default
  (action, props) =>
    $.ajax(
      '/data/quest',
      {
        method: 'PUT',
        data: {
          action,
          props
        }
      })
      .then(result => console.log(result))