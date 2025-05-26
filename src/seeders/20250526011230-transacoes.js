'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const contaId = await queryInterface.rawSelect('Contas', {
      where: { numeroConta: '123456' },
    }, ['id']);

    await queryInterface.bulkInsert('Transacoes', [
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        tipo: 'entrada',
        descricao: 'Depósito inicial',
        valor: 5000,
        data: new Date(),
        contaId: contaId,
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Transacoes', null, {});
  },
};
