module.exports = {
  uri: "mongodb+srv://<username>:<password>@alpha-yytto.gcp.mongodb.net/test?retryWrites=true&w=majority",
  dbName: "dev",
  username: process.env.DB_USERNAME || require('./clientSecret.json').username,
  password: process.env.DB_PASSWORD || require('./clientSecret.json').password
}