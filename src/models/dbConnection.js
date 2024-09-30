const mysql = require('mysql2');

const database = process.env.DB_NAME || 'owlpost';

const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: database
});

dbConnection.connect((err) => {
    err
        ? console.error(`Erro ao tentar conectar ao banco de dados ${database}`)
        : console.log(`Banco ${database} conectado com sucesso!`);
});

module.exports = dbConnection;