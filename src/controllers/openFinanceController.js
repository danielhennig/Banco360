const { Conta, Transacao, Consentimento } = require('../models');
const { Op } = require('sequelize');

module.exports = {
  async dadosBancarios(req, res) {
    try {
      const contaId = req.usuario.contaId;

      // Valida consentimento ativo
      const consentimento = await Consentimento.findOne({
        where: {
          contaId,
          autorizado: true,
          validade: { [Op.gt]: new Date() }
        }
      });

      if (!consentimento) {
        return res.status(403).json({ erro: 'Sem consentimento válido para compartilhamento de dados.' });
      }

      // Recupera dados bancários autorizados
      const conta = await Conta.findByPk(contaId, {
        attributes: ['numeroConta', 'nome', 'email', 'saldo']
      });

      const transacoes = await Transacao.findAll({
        where: { contaId },
        order: [['createdAt', 'DESC']]
      });

      return res.status(200).json({
        escopo: consentimento.escopo,
        conta,
        transacoes
      });
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao acessar dados Open Finance', detalhe: error.message });
    }
  }
};
