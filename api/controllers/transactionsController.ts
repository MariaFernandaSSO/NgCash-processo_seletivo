const { Op } = import('sequelize')
const database = import('../models')

class TransactionsController {
  static async findAllTransactions(req : any, res : any) {
    try {
        const allTransactions = await database.Transactions.findAll()
        return res.status(200).json(allTransactions)
    } catch (error : any) {
        return res.status(500).json(error.message)
    }
  }
}


module.exports = TransactionsController
