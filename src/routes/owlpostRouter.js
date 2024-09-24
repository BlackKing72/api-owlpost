const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuariosController');
const loginsController = require('../controllers/loginsController');
const amigosController = require('../controllers/amigosController');
const postagensController = require('../controllers/postagensController');

const conquistasController = require('../controllers/conquistasController');
const tagsController = require('../controllers/tagsController');

const questoesCalculoController = require('../controllers/questoesCalculoController');

router.use('/usuarios', usuariosController);
router.use('/logins', loginsController);
router.use('/amigos', amigosController);
router.use('/postagens', postagensController);

router.use('/conquistas', conquistasController);
router.use('/tags', tagsController);

router.use('/calculo', questoesCalculoController);

module.exports = router;