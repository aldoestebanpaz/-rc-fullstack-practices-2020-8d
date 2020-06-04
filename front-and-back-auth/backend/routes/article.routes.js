const express = require('express');
const { check } = require('express-validator');
const authorize = require('../middlewares/authorize');
const router = express.Router();

const articleController = require('../controllers/article.controller');

router.post('/', [
    check('title', 'Title cannot be null').notEmpty(),
    check('title', 'Allowed characters range from 10 to 40').isLength({ min: 10, max: 40 }),
    check('body', 'Body cannot be null').notEmpty()
  ],
  authorize,
  articleController.createArticle);
router.get('/', articleController.getAllArticles);
router.get('/:id', articleController.getArticle);
router.put('/:id', authorize, articleController.updateArticle);
router.delete('/:id', authorize, articleController.deleteArticle);

module.exports = router;
