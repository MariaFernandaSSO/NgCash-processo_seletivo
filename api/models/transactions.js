'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    static associate(models) {
      Transactions.belongsTo(models.Accounts, {
        foreignKey: 'id'
      })
    }
  }
  Transactions.init({
    debitedAccountId: DataTypes.INTEGER,
    creditedAccountId: DataTypes.INTEGER,
    value: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Transactions',
    tableName: 'transactions'
  });
  return Transactions;
};