const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL, // TODO: your gmail account
        pass: process.env.PASSWORD // TODO: your gmail password
    }
});

const sendNodeMail = ({ email, subject, msg }) => {
    //La función recibe por parámetros los datos a llenar en el correo
    const mailOptions = {
        from: process.env.EMAIL || 'uncorreo@gmail.com', // email sender
        to: email, // email receiver
        subject,
        html: `
            <div>
                <h2>El título</h2>
                <p>
                    ${msg}
                </p>
            </div>
        ` // html body | contenido del mail
    };

    return transporter.sendMail(mailOptions);
};

module.exports = sendNodeMail;
