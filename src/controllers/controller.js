const { User, DataGuias } = require('../models/model')
const mid = require('../middleware/jwtoken')

const bcrypt = require('bcrypt');
const saltRounds = 10;


async function index(req, res) {
    res.status(200).json({ message: "Olá mundo" })
}

async function login(req, res) {
    try {
        const { username, password } = req.body
        if (username.trim() === "" || password.trim() === "") {
            return res.status(205).json({ auth: false, status: 205, message: "Preencha todos os campos." })
        }
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(204).json({ auth: false, status: 204, message: "Login ou senha inválidos." })
        }
        const match = await bcrypt.compare(password, user.password)
        if (!match) {
            return res.status(204).json({ auth: false, status: 204, message: "Login ou senha inválidos." })
        }
        const token = await mid.createToken(user._id)
        return res.status(200).json({ auth: true, status: 200, message: "Logado com sucesso!", token })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Erro interno de servidor." })
    }
}

async function getData(req, res) {
    try {
        const id = req.userId
        const user = await User.findById({ _id: id })
        return res.status(200).json({ auth: true, status: 200, message: "Logado com sucesso!" })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Erro interno de servidor." })
    }
}


async function registerGuia(req, res) {
    try {
        const { name, tuss, date } = req.body
        const newRegisterGuia = await DataGuias.create({ name, tuss, date })
        return res.status(201).json({ message: "Guia gerada com sucesso!" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Erro interno de servidor." })
    }
}





module.exports = { index, login, getData, registerGuia }