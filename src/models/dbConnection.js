const mysql = require('mysql2');
const fs = require('fs');

const database = process.env.DB_NAME || 'owlpost';
const hasSSL = process.env.DB_SSL || false;

let pool;

const getPool = () => {
    if (!pool) {
        pool = mysql.createPool({
            host: process.env.DB_HOST || 'localhost',
            port: process.env.DB_PORT,
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASS || '',
            database: database,
            waitForConnections: true,
            connectionLimit: process.env.DB_MAX_CONNECTIONS || 25,
            queueLimit: 0,
            ssl: !hasSSL ? undefined : {
                rejectUnauthorized: true,
                ca: process.env.DB_SSL || fs.readFileSync(__dirname + '../../../ca.pem')
            }
        });
    }

    return pool;
}

const dbConnection = getPool();

// dbConnection.connect((err) => {
//     err
//         ? console.error(`Erro ao tentar conectar ao banco de dados ${database}`)
//         : console.log(`Banco ${database} conectado com sucesso!`);
// });

module.exports = dbConnection;
