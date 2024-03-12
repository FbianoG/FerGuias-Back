const mongoose = require('mongoose')







const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});


const DataGuiasSchema = new mongoose.Schema({
    name: String,
    tuss: String,
    date: String,
})









const User = mongoose.model('User', UserSchema)

const DataGuias = mongoose.model('DataGuias', DataGuiasSchema)

module.exports = { User, DataGuias }
