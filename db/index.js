const mongoose = require('mongoose')

const uri = {
    urlAtlas: "mongodb+srv://admin:123@buildingmanagement.z0ysut2.mongodb.net/buildingManagement?retryWrites=true&w=majority", 
    uri: "mongodb+srv://admin:123@cluster0.t0r8cjf.mongodb.net/?retryWrites=true&w=majority"
}

mongoose.connect(uri.uri, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = mongoose