const nodemailer = require('nodemailer')

module.exports = {
    //send mail
    email: function(req, res) {
        const { fullname, phone, province, direction, email, location, detail, option } = req.body.data
        console.log(req.body.data)
        const subject = req.body.subject

        let contenHTML
        
        if (subject === 'Prosupuesto') {
            contenHTML = `
            <h4>${fullname} quiere contactarte</h4>
            <ul>
                <li>Nombre: ${fullname}</li>
                <li>Telefono: ${phone}</li>
                <li>Provincia: ${province}</li>
                <li>Localidad: ${location}</li>
                <li>Localidad: ${direction}</li>
                <li>Email: ${email}</li>
                <li>Motivo: ${option}</li>
            </ul>
            <p>${detail}</p>
            `
        }
        else {
            contenHTML = `
            <h4>${fullname} quiere contactarte</h4>
            <ul>
                <li>Nombre: ${fullname}</li>
                <li>Telefono: ${phone}</li>
                <li>Provincia: ${province}</li>
                <li>Localidad: ${location}</li>
                <li>Localidad: ${direction}</li>
                <li>Email: ${email}</li>
                <li>Opciones: ${option}</li>
            </ul>
            <p>${detail}</p>
            `
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: 'alejandrorusinoff@gmail.com',
            pass: 'isorwiapakyweegc'
            }
        });

        const mailOptions = {
            from: 'alejandrorusinoff@gmail.com',
            to: 'ale_rusinoff13@hotmail.com',
            subject: `${subject}`,
            html: contenHTML
        };

        transporter.sendMail(mailOptions, (error, info) => {
            error? res.status(500).send("error ---> ",error.message) :
            res.status(200).json('Email enviado exitosamente')
        })
    },
}