const ofertaService = require('../services/ofertaService');

module.exports = {
  async criarOferta(req, res) {
    try {
      const { titulo, descricao, taxaJuros, valorMaximo, parcelas } = req.body;
      const { usuarioId } = req;

      const oferta = await ofertaService.criarOferta({
        usuarioId,
        titulo,
        descricao,
        taxaJuros,
        valorMaximo,
        parcelas,
      });

      return res.status(201).json(oferta);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async listarOfertas(req, res) {
    try {
      const ofertas = await ofertaService.listarOfertas();
      return res.status(200).json(ofertas);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async editarOferta(req, res) {
    try {
      const { id } = req.params;
      const dados = req.body;

      const oferta = await ofertaService.editarOferta(id, dados);

      return res.status(200).json(oferta);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async deletarOferta(req, res) {
    try {
      const { id } = req.params;
      await ofertaService.deletarOferta(id);

      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
