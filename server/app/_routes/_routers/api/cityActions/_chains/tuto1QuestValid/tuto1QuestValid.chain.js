const checkQuestStatusControl = require('./_items/_controls/checkQuestStatus/checkQuestStatus.control')
const createNextBuildingsControl = require('./_items/_controls/createNextBuildings/createNextBuildings.control')
const updateQuestStatusDbcall = require('./_items/_dbcalls/updateQuestStatus/updateQuestStatus.dbcall')

module.exports = [
  checkQuestStatusControl,
  createNextBuildingsControl,
  updateQuestStatusDbcall
]