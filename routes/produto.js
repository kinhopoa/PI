const express = require('express')
const router = express.Router()
const ProdutoController = require('../controllers/ProdutoController');

router.get('/', ProdutoController.viewProduct);
router.get('/meuspedidos', ProdutoController.meusPedidos);


module.exports = router;