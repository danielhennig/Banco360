const express = require('express');
const router = express.Router();
const contaController = require('../controllers/contaController');

router.post('/contas', contaController.criarConta);

module.exports = router;
