const Message = require('../db/models/message')

module.exports = {
    //Crear msj
    createMessage: function(req, res) {
        const { fullname, phone, email, province, location, direction, option, detail } = req.body
        Message.create({ fullname, phone, email, province, location, direction, product: option, detail })
        .then(() => res.json('mensaje creado exitosamente') )
        .catch(err => console.log(err))
    },

    //Obtener todos los msj
    getAllMessage: function (req, res) {
        Message.find()
        .then(msj => res.json(msj))
        .catch(err => res.json(err))
    },

    //Obtener msj por provincia
    getMessageByProvince: function (req, res) {
        const { province } = req.params
        Message.find({province: province})
        .then(msjs => {
            console.log(msjs)
            res.json(msjs)})
        .catch(err => res.json(err))
    },

    //Obtener msj por localidad
    getMessageByLocation: function (req, res) {
        console.log(req.params)
        const { location } = req.params
        Message.find({location: location})
        .then(msjs => {
            console.log(msjs)
            res.json(msjs)})
        .catch(err => res.json(err))
    },

    //Obtener provincias
    getAllProvinceOrLocation: function (req, res) {
        Message.find({}, req.params.provinceOrLocation)
        .then(data => res.send(data))
        .catch(err => res.send(err))
    },

    //Actualizar prioridad
    updatePriorityById: function (req, res) {
        const { id, data } = req.body
        Message.findOneAndUpdate({ _id: id }, { priority: data }, { returnOriginal: false }) 
        .then((data) => res.json(data))
        .catch(err => console.log(err))
    },

    //Actualizar procesos
    updateProcessById: function (req, res) {
        const { id, data } = req.body
        if (data === 'red') {
            Message.findOneAndUpdate({ _id: id }, { pending: data, process: 'white', finished: 'white' }, { returnOriginal: false })
            .then((data) => {
                const { pending, process, finished } = data
                res.json({ pending, process, finished })
            })
            .catch(err => console.log(err))
        }
        else if (data === 'yellow') {
            Message.findOneAndUpdate({ _id: id }, { pending: 'white', process: data, finished: 'white' }, { returnOriginal: false })
            .then((data) => {
                const { pending, process, finished } = data
                res.json({ pending, process, finished })
            })
            .catch(err => console.log(err))
        }
        else if (data === '#0adb0a') {
            Message.findOneAndUpdate({ _id: id }, { pending: 'white', process: 'white', finished: '#0adb0a' }, { returnOriginal: false })
            .then((data) => {
                const { pending, process, finished } = data
                res.json({ pending, process, finished })
            })
            .catch(err => console.log(err))
        }
        else {
            Message.findOneAndUpdate({ _id: id }, { pending: 'white', process: 'white', finished: 'white' }, { returnOriginal: false })
            .then((data) => {
                const { pending, process, finished } = data
                res.json({ pending, process, finished })
            })
            .catch(err => console.log(err))
        }
    },

    //Eleminar un msj
    deleteMessageById: function (req, res) {
        const { id } = req.params
        Message.deleteOne({_id: id})
        .then(() => {
            Message.find()
            .then(data => res.json(data))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }
}