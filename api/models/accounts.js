'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accounts extends Model {
    static associate(models) {
      Accounts.hasOne(models.Users, {
        foreignKey: 'accountId'
      })

      Accounts.belongsTo(models.Users, {
        foreignKey: 'id'
      })

      Accounts.hasMany(models.Transactions, {
        foreignKey: 'debitedAccountId'
      })

      Accounts.hasMany(models.Transactions, {
        foreignKey: 'creditedAccountId'
      })
    }
  }
  Accounts.init({
    balance: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Accounts',
    tableName: 'accounts'
  });
  return Accounts;
};