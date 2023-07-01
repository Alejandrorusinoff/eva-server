const User = require('../db/models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt");

module.exports = {
    //Login
    login: function(req, res) {
        const {email, password} = req.body
        User.findOne({email})
        .then(users => {
            if(!users) {
                Tenants.findOne({email}).populate('departamenId')
                .then(users => {
                    if(!users) res.json("Usuario no encontrado")
                    else{
                        if(bcrypt.compareSync(password, users.password)) {
                            let token = jwt.sign({users}, 'albondiga', {expiresIn: '7d'})
                            res.json({users, token})
                        }
                        else{res.json("Password inválido")}
                    }
                })
            }
            else{
                if(bcrypt.compareSync(password, users.password)) {
                    let token = jwt.sign({users}, 'albondiga', {expiresIn: '7d'})
                    res.json({users, token})
                }
                else{res.json("Password inválido")}
            }
        })
        .catch(err => res.status(500).json(err))
    },
}