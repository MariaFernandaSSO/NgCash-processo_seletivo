const { Router } = require('express')
const routes = Router()
const usersController = require('../controllers/usersController')

routes.get('/users', usersController.findUser)
routes.post('/users', usersController.createUser)

module.exports = routes