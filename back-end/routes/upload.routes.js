const express = require('express');
const router = express.Router();


const { uploadFile } = require('../controller/upload.controller');
const { uploadImage } = require('../middleware/upload.middleware');

router.post('/:id', uploadImage ,uploadFile);
router.use('/', express.static('uploads'));

module.exports = router;