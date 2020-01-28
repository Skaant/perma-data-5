const reqBodyControl = require('../_items/_controls/reqBody/reqBody.control')
const createUserControl = require('../_items/_controls/createUser/createUser.control')
const saveUserDbCall = require('../_items/_dbcalls/saveUser/saveUser.dbcall')
const setCookiesControl = require('../_items/_controls/setCookies/setCookies.control')
const createBuildingControl = require('../_items/_controls/createBuilding/createBuilding.control')
const saveBuildingDbCall = require('../_items/_dbcalls/saveBuilding/saveBuilding.dbcall')

module.exports = [
  reqBodyControl,
  createUserControl,
  saveUserDbCall,
  setCookiesControl,
  createBuildingControl,
  saveBuildingDbCall
]