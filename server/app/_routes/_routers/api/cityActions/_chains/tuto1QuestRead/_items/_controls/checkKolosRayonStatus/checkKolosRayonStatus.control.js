module.exports = {
  type: 'control',
  action: () =>

    new Promise((
      resolve,
      reject
    ) =>

      resolve({ wip: true })
  )
}