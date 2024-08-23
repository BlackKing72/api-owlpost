const mysql = require('mysql');
const database = 'owlpost';

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: database
});

dbConnection.connect((err) => {
    err
        ? console.error(`Erro ao tentar conectar ao banco de dados ${database}`)
        : console.log(`Banco ${database} conectado com sucesso!`);
});

module.exports = dbConnection;