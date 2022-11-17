const bodyParser = require('body-parser')

module.exports = (server : any) => {
  server.use(bodyParser.json())
}