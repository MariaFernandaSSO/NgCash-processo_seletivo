const { Op } = require('sequelize')
const database = require('../models')

class UsersController {

  static async findUser(req : any, res : any) {
    try {
        const allUsers = await database.Users.findAll()
        return res.status(200).json(allUsers)
    } catch (error : any) {
        return res.status(500).json(error.message)
    }
  }

  static async createUser(req: any, res: any) {
    const newUser = req.body
    try {
        const newUserCreated = await database.Users.create(newUser)
        return res.status(201).json(newUserCreated)
    } catch (error: any) {
        return res.status(500).json(error.message)
    }
  }

}


module.exports = UsersController
