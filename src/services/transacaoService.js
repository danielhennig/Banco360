const { Conta, Transacao } = require('../models');

module.exports = {
  async criarTransacao({ contaId, tipo, descricao, valor }) {
    const conta = await Conta.findByPk(contaId);
    if (!conta) throw new Error('Conta não encontrada');

    if (tipo === 'saida' && conta.saldo < valor) {
      throw new Error('Saldo insuficiente');
    }

    const novoSaldo = tipo === 'entrada' ? 
      parseFloat(conta.saldo) + parseFloat(valor) :
      parseFloat(conta.saldo) - parseFloat(valor);

    await conta.update({ saldo: novoSaldo });

    const transacao = await Transacao.create({
      contaId,
      tipo,
      descricao,
      valor,
      data: new Date(),
    });

    return transacao;
  },

  async listarTransacoes(contaId) {
    const transacoes = await Transacao.findAll({
      where: { contaId },
      order: [['data', 'DESC']],
    });

    return transacoes;
  },
};
