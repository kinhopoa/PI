const express = require('express');
const { cadastro } = require('../controllers/CadastroController');
const router = express.Router();
const CadastroController = require('../controllers/CadastroController')

router.get('/', CadastroController.cadastro);

module.exports = router;