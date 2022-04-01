var express = require('express');
var router = express.Router();

const StatusController = require('../controllers/statusController');

router.get('/', StatusController.status);

module.exports = router;