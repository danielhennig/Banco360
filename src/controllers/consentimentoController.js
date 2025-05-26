const consentimentoService = require('../services/consentimentoService');

module.exports = {
  async criarConsentimento(req, res) {
    try {
      const { escopo, validoAte } = req.body;
      const { usuarioId } = req;

      const consentimento = await consentimentoService.criarConsentimento({
        usuarioId,
        escopo,
        validoAte,
      });

      return res.status(201).json(consentimento);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async listarConsentimentos(req, res) {
    try {
      const { usuarioId } = req;
      const consentimentos = await consentimentoService.listarConsentimentos(usuarioId);

      return res.status(200).json(consentimentos);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async verConsentimento(req, res) {
    try {
      const { id } = req.params;
      const consentimento = await consentimentoService.verConsentimento(id);

      return res.status(200).json(consentimento);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  },
};
