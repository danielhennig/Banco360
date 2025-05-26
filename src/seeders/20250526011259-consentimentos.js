'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const usuarioId = await queryInterface.rawSelect('Usuarios', {
      where: { cpf: '11111111111' },
    }, ['id']);

    await queryInterface.bulkInsert('Consentimentos', [
      {
        id: Sequelize.literal('uuid_generate_v4()'),
        escopo: 'dados_conta, transacoes, ofertas',
        validoAte: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        usuarioId: usuarioId,
        
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Consentimentos', null, {});
  },
};
