const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuariosController');
const conquistasController = require('../controllers/conquistasController');
const loginsController = require('../controllers/loginsController');
const postagensController = require('../controllers/postagensController');
const tagsController = require('../controllers/tagsController');

router.use('/usuarios', usuariosController);
router.use('/logins', loginsController);
router.use('/conquistas', conquistasController);
router.use('/postagens', postagensController);
router.use('/tags', tagsController);

module.exports = router;