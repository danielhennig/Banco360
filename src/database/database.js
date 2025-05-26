const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  }
);

async function testarConexao() {
  try {
    await sequelize.authenticate();
    console.log('🟢 Conectado com sucesso ao banco de dados');
  } catch (error) {
    console.error('🔴 Erro na conexão com o banco:', error);
  }
}

testarConexao();

module.exports = sequelize;
