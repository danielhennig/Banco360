'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Contas', [
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        numeroConta: '123456',
        saldo: 5000,
        usuarioId: (await queryInterface.rawSelect('Usuarios', {
          where: { cpf: '11111111111' },
        }, ['id'])),
        criadoEm: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Contas', null, {});
  },
};
