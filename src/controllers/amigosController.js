const dbConnection = require('../models/dbConnection');
const httpStatus = require('../models/httpStatus');

const express = require('express');
const router = express.Router();

// Retorna todos os amigos
router.get('/:id', (req, res) => {
    const userID = req.params.id;

    const query = `select * from Amigos where idUsuario = ? and status = 'aceito'`;
    dbConnection.query(query, [userID], (err, results) => {
        if (err) {
            return res.status(httpStatus.InternalError).json({
                mensagem: `Erro ao buscar amigos. erro: ${err}`
            });
        }

        res.json({
            amigos: results || [],
        });
    });
});

// Retorna todos os pedidos de amizade
router.get('/pedidos/:id', (req, res) => {
    const userID = req.params.id;

    const query = `select * from Amigos where idUsuario = ? and status = 'pedido'`;
    dbConnection.query(query, [userID, userID], (err, results) => {
        if (err) {
            return res.status(httpStatus.InternalError).json({
                mensagem: `Erro ao buscar pedidos de amizade. erro: ${err}`
            });
        }

        res.json({
            pedidos: results || [],
        });
    });
});

// Cria um pedido de amizade
router.post('/', (req, res) => {
    const { idUsuario, idAmigo } = req.body;

    const query = `insert into Amigos (idUsuario, idAmigo) values (?, ?), (?, ?)`;
    dbConnection.query(query, [idUsuario, idAmigo, idAmigo, idUsuario], (err, results) => {
        if (err) {
            return res.status(httpStatus.InternalError).json({
                mensagem: `Erro ao criar pedido de amizade. erro: ${err}`
            });
        }

        res.json({
            mensagem: `Pedido de amizade criado com sucesso.`
        });
    });
});

// Atualiza um pedido de amizade
// O status pode ser um desses: 'pedido', 'aceito' ou 'bloqueado'.
router.patch('/', (req, res) => {
    const { status, idUsuario, idAmigo } = req.body;
    const ids = [idUsuario, idAmigo];

    const query = `
        update amigos set status = ?, dataCriacao = current_timestamp 
        where idUsuario in (?) and idAmigo in (?)`;

    dbConnection.query(query, [status, ids, ids], (err, results) => {
        if (err) {
            return res.status(httpStatus.InternalError).json({
                mensagem: `Erro ao atualizar pedido de amizade. erro: ${err}`
            });
        }

        res.json({
            mensagem: `Pedido de amizade atualizado com sucesso.`
        });
    });
});

// Deleta um pedido de amizade
router.delete('/', (req, res) => {
    const { idUsuario, idAmigo } = req.body;
    const ids = [idUsuario, idAmigo];

    const query = `delete from amigos where idUsuario in (?) and idAmigo in (?)`;
    dbConnection.query(query, [ids, ids], (err, results) => {
        if (err) {
            return res.status(httpStatus.InternalError).json({
                mensagem: `Erro ao deletar pedido de amizade. erro: ${err}`
            });
        }

        res.json({
            mensagem: `Pedido de amizade deletado com sucesso.`
        });
    })
});

module.exports = router;