module.exports = {
  name: 'checkQuestStatus',
  type: 'control',
  action: ({ user }) =>

    new Promise((
      resolve,
      reject
    ) => {

      const kolosRayon = user
        .buildings
        .find(building =>
          
          building.id === 'kolos-rayon')

      if (!kolosRayon) {

        reject(new Error('400: Pas de `kolos-rayon`'))
      }

      const quest = kolosRayon.quests
        && kolosRayon.quests['tuto1Quest']

      if (!quest) {

        reject(new Error('400: pas de quête `tuto1Quest`'))
      }

      if (quest.status !== 'NEW') {

        reject(new Error('400: `tuto1Quest` doit être au `status = \'new\'`'))
      }

      resolve({})
    }
  )
}