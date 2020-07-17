require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan');
const sendNodeMail = require('./sendNodeMail');
const app = express()
const port = 3001
app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); // para poder recibir JSONs en las request

// Un endpoint en cual implementar la api
app.post('/mailer', async (req, res) => {
    //Para generar datos dinámicos de prueba, recibimos el contenido y destino del mail de la request.
    const { email, msg = '', subject } = req.body;

    try {
        //Implementación de nodeMailer con una función externa en el controlador
        await sendNodeMail({ email, subject, msg })
        return res.send({ msg: 'Email sent!!!', status: 'ok' })

    } catch (err) {
        return res.status(401).send(err)
    }
})

app.listen(port, () => console.log(`The server is listening on port ${port}`))
