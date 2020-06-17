const express = require('express');
const router = express.Router();

const articleRouter = require('./article.routes');
const commentRouter = require('./comment.routes');
router.use('/articles', articleRouter);
router.use('/comments', commentRouter);

router.get((req, res) => {
  res.json({ message: "The server is working" });
})

module.exports = router;
