const mysql = require('mysql');

const database = process.env.DB_NAME || 'owlpost';

const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: database,
    ssl: {
        rejectUnauthorized: true,
        ca: process.env.DB_SSL || fs.readFileSync(__dirname + '../../../ca.pem')
    }
});

dbConnection.connect((err) => {
    err
        ? console.error(`Erro ao tentar conectar ao banco de dados ${database}`)
        : console.log(`Banco ${database} conectado com sucesso!`);
});

module.exports = dbConnection;