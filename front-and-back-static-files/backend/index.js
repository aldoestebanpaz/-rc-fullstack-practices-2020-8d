require('dotenv').config()

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path');
const app = express()
const port = 3001

app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); // para poder recibir JSONs en las request

require('./database');

app.use('/static', express.static(path.join(__dirname, 'public')));

const v1Routes = require('./routes');

app.use('/api/v1', v1Routes);

app.use(function (req, res, next) {
  res.status(404).json({ message: "Sorry can't find that!" })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
