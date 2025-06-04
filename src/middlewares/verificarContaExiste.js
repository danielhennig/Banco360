const { Conta } = require('../models');

module.exports = async (req, res, next) => {
  const contaId = req.body.contaId || req.params.contaId;

  if (!contaId) {
    return res.status(400).json({ erro: 'contaId não informado.' });
  }

  const conta = await Conta.findByPk(contaId);
  if (!conta) {
    return res.status(404).json({ erro: 'Conta não encontrada.' });
  }

  // Anexa a conta no request para uso posterior, se quiser
  req.conta = conta;

  next();
};
