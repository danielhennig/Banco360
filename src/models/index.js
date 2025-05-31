const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
);

// Cria os models com sequelize instanciado
const Conta = require('./conta')(sequelize, DataTypes);

module.exports = {
  sequelize,
  Conta
};
