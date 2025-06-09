const express = require('express');
const router = express.Router();

const controller = require('../controllers/consentimentoController');
const validarCampos = require('../middlewares/validarCamposObrigatorios');
const authMiddleware = require('../middlewares/authMiddleware');

// ✅ Criar consentimento com validação de campos
router.post(
  '/',
  authMiddleware,
  validarCampos(['escopo', 'validade']),
  controller.criarConsentimento
);

router.get(
  '/:contaId',
  authMiddleware,
  controller.listarPorConta
);


module.exports = router;
