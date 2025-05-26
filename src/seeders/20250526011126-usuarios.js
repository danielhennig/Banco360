'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        nome: 'Admin Banco',
        cpf: '00000000000',
        email: 'admin@banco.com',
        senha: await bcrypt.hash('123456', 10),
        criadoEm: new Date(),
      },
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        nome: 'João da Silva',
        cpf: '11111111111',
        email: 'joao@gmail.com',
        senha: await bcrypt.hash('123456', 10),
        criadoEm: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Usuarios', null, {});
  },
};
