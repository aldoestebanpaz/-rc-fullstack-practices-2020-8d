const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/about', (req, res) => res.send('about me!'))

app.get('/users', (req, res) => {
  const usersData = [
    {
      firstname: "Aldo",
      lastname: "Paz"
    },
    {
      firstname: "Andres",
      lastname: "Perlo"
    },
    {
      firstname: "Juan",
      lastname: "Alonso"
    },
  ];
  res.send(usersData)
})

app.listen(port, () => console.log(`The server is listening on port ${port}`))
