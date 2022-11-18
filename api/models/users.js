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
    username: {
      type: DataTypes.STRING,
      validate: {
        min: 3
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        min: 8,
        isUppercase: true,
        isInt: true
      }
    },
    accountId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'users'
  });
  return Users;
};