module.exports = () =>

  new Promise(resolve => {

    const buildings = {
      'kolos-rayon': {
        xp: 0,
        quests: {
          'tuto1Quest': {
            status: 'NEW'
          }
        }
      }
    }

    resolve({
      buildings
    })
  }
)