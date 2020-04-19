const reqBodyControl = require('../_items/_controls/reqBody/reqBody.control')
const getTokenUserDbcall = require('../_items/_dbcalls/getTokenUser/getTokenUser.dbcall')
const checkTokenUserControl = require('../_items/_controls/checkTokenUser/checkTokenUser.control')
const updateUserControl = require('../_items/_controls/updateUser/updateUser.control')
const saveUserDbcall = require('../_items/_dbcalls/saveUser/saveUser.dbcall')
const checkUserModifiedCountControl = require('../_items/_controls/checkUserModifiedCount/checkUserModifiedCount.control')
const createUserBuildingsControl = require('../_items/_controls/createUserBuildings/createUserBuildings.control')
const saveUserBuildingDbcall = require('../_items/_dbcalls/saveUserBuildings/saveUserBuilding.dbcall')

module.exports = [
  reqBodyControl,
  getTokenUserDbcall,
  checkTokenUserControl,
  updateUserControl,
  saveUserDbcall,
  checkUserModifiedCountControl,
  createUserBuildingsControl,
  saveUserBuildingDbcall
]