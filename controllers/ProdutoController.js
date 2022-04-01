const ProdutoController = {
    viewProduct: (req, res) => {
        res.render('produto')
    },
    meusPedidos: (req, res) => {
        res.render('meuspedidos')
    },
    canecas: (req, res) => {
        res.render('canecas')
    },
    camisetas: (req, res) => {
        res.render('camisetas')
    },
    chapeus: (req, res) => {
        res.render('chapeus')
    },
    games: (req, res) => {
        res.render('games')
    },
    moletons: (req, res) => {
        res.render('moletons')
    },
    vestuario: (req, res) => {
        res.render('vestuario')
    }
}


module.exports = ProdutoController;