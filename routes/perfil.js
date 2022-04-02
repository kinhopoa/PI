const express = require('express')
const router = express.Router();
const PerfilControllers = require('../controllers/PerfilControllers')

router.get('/', PerfilControllers.perfil);

module.exports = router;