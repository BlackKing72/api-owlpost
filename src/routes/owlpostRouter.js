const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuariosController');
const conquistasController = require('../controllers/conquistasController');
const loginsController = require('../controllers/loginsController');

router.use('/usuarios', usuariosController);
router.use('/logins', loginsController);
router.use('/conquistas', conquistasController);

module.exports = router;