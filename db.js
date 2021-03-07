const Sequelize = require('sequelize');

const sql = new Sequelize('dojo-chat', 'root', 'MySQL1234', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sql;