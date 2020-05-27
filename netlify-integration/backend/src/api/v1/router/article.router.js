const express = require('express');
const router = express.Router();
const { articleController } = require('../controller');

router.post('/', articleController.create);
router.get('/', articleController.getAll);

module.exports = router;
