const { Router } = require('express');
const ofertaController = require('../controllers/ofertaController');
const auth = require('../middlewares/authMiddleware');

const routes = Router();

routes.post('/', auth, ofertaController.criarOferta);
routes.get('/', auth, ofertaController.listarOfertas);
routes.put('/:id', auth, ofertaController.editarOferta);
routes.delete('/:id', auth, ofertaController.deletarOferta);

module.exports = routes;
