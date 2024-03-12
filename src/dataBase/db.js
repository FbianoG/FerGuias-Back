const mongoose = require('mongoose')

const URL = "mongodb+srv://123:123@cluster0.cxuz0xo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connectDataBase() {
    const connected = await mongoose.connect(URL)
    if (connected) {
        console.log("DataBase connected !");
    }
}

module.exports = { connectDataBase }