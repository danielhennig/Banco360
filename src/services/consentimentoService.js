const { Consentimento, Usuario } = require('../models');

module.exports = {
  async criarConsentimento({ usuarioId, escopo, validoAte }) {
    const usuario = await Usuario.findByPk(usuarioId);
    if (!usuario) throw new Error('Usuário não encontrado');

    const consentimento = await Consentimento.create({
      usuarioId,
      escopo,
      validoAte,
    });

    return consentimento;
  },

  async listarConsentimentos(usuarioId) {
    const consentimentos = await Consentimento.findAll({
      where: { usuarioId },
      order: [['criadoEm', 'DESC']],
    });

    return consentimentos;
  },

  async verConsentimento(id) {
    const consentimento = await Consentimento.findByPk(id);

    if (!consentimento) throw new Error('Consentimento não encontrado');

    return consentimento;
  },
};
