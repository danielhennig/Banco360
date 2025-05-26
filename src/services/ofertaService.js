const { Oferta, Usuario } = require('../models');

module.exports = {
  async criarOferta({ usuarioId, titulo, descricao, taxaJuros, valorMaximo, parcelas }) {
    const usuario = await Usuario.findByPk(usuarioId);
    if (!usuario) throw new Error('Usuário não encontrado');

    const oferta = await Oferta.create({
      usuarioId,
      titulo,
      descricao,
      taxaJuros,
      valorMaximo,
      parcelas,
    });

    return oferta;
  },

  async listarOfertas() {
    const ofertas = await Oferta.findAll({
      order: [['taxaJuros', 'ASC']],
    });

    return ofertas;
  },

  async editarOferta(id, dados) {
    const oferta = await Oferta.findByPk(id);
    if (!oferta) throw new Error('Oferta não encontrada');

    await oferta.update(dados);
    return oferta;
  },

  async deletarOferta(id) {
    const oferta = await Oferta.findByPk(id);
    if (!oferta) throw new Error('Oferta não encontrada');

    await oferta.destroy();
  },
};
