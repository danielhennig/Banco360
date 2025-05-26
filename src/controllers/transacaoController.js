const transacaoService = require('../services/transacaoService');

module.exports = {
  async criarTransacao(req, res) {
    try {
      const { contaId, tipo, descricao, valor } = req.body;
      const transacao = await transacaoService.criarTransacao({ contaId, tipo, descricao, valor });
      return res.status(201).json(transacao);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async listarTransacoes(req, res) {
    try {
      const { contaId } = req.params;
      const transacoes = await transacaoService.listarTransacoes(contaId);
      return res.status(200).json(transacoes);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
