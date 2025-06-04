const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validarCampos = require('../middlewares/validarCamposObrigatorios');

router.post(
    '/login',
    validarCampos(['email', 'senha']),
    authController.login
);

module.exports = router;
