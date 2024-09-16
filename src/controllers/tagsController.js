const dbConnection = require('../models/dbConnection');
const httpStatus = require('../models/httpStatus');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const query = `select * from Tags`;
    dbConnection.query(query, (err, results) => {
        if (err) {
            return res 
                .status(httpStatus.InternalError)
                .json({ message: 'Erro ao tentar buscar tags', erro: err });
        }

        if (results.length === 0) {
            return res 
                .status(httpStatus.NotFound)
                .json({ message: 'As tags não foram encontradas', erro: err });
        }

        res.json(results);
    });
})

router.get("/:postID", (req, res) => {
    const postID = req.params.postID;

    const query = `
        select t.* from TagsPostadas tp 
            left join Tags t on tp.idTag = t.id 
            where idPost = ?;`;

    dbConnection.query(query,[postID], (err, results) => {
        if (err) {
            return res 
                .status(httpStatus.InternalError)
                .json({ message: 'Erro ao tentar buscar tags postadas', erro: err });
        }

        if (results.length === 0) {
            return res 
                .status(httpStatus.NotFound)
                .json({ message: 'As tags postadas não foram encontradas', erro: err });
        }

        res.json(results);
    });
});

router.get('/search', (req, res) => {
    const { nome } = req.query;
    
})

module.exports = router