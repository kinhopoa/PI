const express = require('express')
const router = express.Router();
const CarrinhoControllers = require('../controllers/CarrinhoControllers')

router.get('/', CarrinhoControllers.carrinho);

module.exports = router;