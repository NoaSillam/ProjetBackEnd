const dotenv = require('dotenv');
const myssql = require('mysql');
dotenv.config();
const databaseConnexion = myssql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE

})
module.exports = databaseConnexion;