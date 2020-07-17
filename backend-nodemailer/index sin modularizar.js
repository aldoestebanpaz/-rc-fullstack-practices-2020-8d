require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const app = express()
const port = 3001
app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); // para poder recibir JSONs en las request


// Step 1
// Crear el objeto transport con las credenciales de gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL, // your gmail account
        pass: process.env.PASSWORD // your gmail password
    }
});


// Un endpoint en cual implementar la api
app.post('/mailer', async (req, res) => {
    const { email, msg = '', subject } = req.body;

    // Step 2
    // Crear las options con los datos necesarios para el correo
    const mailOptions = {
        from: process.env.EMAIL || 'uncorreo@gmail.com', // email sender
        to: email, // email receiver
        subject: subject, // email title
        text: 'Wooohooo it works!!', // plain text body for old devices
        html: `
            <div>
                <h2>El título</h2>
                <p>
                    ${msg}
                </p>
            </div>
        ` // html body | contenido del mail
    };

    // Step 3
    // Enviar el correo y la response exitosa
    try {
        const info = await transporter.sendMail(mailOptions);

        res.send({ msg: 'Email sent!!!', status: 'ok' })
        console.log("info", info)
        return console.log('Email sent!!!');

    } catch (err) {
        res.status(401).send(err)
        return console.error(err)
    }
});
