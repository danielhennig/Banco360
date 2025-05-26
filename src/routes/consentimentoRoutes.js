const { Router } = require('express');
const consentimentoController = require('../controllers/consentimentoController');
const auth = require('../middlewares/authMiddleware');

const routes = Router();

routes.post('/', auth, consentimentoController.criarConsentimento);
routes.get('/', auth, consentimentoController.listarConsentimentos);
routes.get('/:id', auth, consentimentoController.verConsentimento);

module.exports = routes;
