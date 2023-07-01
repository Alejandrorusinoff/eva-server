const { Router } = require('express')
const nodemailer = require('nodemailer')
const authUsers = require('./authUsers')
const email = require('./email')
const message = require('./message')
const router =  Router()

//Ruta de users
router.use('/user', authUsers);

//Ruta de mail
router.use('/email', email);

//Ruta de msj
router.use('/message', message);

// router.post('/email', async(req, res) => {
//     const { fullname, phone, province, dni, email, location, description, productDescription, option, dropdown } = req.body.data
//     const subject = req.body.subject

//     let contenHTML
    
//     if (subject === 'Contacto') {
//         contenHTML = `
//         <h4>${fullname} quiere contactarte</h4>
//         <ul>
//             <li>Nombre: ${fullname}</li>
//             <li>Provincia: ${province}</li>
//             <li>Telefono: ${phone}</li>
//             <li>DNI: ${dni}</li>
//             <li>Email: ${email}</li>
//             <li>Localidad: ${location}</li>
//             <li>Motivo: ${dropdown}</li>
//             <li>Descripción: ${description}</li>
//             <li>Descripción del Producto: ${productDescription}</li>
//         </ul>
//         <p>${productDescription}</p>
//         `
//     }
//     else {
//         contenHTML = `
//         <h4>${fullname} quiere contactarte</h4>
//         <ul>
//             <li>Nombre: ${fullname}</li>
//             <li>Telefono: ${phone}</li>
//             <li>Email: ${email}</li>
//             <li>Localidad: ${location}</li>
//             <li>Descripción: ${description}</li>
//             <li>Opciones: ${option}</li>
//         </ul>
//         `
//     }

//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'alejandrorusinoff@gmail.com',
//           pass: 'isorwiapakyweegc'
//         }
//     });

//     const mailOptions = {
//         from: 'alejandrorusinoff@gmail.com',
//         to: 'ale_rusinoff13@hotmail.com',
//         subject: `${subject}`,
//         html: contenHTML
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         error? res.status(500).send("error ---> ",error.message) :
//         res.status(200).json('Email enviado exitosamente')
//     })
// })

router.get('/', (req, res) => {
    res.send('email recibido')
})

module.exports = router