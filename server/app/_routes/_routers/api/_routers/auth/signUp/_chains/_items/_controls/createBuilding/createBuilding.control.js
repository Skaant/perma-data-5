module.exports = () =>

  new Promise(resolve => {

    const buildings = [{
      id: 'kolos-rayon',
      xp: 0,
      quests: {
        'kolos-rayon-intro': {
          opened: false,
          valid: false
        }
      }
    }]

    resolve({
      buildings
    })
  }
)