'use strict'

var express = require('express');
var HoraextraController = require('../controllers/horasextras');

var router = express.Router();

var multipart = require('connect-multiparty');

router.get('/home', HoraextraController.home);
router.post('/test', HoraextraController.test);
router.post('/save-horaextra', HoraextraController.saveHoraextra);
router.get('/horasextras', HoraextraController.getHoraextra);

module.exports = router;