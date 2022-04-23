const express = require('express')
const router = express.Router();
const upload = require('../middlewares/multer')
const PerfilControllers = require('../controllers/PerfilControllers')

router.get('/', PerfilControllers.perfil);
router.post('/', upload.single('avatar'), PerfilControllers.perfil);

module.exports = router;