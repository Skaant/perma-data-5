const folderNotFound = require('./folderNotFound/folderNotFound')
const folderEmpty = require('./folderEmpty/folderEmpty')
const contentSuccess = require('./contentSuccess/contentSuccess')

module.exports = {
  'folder not found': folderNotFound,
  'folder empty': folderEmpty,

  'content success': contentSuccess
}