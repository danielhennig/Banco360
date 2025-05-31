const express = require('express');
const router = express.Router();
const transacaoController = require('../controllers/transacaoController');

router.post('/', transacaoController.criarTransacao);
router.get('/:contaId', transacaoController.listarTransacoesPorConta);

module.exports = router;
