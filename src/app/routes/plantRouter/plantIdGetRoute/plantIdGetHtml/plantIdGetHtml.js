module.exports = 
  (req, res) => {
    const { id: plantId } = req.params
    res.send('<html>'
      + '<h1>Le nom de la plante</h1>'
      + '<h2>'
      + plantId
      + '</h2>'
      + '</html>')
  }
        