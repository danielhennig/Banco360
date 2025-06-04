const express = require('express');
const router = express.Router();
const controller = require('../controllers/consentimentoController');

router.post('/', controller.criarConsentimento);
router.get('/:contaId', controller.listarPorConta);

module.exports = router;
