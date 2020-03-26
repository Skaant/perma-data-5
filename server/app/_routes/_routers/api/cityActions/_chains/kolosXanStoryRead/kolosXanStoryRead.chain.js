const checkStoryStatusControl = require('./_items/_controls/checkStoryStatus/checkStoryStatus.control')
const createNextBuildingsControl = require('./_items/_controls/createNextBuildings/createNextBuildings.control')
const updateStoryStatusDbcall = require('./_items/_dbcalls/updateStoryStatus/updateStoryStatus.dbcall')

module.exports = [
  checkStoryStatusControl,
  createNextBuildingsControl,
  updateStoryStatusDbcall
]