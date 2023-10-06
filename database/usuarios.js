const Sequelize = require('sequelize');
const database = require('./database');

const Usuarios = database.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Usuarios;