const express = require('express')
const router = express.Router()
const ProdutoController = require('../controllers/ProdutoController');

router.get('/', ProdutoController.viewProduct);
router.get('/meuspedidos', ProdutoController.meusPedidos);
router.get('/canecas', ProdutoController.canecas);
router.get('/vestuario', ProdutoController.vestuario);
router.get('/camisetas', ProdutoController.camisetas);
router.get('/games', ProdutoController.games);
router.get('/chapeus', ProdutoController.chapeus);
router.get('/moletons', ProdutoController.moletons);





module.exports = router;