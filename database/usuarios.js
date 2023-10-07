const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const database = require('./database');
const { rmSync } = require('fs');

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
      allowNull: false,
      unique: true
    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  Usuarios.beforeCreate(async (usuario) => {
    const salt = await bcrypt.genSalt(10);
    usuario.senha = await bcrypt.hash(usuario.senha, salt);
  });
  
Usuarios.sync()
  .then(() => {
    console.log('Tabela criada com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao criar tabela:', error);
  });

module.exports = Usuarios;  