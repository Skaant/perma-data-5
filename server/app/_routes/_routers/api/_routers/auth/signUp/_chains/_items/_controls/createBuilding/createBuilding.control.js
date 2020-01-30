module.exports = () =>

  new Promise(resolve => {

    const buildings = [{
      key: 'kolos-seed',
      xp: 0,
      quests: {
        'kolos-seed-intro': {
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