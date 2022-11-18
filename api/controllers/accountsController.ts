/*const { Op } = import('sequelize')
const database = import('../models')

class AccountsController {
  static async findAccounts(req : any, res : any) {
    try {
        const allAccounts = await database.Accounts.findAll()
        return res.status(200).json(allAccounts)
    } catch (error : any) {
        return res.status(500).json(error.message)
    }
  }

}


module.exports = AccountsController
*/