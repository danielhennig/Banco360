const { Consentimento } = require('../models');

module.exports = async (req, res, next) => {
  const contaId = req.params.contaId || req.body.contaId;

  if (!contaId) {
    return res.status(400).json({ erro: 'contaId não fornecido para verificação de consentimento.' });
  }

  const hoje = new Date();

  const consentimentoAtivo = await Consentimento.findOne({
    where: {
      contaId,
      autorizado: true,
      validade: {
        [require('sequelize').Op.gte]: hoje
      }
    }
  });

  if (!consentimentoAtivo) {
    return res.status(403).json({ erro: 'Acesso negado. Consentimento inexistente, expirado ou revogado.' });
  }

  next();
};
