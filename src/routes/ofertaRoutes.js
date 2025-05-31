const express = require('express');
const router = express.Router();
const ofertaController = require('../controllers/ofertaController');

router.post('/', ofertaController.criarOferta);
router.get('/', ofertaController.listarOfertas);
router.get('/recomendadas/:score', ofertaController.ofertasRecomendadas);

module.exports = router;
