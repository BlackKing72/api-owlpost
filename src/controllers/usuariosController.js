const dbConnection = require('../models/dbConnection');
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    const query = `Select * from Usuarios`;
    dbConnection.query(query, (err, results) => {
        if (err){
            console.error(err);
            return;
        }

        res.json(results);
    });
});

router.get("/id/:id", (req, res) => {
    const id = req.params.id;
    const query = `Select * from Usuarios where id_usuario = ?`;
    dbConnection.query(query, [id], (err, results) => {
        if (err){
            console.error(err);
            return;
        }

        res.json({
            user: results[0]
        });
    });
});

router.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const query = "select * from Usuarios where email = ? and senha = md5(?)";
    dbConnection.query(query, [email, senha], (err, results) => {
        if (err) {
            console.error(err);
            return;
        }

        const userID = results[0] ? results[0].id_usuario : undefined;
 
        res.json({
            results: results,
            userID: userID,
        });
    });
})

router.put('/', (req, res) => {
    const { nome, email, senha, foto_perfil } = req.body;
    const query = `insert into Usuarios (nome, email, senha, foto_perfil) values (?, ?, md5(?), ?);`
    dbConnection.query(query, [nome, email, senha, foto_perfil], (err, results) => {
        if (err){
            console.error(err);
            return;
        }

        res.json(results);
    });
})

router.patch('/', (req, res) => {
    const { id, foto_perfil } = req.body;
    const query = `update Usuarios set foto_perfil = ? where id_usuario = ?;`
    dbConnection.query(query, [foto_perfil, id], (err, results) => {
        if (err){
            console.error(err);
            return;
        }

        res.json(results);
    });
})

module.exports = router;