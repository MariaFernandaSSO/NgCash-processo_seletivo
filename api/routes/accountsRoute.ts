const { Router } = require('express')
const routes = Router()
const accountsController = require('../controllers/accountsController')

routes.get('/accounts', accountsController.findAccounts)

module.exports = routes


