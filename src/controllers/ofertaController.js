const { Oferta } = require('../models');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async criarOferta(req, res) {
    try {
      const { nome, descricao, taxaJuros, numeroParcelas, valor, scoreMinimo } = req.body;

      const novaOferta = await Oferta.create({
        id: uuidv4(),
        nome,
        descricao,
        taxaJuros,
        numeroParcelas,
        valor,
        scoreMinimo
      });

      return res.status(201).json(novaOferta);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao criar oferta', detalhe: error.message });
    }
  },

  async listarOfertas(req, res) {
    try {
      const ofertas = await Oferta.findAll();
      return res.status(200).json(ofertas);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao listar ofertas', detalhe: error.message });
    }
  },

  async ofertasRecomendadas(req, res) {
    try {
      const score = parseInt(req.params.score);
      const ofertas = await Oferta.findAll({
        where: {
          scoreMinimo: {
            [require('sequelize').Op.lte]: score
          }
        }
      });

      return res.status(200).json(ofertas);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao buscar ofertas recomendadas', detalhe: error.message });
    }
  }
};
