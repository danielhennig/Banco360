const express = require('express');
const router = express.Router();

const controller = require('../controllers/consentimentoController');
const verificarContaExiste = require('../middlewares/verificarContaExiste');
const validarCampos = require('../middlewares/validarCamposObrigatorios');

// ✅ Criar consentimento com validação de campos
router.post(
    '/',
    validarCampos(['contaId', 'escopo', 'validade']),
    verificarContaExiste,
    controller.criarConsentimento
);

// ✅ Listar consentimentos por conta
router.get(
    '/:contaId',
    verificarContaExiste,
    controller.listarPorConta
);

module.exports = router;
