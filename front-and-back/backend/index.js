const express = require('express')
const app = express()
const port = 3000

app.get('/v1/users', (req, res) => {
  const users = [
    { username: 'foo' },
    { username: 'bar' },
    { username: 'baz' },
    { username: 'Jhon Doe' },
  ];
  res.json(users);
})

app.get('/v1/posts', (req, res) => {
  const users = [
    { title: 'foo' },
    { title: 'bar' },
    { title: 'baz' },
  ];
  res.json(users);
})

app.use(function (req, res, next) {
  res.status(404).json({ message: "Sorry can't find that!" })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
