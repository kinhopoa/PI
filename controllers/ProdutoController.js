const ProdutoController = {
    viewProduct: (req, res) => {
        res.render('produto')
    },
    meusPedidos: (req, res) => {
        res.render('meuspedidos')
    }
}


module.exports = ProdutoController;