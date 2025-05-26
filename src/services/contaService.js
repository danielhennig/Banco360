const { Conta, Transacao, Usuario } = require('../models');
const gerarNumeroConta = require('../utils/gerarNumeroConta');

module.exports = {
  async criarConta(usuarioId) {
    const usuario = await Usuario.findByPk(usuarioId);
    if (!usuario) throw new Error('Usuário não encontrado');

    const contaExistente = await Conta.findOne({ where: { usuarioId } });
    if (contaExistente) throw new Error('Usuário já possui conta');

    const numeroConta = gerarNumeroConta();

    const conta = await Conta.create({
      usuarioId,
      numeroConta,
      saldo: 0,
    });

    return conta;
  },

  async verConta(id) {
    const conta = await Conta.findByPk(id, {
      include: [{ model: Usuario, attributes: ['nome', 'cpf'] }],
    });

    if (!conta) throw new Error('Conta não encontrada');

    return conta;
  },

  async verExtrato(contaId) {
    const conta = await Conta.findByPk(contaId);
    if (!conta) throw new Error('Conta não encontrada');

    const transacoes = await Transacao.findAll({
      where: { contaId },
      order: [['data', 'DESC']],
    });

    return {
      conta: conta.numeroConta,
      saldo: conta.saldo,
      transacoes,
    };
  },
};
