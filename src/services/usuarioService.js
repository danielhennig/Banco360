const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../models');
const gerarNumeroConta = require('../utils/gerarNumeroConta');

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

module.exports = {
  async criarUsuario({ nome, cpf, email, senha }) {
    const usuarioExistente = await Usuario.findOne({ where: { cpf } });
    if (usuarioExistente) throw new Error('CPF já cadastrado');

    const hashSenha = await bcrypt.hash(senha, 10);

    const usuario = await Usuario.create({
      nome,
      cpf,
      email,
      senha: hashSenha,
    });

    return usuario;
  },

  async login({ email, senha }) {
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) throw new Error('Usuário não encontrado');

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) throw new Error('Senha inválida');

    const token = jwt.sign({ id: usuario.id }, JWT_SECRET, {
      expiresIn: '1d',
    });

    return token;
  },

  async listarUsuarios() {
    const usuarios = await Usuario.findAll({
      attributes: ['id', 'nome', 'cpf', 'email'],
    });
    return usuarios;
  },
};
