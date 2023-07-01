const express = require('express')
const router = express.Router()
const emailController = require('../controllers/emailController')

//enviamos mail
router.post('/', emailController.email)

module.exports = router;
