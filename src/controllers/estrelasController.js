const dbConnection = require('../models/dbConnection');
const httpStatus = require('../models/httpStatus');

const express = require('express');
const router = express.Router();

router.get('/postagens/:postID', (req, res) => {
    const { postID } = req.params;
    const query = `select from Estrelas where idPostagem = ?`;
    dbConnection.query(query, [postID], (err, results) => {
        if (err) {
            console.error(`Erro ao buscar Estrelas. erro: ${err}`);
            return;
        }

        const estrelas = [...results];

        res.json({
            estrelas: estrelas.length,
        });
    });
});

router.get('/usuarios/:userID', (req, res) => {
    const { userID } = req.params;
    const query = `select from Estrelas where idUsuario = ?`;
    dbConnection.query(query, [userID], (err, results) => {
        if (err) {
            console.error(`Erro ao buscar Estrelas. erro: ${err}`);
            return;
        }

        const estrelas = [...results];

        res.json({
            estrelas: estrelas.length,
        });
    });
});

router.get('/', (req, res) => {
    const { userID, postID } = req.query;
    const query = `select from Estrelas where idUsuario = ? and idPostagem = ?`;
    dbConnection.query(query, [userID, postID], (err, results) => {
        if (err) {
            console.error(`Erro ao buscar Estrelas. erro: ${err}`);
            return;
        }

        const estrelas = [...results];

        res.json({
            estrelas: estrelas.length,
        });
    });
});

router.post('/', (req, res) => {
    const { userID, postID } = req.body;
    const query = `insert into Estrelas (idUsuario, idPostagem) values (?, ?)`;
    dbConnection.query(query, [userID, postID], (err, results) => {
        if (err) {
            console.error(`Erro ao cria Estrela. erro: ${err}`);
            return;
        }

        res.json({
            mensagem: `Estrela criada com sucesso`,
        });
    });
});

router.delete('/', (req, res) => {
    const { userID, postID } = req.query;
    const query = `delete Estrelas where idUsuario = ? and idPostagem = ?`;
    dbConnection.query(query, [userID, postID], (err, results) => {
        if (err) {
            console.error(`Erro ao cria Estrela. erro: ${err}`);
            return;
        }

        res.json({
            mensagem: `Estrela deletada com sucesso`,
        });
    });
});

module.exports = router;