const { Router } = require('express');
const contaController = require('../controllers/contaController');
const auth = require('../middlewares/authMiddleware');

const routes = Router();

routes.post('/', auth, contaController.criarConta);
routes.get('/:id', auth, contaController.verConta);
routes.get('/:id/extrato', auth, contaController.verExtrato);

module.exports = routes;
