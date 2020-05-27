const express = require('express');
const router = express.Router();

const articleRouter = require('./article.routes');
const authRouter = require('./auth.routes');
router.use('/articles', articleRouter);
router.use('/users', authRouter);

router.get((req, res) => {
  res.json({ message: "The server is working" });
})

module.exports = router;
