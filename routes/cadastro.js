const express = require('express')
const router = express.Router();
const CadastroController = require('../controllers/CadastroController')

router.get('/', CadastroController.cadastro);

module.exports = router;