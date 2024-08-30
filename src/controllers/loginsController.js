const dbConnection = require('../models/dbConnection');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { email, senha } = req.body;
    const querySelect = "select * from usuarios where email = ? and senha = md5(?)";
    const queryInsert = "insert into logins (id_usuario, logado) values (?, ?)";

    dbConnection.query(querySelect, [email, senha], (err, results) => {
        if (err) {
            throw err;
        }
        
        dbConnection.query(queryInsert, [results[0].id_usuario, true], (err, r) => {
            if (err) {
                throw err;
            }
    
            res.json({
                results: r,
                userID: results[0].id_usuario
            });
        });
    });
});

router.patch('/:id_usuario', (req, res) => {
    const id_usuario = req.params.id_usuario;
    const queryLogado = `select * from logins where id_usuario = ?`;
    const query = `update logins set logado = ? where id_usuario = ?`;

    dbConnection.query(queryLogado, [id_usuario], (err, results) => {
        if (err) {
            throw err;
        }

        const logado = results[0].logado === 1;
        
        dbConnection.query(query, [!logado, id_usuario], (err, results) => {
            if (err) {
                throw err;
            }
    
            res.json(results);
        });
    });

});

router.delete('/:id_usuario', (req, res) => {
    const id_usuario = req.params.id_usuario;
    const query = `delete from logins where id_usuario = ?`;
    dbConnection.query(query, [id_usuario], (err, results) => {
        if (err) {
            throw err;
        }

        res.json(results);
    });
})

module.exports = router;