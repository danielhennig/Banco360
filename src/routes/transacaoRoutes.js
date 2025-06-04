const express = require('express');
const router = express.Router();

const transacaoController = require('../controllers/transacaoController');
const verificarContaExiste = require('../middlewares/verificarContaExiste');
const validarCampos = require('../middlewares/validarCamposObrigatorios');

// ✅ Criar transação (depósito ou saque)
router.post(
    '/',
    validarCampos(['contaId', 'tipo', 'valor']),
    verificarContaExiste,
    transacaoController.criarTransacao
);

// ✅ Listar transações por conta (extrato)
router.get(
    '/:contaId',
    verificarContaExiste,
    transacaoController.listarTransacoesPorConta
);

module.exports = router;
