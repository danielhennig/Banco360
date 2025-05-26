const contaService = require('../services/contaService');

module.exports = {
  async criarConta(req, res) {
    try {
      const { usuarioId } = req;
      const conta = await contaService.criarConta(usuarioId);
      return res.status(201).json(conta);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async verConta(req, res) {
    try {
      const { id } = req.params;
      const conta = await contaService.verConta(id);
      return res.status(200).json(conta);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  },

  async verExtrato(req, res) {
    try {
      const { id } = req.params;
      const extrato = await contaService.verExtrato(id);
      return res.status(200).json(extrato);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
