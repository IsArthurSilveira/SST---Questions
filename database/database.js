const sequelize = require('sequelize');
const connection = new sequelize('SSTQuestions', 'root', 'rooot', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;