const mongoose = require('mongoose')

const MessageScherma = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /.+@.+..+/,
    },
    province: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    direction: {
        type: String,
        required: true,
    },
    product: {
        type: String,
        required: true,
    },
    detail: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        /* required: true, */
    },
    pending: {
        type: String,
        /* required: true, */
    },
    process: {
        type: String,
        /* required: true, */
    },
    finished: {
        type: String,
        /* required: true, */
    },
    date: { 
        type: String, 
        default: new Date().toLocaleDateString(), 
    },
    hour: {
        type: String,
        default: new Date().toLocaleTimeString()
    }
})

const Message = mongoose.model('Message', MessageScherma)

module.exports = Message