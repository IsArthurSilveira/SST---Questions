const sequelize = require('sequelize');
const connection = new sequelize('SSTQuestions', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;