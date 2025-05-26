const { Router } = require('express');
const transacaoController = require('../controllers/transacaoController');
const auth = require('../middlewares/authMiddleware');

const routes = Router();

routes.post('/', auth, transacaoController.criarTransacao);
routes.get('/:contaId', auth, transacaoController.listarTransacoes);

module.exports = routes;
