const atob = require('atob')

module.exports = data =>

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
      ...data,
      buildings
    })
  }
)