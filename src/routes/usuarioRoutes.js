const { Router } = require('express');
const usuarioController = require('../controllers/usuarioController');

const routes = Router();

routes.post('/register', usuarioController.register);
routes.post('/login', usuarioController.login);
routes.get('/', usuarioController.listarUsuarios); // Listar todos (admin)

module.exports = routes;
