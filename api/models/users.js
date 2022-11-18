'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.belongsTo(models.Accounts, {
        foreignKey: 'id'
      })
    }
  }
  Users.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING(64),
    accountId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'users'
  });
  return Users;
};