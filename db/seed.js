const { connection } = require('./index')
const User = require('./models/user')
const Message = require('./models/message')

function deleteModels() {
    const models = [ User, Message ]
    return Promise.all(models.map(model => model?.deleteMany({})))
}

const createClients = async () => {
    console.log("SEED STARTING");
    const seedAdmin = {
        email: "ale_rusinoff13@hotmail.com",
        password: "123",
        isAdmin: true,
    }
    return User.create(seedAdmin)
}

try {
    connection.once("open", () =>
        deleteModels()
        .then(() => createClients())
        .then(() => {
            console.log("SEED TERMINADO");
            process.exit(0);
        })
    );
} catch (err) {
    console.log("Somethin went wrong on the seed process", err.message);
    process.exit(1);
}


