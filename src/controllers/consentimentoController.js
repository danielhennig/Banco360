const { Consentimento, Conta } = require('../models');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async criarConsentimento(req, res) {
    try {
      const { contaId, escopo, validade } = req.body;

      const conta = await Conta.findByPk(contaId);
      if (!conta) {
        return res.status(404).json({ erro: 'Conta não encontrada' });
      }

      const novoConsentimento = await Consentimento.create({
        id: uuidv4(),
        contaId,
        escopo,
        validade
      });

      return res.status(201).json(novoConsentimento);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao registrar consentimento', detalhe: error.message });
    }
  },

  async listarPorConta(req, res) {
    try {
      const { contaId } = req.params;

      const consentimentos = await Consentimento.findAll({
        where: { contaId },
        order: [['createdAt', 'DESC']]
      });

      return res.status(200).json(consentimentos);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao listar consentimentos', detalhe: error.message });
    }
  }
};
