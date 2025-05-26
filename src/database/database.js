const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME, // nome do banco
  process.env.DB_USER, // usuário do banco
  process.env.DB_PASS, // senha do banco
  {
    host: process.env.DB_HOST, // host, geralmente localhost ou 127.0.0.1
    dialect: 'postgres',
    logging: false, // define como true se quiser ver logs SQL
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('🟢 Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('🔴 Erro na conexão com o banco de dados:', error);
  }
}

testConnection();

module.exports = sequelize;
