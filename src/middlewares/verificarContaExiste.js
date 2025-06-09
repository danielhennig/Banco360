const { Conta } = require('../models');

module.exports = async (req, res, next) => {
  const numeroConta = req.body.numeroConta || req.params.numeroConta;

  if (!numeroConta) {
    return res.status(400).json({ erro: 'Número da conta não informado.' });
  }

  // Corrigido: buscar por número da conta, não por chave primária
  const conta = await Conta.findOne({ where: { numeroConta } });

  if (!conta) {
    return res.status(404).json({ erro: 'Conta não encontrada.' });
  }

  const { cpf } = req.body;

  if (cpf && !/^\d{11}$/.test(cpf)) {
    return res.status(400).json({ erro: 'O CPF deve conter exatamente 11 dígitos numéricos.' });
  }

  // Anexa a conta no request para uso posterior
  req.conta = conta;

  next();
};
