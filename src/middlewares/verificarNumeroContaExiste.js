const { Conta } = require('../models');

module.exports = async (req, res, next) => {
  const { numeroConta } = req.body;

  if (!numeroConta) {
    return res.status(400).json({ erro: 'Número da conta não informado.' });
  }

  const conta = await Conta.findOne({ where: { numeroConta } });

  if (!conta) {
    return res.status(404).json({ erro: 'Conta com esse número não encontrada.' });
  }

  // adiciona a conta encontrada ao req para uso no controller
  req.conta = conta;

  next();
};
