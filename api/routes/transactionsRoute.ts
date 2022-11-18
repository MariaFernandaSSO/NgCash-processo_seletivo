const { Router } = import('express')
const routes = Router()
const transactionsController = import('../controllers/transactionsController')

routes.get('/transactions', transactionsController.findAllTransactions)

module.exports = routes

