export default (
  state,
  id,
  notification
) => {

  if (state[0]
    && state[0].id === id) {

    return [
      notification,
      ...state
        .slice(1)
    ]

  } else {

    return [
      Object.assign(
        {},
        notification,
        {
          id: notification.title
            + '_'
            + Date.now()
        }
      ),
      ...state
    ]
  }}