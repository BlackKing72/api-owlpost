const dbConnection = require('../models/dbConnection');
const httpStatus = require('../models/httpStatus');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const searchIds = req.query.ids;

    const query = searchIds
        ? `select * from Postagens where id in (?);`
        : `select * from Postagens;`;
    
    const ids = searchIds
        ? searchIds.split(',').map(id => parseInt(id))
        : [];
    
    dbConnection.query(query, [ids], (err, results) => {
        if (err) {
            return res
                .status(httpStatus.InternalError)
                .json({ message: 'Erro ao tentar buscar postagens.', erro: err });
        }

        res.json(results);
    });
});

router.get('/user/', (req, res) => {
    const { userID } = req.query;

    const query = `select * from Postagens where idUsuario = ?;`;
    
    dbConnection.query(query, [userID], (err, results) => {
        if (err) {
            return res
                .status(httpStatus.InternalError)
                .json({ message: 'Erro ao tentar buscar postagens.', erro: err });
        }

        res.json(results);
    });
});

router.get('/filter', (req, res) => {
    const { withTags, withoutTags, title, orderBy, sort } = req.query;

    let query = `
        select distinct p.* from Postagens p
            left join TagsPostadas tp on tp.idPost = p.id`;

    const conditions = [];
    const values = [];

    if (withTags) {
        conditions.push(`tp.idTag in (?)`);
        values.push(`${withTags}`);
    }

    if (withoutTags) {
        conditions.push(`tp.idTag not in (?)`);
        values.push(`${withoutTags}`);
    }

    if (title) {
        conditions.push(`p.titulo like ?`);
        values.push(`%${title}%`);
    }

    if (conditions.length > 0) {
        query += ` where ` + conditions.join(' and ');
    }

    query += ` order by p.${orderBy || 'id'} ${sort || ''}`;

    dbConnection.query(query, values, (err, results) => {
        if (err) {
            return res 
                .status(httpStatus.InternalError)
                .json({ message: 'Erro ao tentar buscar posts com tags', erro: err });
        }

        if (results.length === 0) {
            return res 
                .status(httpStatus.NotFound)
                .json({ message: 'Os posts não foram encontradas', erro: err });
        }

        res.json(results);
    });
});

router.post('/', (req, res) => {
    const { userID, title, content } = req.body;
    const query = `insert into Postagens (idUsuario, titulo, conteudo) values (?, ?, ?)`;

    dbConnection.query(query, [userID, title, content], (err, results) => {
        if (err) {
            console.error(`Erro ao criar postagem. erro: ${err}`);
            return;
        }

        res.json({
            message: `Postagem criada com sucesso`,
            postID: results.insertId
        });
    });
});

router.patch('/', (req, res) => {
    const { postID, title, content } = req.body;
    const query = `update postagens set titulo = ?, conteudo = ?, atualizado = true, ultimaatividade = current_timestamp where id = ?;`
    dbConnection.query(query, [title, content, postID], (err, results) => {
        if (err) {
            console.error(`Erro ao atualizar uma postagem. erro: ${err}`);
            return;
        }

        res.json({ mensagem: `Postagem atualizada com sucesso.` });
    });
});

router.patch('/pin', (req, res) => {
    const { postID, isPinned } = req.body;
    const query = `update postagens set fixado = ?, where id = ?;`
    dbConnection.query(query, [isPinned, postID], (err, results) => {
        if (err) {
            console.error(`Erro ao atualizar uma postagem. erro: ${err}`);
            return;
        }

        res.json({ mensagem: `Postagem atualizada com sucesso.` });
    });
});

router.delete('/:postID', (req, res) => {
    const { postID } = req.params;
    const query = `delete from Postagens where id = ?`;
    dbConnection.query(query, [postID], (err, results) => {
        if (err) {
            console.error(`Erro ao deletar uma postagem. erro: ${err}`);
            return;
        }

        res.json({ mensagem: `Postagem deletada com sucesso.` });
    }) 
});

module.exports = router;