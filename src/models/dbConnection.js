const mysql = require('mysql2');
const fs = require('fs');

const database = process.env.DB_NAME;

const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: database,
    flags: '-SSL',
    ssl: {
        rejectUnauthorized: true,
        ca: process.env.DB_SSL, // fs.readFileSync(__dirname + '../../../ca.pem')
    }
});

dbConnection.connect((err) => {
    err
        ? console.error(`Erro ao tentar conectar ao banco de dados ${database}. erro: ${err}`)
        : console.log(`Banco ${database} conectado com sucesso!`);
});

module.exports = dbConnection;