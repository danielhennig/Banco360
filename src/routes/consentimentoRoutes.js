const express = require('express');
const router = express.Router();

const controller = require('../controllers/consentimentoController');
const verificarContaExiste = require('../middlewares/verificarContaExiste');
const validarCampos = require('../middlewares/validarCamposObrigatorios');
const authMiddleware = require('../middlewares/authMiddleware');

// ✅ Criar consentimento com validação de campos
router.post(
  '/',
  authMiddleware,
  validarCampos(['contaId', 'escopo', 'validade']),
  verificarContaExiste,
  controller.criarConsentimento
);

router.get(
  '/:contaId',
  authMiddleware,
  verificarContaExiste,
  controller.listarPorConta
);


module.exports = router;
