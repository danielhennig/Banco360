const { Usuario, Conta } = require('../models');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

function gerarNumeroConta() {
  return Math.floor(100000000 + Math.random() * 900000000).toString(); // Ex: 9 dígitos aleatórios
}

module.exports = {
  async criarConta(req, res) {
    try {
      const { nome, cpf, email, senha } = req.body;

      const usuarioExistente = await Usuario.findOne({ where: { cpf } });
      if (usuarioExistente) {
        return res.status(400).json({ erro: 'Usuário com esse CPF já existe.' });
      }

      const senhaCriptografada = await bcrypt.hash(senha, 10);

      const novoUsuario = await Usuario.create({
        id: uuidv4(),
        nome,
        cpf,
        email,
        senha: senhaCriptografada,
      });

      const conta = await Conta.create({
        id: uuidv4(),
        numeroConta: gerarNumeroConta(),
        saldo: 0,
        usuarioId: novoUsuario.id
      });

      return res.status(201).json({
        mensagem: 'Conta criada com sucesso!',
        conta: {
          numeroConta: conta.numeroConta,
          saldo: conta.saldo,
          nome: novoUsuario.nome,
          email: novoUsuario.email
        }
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: 'Erro ao criar conta.' });
    }
  }
};
