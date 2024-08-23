const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuariosController');
const conquistasController = require('../controllers/conquistasController');

router.use('/usuarios', usuariosController);
router.use('/conquistas', conquistasController);

module.exports = router;