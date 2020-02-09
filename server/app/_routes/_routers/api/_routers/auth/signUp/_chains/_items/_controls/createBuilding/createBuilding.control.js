module.exports = () =>

  new Promise(resolve => {

    const buildings = [{
      id: 'kolos-rayon',
      xp: 0,
      quests: {
        'tuto1Quest': {
          status: 'NEW'
        }
      }
    }]

    resolve({
      buildings
    })
  }
)