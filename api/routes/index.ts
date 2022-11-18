const bodyParser = require('body-parser')

const accounts = require('./accountsRoute')
//const transactions = require('./transactionsRoute')
const users = require('./usersRoute')

module.exports = (server : any) => {
  server.use(bodyParser.json())
  
  server.use(accounts)
  //server.use(transactions)
  server.use(users)
}