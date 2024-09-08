const dbConnection = require('../models/dbConnection');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const query = `select * from Conquistas`;
    dbConnection.query(query, (err, results) => {
        if (err) {
            throw err;
        }

        res.json(results);
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const query = `select * from Conquistas where id_conquista = ?`;
    dbConnection.query(query, [id], (err, results) => {
        if (err) {
            throw err;
        }

        res.json(results);
    });
});

router.get('/jogo/:id', (req, res) => {
    const id = req.params.id;
    const query = `select * from Conquistas where id_jogo = ?`;
    dbConnection.query(query, [id], (err, results) => {
        if (err) {
            throw err;
        }

        res.json(results);
    });
});

router.put('/', (req, res) => {
    const { nome, descricao, foto_conquista, id_jogo } = req.body;
    const query = `insert into Conquistas (nome, descricao, foto_conquista, id_jogo) values (?, ?, ?, ?);`
    dbConnection.query(query, [nome, descricao, foto_conquista, id_jogo], (err, results) => {
        if (err) {
            throw err;
        }

        res.json(results);
    });
});

module.exports = router;