const usuarioService = require('../services/usuarioService');

module.exports = {
  async register(req, res) {
    try {
      const usuario = await usuarioService.criarUsuario(req.body);
      return res.status(201).json(usuario);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async login(req, res) {
    try {
      const token = await usuarioService.login(req.body);
      return res.status(200).json({ token });
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  },

  async listarUsuarios(req, res) {
    try {
      const usuarios = await usuarioService.listarUsuarios();
      return res.status(200).json(usuarios);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
};
