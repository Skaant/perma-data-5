module.exports = {
  name: 'createNextBuildings',
  type: 'control',
  action: ({
    user
   }) =>

    new Promise((
      resolve,
      reject
    ) => {

      const nextBuildings = user
        .buildings
        .slice(0)

      nextBuildings[
        nextBuildings
          .findIndex(building =>
            
            building.id === 'kolos-rayon')]
        .quests['tuto1Quest']
          .status = 'VALIDATED'

      resolve({ nextBuildings })
    }
  )
}