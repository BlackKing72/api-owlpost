const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuariosController');
const loginsController = require('../controllers/loginsController');
const amigosController = require('../controllers/amigosController');
const postagensController = require('../controllers/postagensController');
const tagsController = require('../controllers/tagsController');
const tagPostadasController = require('../controllers/tagsPostadasController');

const conquistasController = require('../controllers/conquistasController');

const questoesCalculoController = require('../controllers/questoesCalculoController');

router.use('/usuarios', usuariosController);
router.use('/logins', loginsController);
router.use('/amigos', amigosController);
router.use('/tags', tagsController);
router.use('/postagens', postagensController);
router.use('/post-tags', tagPostadasController);

router.use('/conquistas', conquistasController);

router.use('/calculo', questoesCalculoController);

module.exports = router;