'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Ofertas', [
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        titulo: 'Crédito Pessoal',
        descricao: 'Empréstimo com taxa reduzida',
        taxaJuros: 2.5,
        valorMaximo: 10000,
        parcelas: 12,
        usuarioId: (await queryInterface.rawSelect('Usuarios', {
          where: { cpf: '00000000000' },
        }, ['id'])),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Ofertas', null, {});
  },
};
