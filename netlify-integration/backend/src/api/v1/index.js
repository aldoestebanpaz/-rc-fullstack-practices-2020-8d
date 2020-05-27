const express = require('express');
const router = express.Router();
const { articleRouter } = require('./router');

router.use('/articles', articleRouter);

router.get('/', (req, res) => {
  res.send({ message: 'The server is running' });
});

router.get('/env_vars', (req, res) => {
  res.json(process.env);
});

router.use((req, res) => {
  res.status(404).send({ message: 'Not Found' });
})
router.use((err, req, res) => {
  console.error(err.stack)
  res.status(500).send({ message: 'Internal Server Error' });
});

module.exports = router;
