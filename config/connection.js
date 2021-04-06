const Sequelize = require('sequelize');
require('dotenv').config();
const {DB_NAME, DB_USER, DB_PASSWORD, DB_HOSTNAME, DB_DIALECT, DB_PORT} = process.env;
// Change the dialect if you need to (most likely to mysql)
// const dbDialect = 'mariadb';

const sequelize = new Sequelize(
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  {
    host: DB_HOSTNAME,
    dialect: DB_DIALECT,
    port: DB_PORT,
  }
);

module.exports = sequelize;
