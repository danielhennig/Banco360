const { Router } = require('express');

const usuarioRoutes = require('./usuarioRoutes');
const contaRoutes = require('./contaRoutes');
const transacaoRoutes = require('./transacaoRoutes');
const ofertaRoutes = require('./ofertaRoutes');
const consentimentoRoutes = require('./consentimentoRoutes');

const routes = Router();

routes.use('/usuarios', usuarioRoutes);
routes.use('/contas', contaRoutes);
routes.use('/transacoes', transacaoRoutes);
routes.use('/ofertas', ofertaRoutes);
routes.use('/consentimentos', consentimentoRoutes);

module.exports = routes;
