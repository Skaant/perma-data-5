module.exports = (req, res) =>

  req.user
    ? res.sendFile(__dirname + '/_files/home-auth.html')

    : res.sendFile(__dirname + '/_files/home-base.html')