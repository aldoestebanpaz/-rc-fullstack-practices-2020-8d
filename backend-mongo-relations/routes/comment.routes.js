const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

const commentController = require('../controllers/comment.controller');

router.post('/', commentController.createComment);
router.get('/:id', commentController.getComment);

module.exports = router;
