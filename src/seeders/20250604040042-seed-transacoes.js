const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    const conta = await queryInterface.sequelize.query(
      `SELECT id, cpf FROM "Conta";`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const joao = conta.find(c => c.cpf === '11111111111');
    const maria = conta.find(c => c.cpf === '22222222222');

    if (!joao || !maria) {
      throw new Error('Contas não encontradas. Execute a seed das contas primeiro.');
    }

    const now = new Date();

    const transacoes = [
      // João
      { contaId: joao.id, tipo: 'deposito', valor: 1000 },
      { contaId: joao.id, tipo: 'saque', valor: 200 },
      { contaId: joao.id, tipo: 'deposito', valor: 300 },
      { contaId: joao.id, tipo: 'saque', valor: 100 },
      { contaId: joao.id, tipo: 'deposito', valor: 1500 },

      // Maria
      { contaId: maria.id, tipo: 'deposito', valor: 2000 },
      { contaId: maria.id, tipo: 'saque', valor: 500 },
      { contaId: maria.id, tipo: 'deposito', valor: 700 },
      { contaId: maria.id, tipo: 'saque', valor: 250 },
      { contaId: maria.id, tipo: 'deposito', valor: 1200 }
    ];

    await queryInterface.bulkInsert('Transacao',
      transacoes.map(t => ({
        id: uuidv4(),
        contaId: t.contaId,
        tipo: t.tipo,
        valor: t.valor,
        createdAt: now,
        updatedAt: now
      }))
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Transacao', null, {});
  }
};
