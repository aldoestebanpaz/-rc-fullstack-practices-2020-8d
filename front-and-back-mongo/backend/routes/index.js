const express = require('express');
const router = express.Router();

const articleRouter = require('./article.routes');
router.use('/articles', articleRouter);

router.get((req, res) => {
  res.json({ message: "The server is working" });
})

module.exports = router;
