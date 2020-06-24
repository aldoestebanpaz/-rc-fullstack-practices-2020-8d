const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

const articleController = require('../controllers/article.controller');

router.post('/', [
    check('title', 'Title cannot be null').notEmpty(),
    check('title', 'Allowed characters range from 10 to 40').isLength({ min: 10, max: 40 }),
    check('body', 'Body cannot be null').notEmpty()
  ],
  articleController.createArticle);
router.get('/', articleController.getAllArticles);
router.get('/:id', articleController.getArticle);
router.put('/:id', articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);

module.exports = router;
