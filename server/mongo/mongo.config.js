module.exports = {
  uri: "mongodb+srv://<username>:<password>@alpha-yytto.gcp.mongodb.net/test?retryWrites=true&w=majority",
  dbName: "dev",
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
}