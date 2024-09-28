const dbConnection = require('../models/dbConnection');

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { tagID, postID } = req.body;
    const query = `insert into TagsPostadas (idTag, idPost) values (?, ?);`
    dbConnection.query(query, [tagID, postID], (err, results) => {
        if (err) {
            console.error(`Erro ao criar uma tag postada. erro: ${err}`);
            return;
        }

        res.json({ message: `Tag postada criada com sucessp` });
    })
});

module.exports = router;