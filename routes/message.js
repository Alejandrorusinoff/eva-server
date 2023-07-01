const express = require('express')
const router = express.Router()
const messageController = require('../controllers/messageController')
const checkJWT = require("../middlewares/jwt");

//Obtener msj por provincia
router.get('/province/:province', checkJWT, messageController.getMessageByProvince)

//Obtener msj por localidad
router.get('/location/:location', checkJWT, messageController.getMessageByLocation)

//Obtener todas las provincias
router.get('/:provinceOrLocation', checkJWT, messageController.getAllProvinceOrLocation)

//Editar prioridad de un cliente
router.put('/priority', checkJWT, messageController.updatePriorityById)

//Editar proceso de un cliente
router.put('/process', checkJWT, messageController.updateProcessById)

//creamos msj
router.post('/', messageController.createMessage)

//Obtener todos los msjs
router.get('/', checkJWT, messageController.getAllMessage)

//Eleminar un msj
router.delete('/:id', checkJWT, messageController.deleteMessageById)

module.exports = router;