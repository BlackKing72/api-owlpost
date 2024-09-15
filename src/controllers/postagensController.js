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
                .status(httpStatus.InternalServerError)
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
                .status(httpStatus.InternalServerError)
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
                .status(httpStatus.InternalServerError)
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

module.exports = router