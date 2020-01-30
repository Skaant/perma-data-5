module.exports = () =>

  new Promise(resolve => {

    const buildings = [{
      key: 'kolos-rayon',
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